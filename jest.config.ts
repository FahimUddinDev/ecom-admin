import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/store/(.*)$": "<rootDir>/src/store/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/datas/(.*)$": "<rootDir>/src/datas/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/design-system/(.*)$": "<rootDir>/src/design-system/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.ts",
    "^swiper$": "<rootDir>/__mocks__/empty.ts",
    "^swiper/.*$": "<rootDir>/__mocks__/empty.ts",
    "^next/image$": "<rootDir>/__mocks__/nextImageMock.ts",
    "^next/link$": "<rootDir>/__mocks__/nextLinkMock.ts",
    "^next/navigation$": "<rootDir>/__mocks__/nextNavigationMock.ts",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: [".*\\.pw\\.ts$", "src/test/home.test.tsx"],
};
export default createJestConfig(customJestConfig);
