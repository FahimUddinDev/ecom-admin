import "@testing-library/jest-dom";
import React from "react";

// -----------------------------
// Mock Next.js Image
// -----------------------------
const MockedImage = (props: Record<string, any>) => {
  // prevent console warnings for 'fill' attribute
  const { fill, ...rest } = props;
  return React.createElement("img", rest);
};
MockedImage.displayName = "Image";

jest.mock("next/image", () => ({
  __esModule: true,
  default: MockedImage,
}));

// -----------------------------
// Mock Next.js Link
// -----------------------------
const MockedLink = (props: Record<string, unknown>) => {
  return React.createElement("a", props);
};
MockedLink.displayName = "Link";

jest.mock("next/link", () => ({
  __esModule: true,
  default: MockedLink,
}));

// -----------------------------
// Mock Next.js navigation hooks
// -----------------------------
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// -----------------------------
// Mock Swiper modules
// -----------------------------
jest.mock("swiper", () => ({
  __esModule: true,
  Swiper: () => null,
}));

const MockedSwiperSlide = (props: Record<string, unknown>) =>
  React.createElement("div", props);
MockedSwiperSlide.displayName = "SwiperSlide";

jest.mock("swiper/react", () => ({
  __esModule: true,
  Swiper: () => null,
  SwiperSlide: MockedSwiperSlide,
}));

jest.mock("swiper/css");
jest.mock("swiper/css/bundle");
jest.mock("swiper/modules");

// -----------------------------
// Silence fill warnings for next/image in tests
// -----------------------------
const originalError = console.error;
console.error = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("Received `true` for a non-boolean attribute `fill`")
  ) {
    return;
  }
  originalError(...args);
};

// -----------------------------
// Optional: Silence act warnings in strict mode
// -----------------------------
const originalWarn = console.warn;
console.warn = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes(
      "Warning: An update to %s inside a test was not wrapped in act(...)",
    )
  ) {
    return;
  }
  originalWarn(...args);
};

// -----------------------------
// Ant Design MessageChannel Polyfill
// -----------------------------
if (typeof MessageChannel === "undefined") {
  class MessageChannelMock {
    port1 = {
      postMessage: jest.fn(),
      onmessage: null as any,
    };
    port2 = {
      postMessage: jest.fn(),
      onmessage: null as any,
    };
  }

  // @ts-ignore
  global.MessageChannel = MessageChannelMock;
}
