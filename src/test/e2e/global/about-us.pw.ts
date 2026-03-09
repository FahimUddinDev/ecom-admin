import { test } from "@playwright/test";
import { pageHealthCheck } from "../utils/pageHealthCheck";

test.describe("About us Page", () => {
  test("should be healthy and error-free", async ({ page }) => {
    await pageHealthCheck(page, {
      path: "/about-us",
      mustContain: ["Who We Are"],
      mustNotContain: ["error", "404", "not found"],
      checkLinks: false,
    });
  });
});
