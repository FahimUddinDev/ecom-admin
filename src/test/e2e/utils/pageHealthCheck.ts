import { expect, Page, Response } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

type PageHealthOptions = {
  path: string;
  mustContain?: string[];
  mustNotContain?: (string | RegExp)[];
  checkLinks?: boolean;
  checkImages?: boolean;
};

export async function pageHealthCheck(
  page: Page,
  {
    path,
    mustContain = [],
    mustNotContain = [/error/i, /404/i, /not found/i],
    checkLinks = false,
    checkImages = true,
  }: PageHealthOptions,
) {
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];
  const brokenImages: string[] = [];

  // Capture console errors
  await page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  // Capture failed network requests
  await page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} → ${request.failure()?.errorText}`);
  });

  const url = `${BASE_URL}${path}`;

  const response: Response | null = await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  expect(response, "Page did not load").not.toBeNull();
  expect(response!.status(), "Page returned error status").toBeLessThan(400);

  // Give lazy images time to load
  await page.waitForTimeout(1000);

  await page.waitForLoadState("networkidle").catch(async () => {
    const bodyText = await page.locator("body").innerText();
    if (mustContain.length > 0) {
      for (const text of mustContain) {
        expect(bodyText).toContain(text);
      }
    }

    if (mustNotContain.length > 0) {
      for (const text of mustNotContain) {
        expect(bodyText).not.toMatch(text);
      }
    }
  });

  // ✅ SMART image validation
  if (checkImages) {
    const images = await page.locator("img").all();

    for (const img of images) {
      const src = await img.getAttribute("src");

      // Ignore placeholders / SVGs / empty
      if (!src || src.startsWith("data:") || src.endsWith(".svg")) {
        continue;
      }

      const isBroken = await img.evaluate((el: HTMLImageElement) => {
        return el.complete && el.naturalWidth === 0;
      });

      if (isBroken) {
        brokenImages.push(src);
      }
    }

    expect(
      brokenImages,
      `Broken images detected:\n${brokenImages.join("\n")}`,
    ).toEqual([]);
  }

  // Optional: broken internal links
  if (checkLinks) {
    const links = await page.locator("a").all();

    for (const link of links) {
      const href = await link.getAttribute("href");

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("http")
      ) {
        continue;
      }

      const res = await page.request.get(`${BASE_URL}${href}`);
      expect(res.status(), `Broken link: ${href}`).toBeLessThan(400);
    }
  }

  expect(consoleErrors, "Console errors detected").toEqual([]);
  expect(failedRequests, "Network/API errors detected").toEqual([]);
}
