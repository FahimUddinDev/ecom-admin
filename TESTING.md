# Test Setup Documentation

This project uses a dual testing approach with **Jest** for unit/component tests and **Playwright** for end-to-end (E2E) tests.

## Test Structure

### Unit & Component Tests (Jest)

Located in: `src/test/`

- `rendaring.test.tsx` - Home page component render tests
- `home.test.tsx` - Home page data and section tests

### E2E Tests (Playwright)

Located in: `src/test/`

- `homepage.pw.ts` - End-to-end browser tests for homepage

## Running Tests

### Jest Tests (Component & Unit Tests)

```bash
# Run all Jest tests once
npm run test

# Run Jest tests in watch mode
npm run test:watch
```

### Playwright Tests (E2E Tests)

```bash
# Run Playwright tests
npm run test:e2e

# Run Playwright tests with UI (interactive)
npm run test:e2e:ui

# Run specific Playwright test file
npx playwright test src/test/homepage.pw.ts
```

### Run All Tests

```bash
npm run test:all
```

## Test Coverage

### Jest Tests

✅ **Component Rendering**

- Verifies Home page renders correctly with mocked dependencies
- Tests Redux provider integration
- Validates page heading displays correctly

✅ **Section Rendering**

- Confirms all major page sections render (Hero, Clients, Products, Features, etc.)
- Validates mock components are properly integrated

### Playwright Tests

✅ **Homepage Loading**

- Verifies page loads at `http://localhost:3000`
- Checks page title contains expected keywords
- Validates hero section displays

✅ **Content Verification**

- Trust badge with "3,000+ customers"
- Call-to-action buttons visible
- All major sections present (Hero, Clients, Products, FAQ)

✅ **Responsive Design**

- Checks container and layout elements exist
- Validates proper grid/flex structure

✅ **Performance & Accessibility**

- Verifies images load without errors
- Checks meta tags (viewport, description)
- Validates heading structure

✅ **Data Checks**

- Heading text: "Wholesale Designer Eyewear for Retailers Worldwide"
- Trust statement: "Trusted by 3,000+ customers"
- Main sections visibility

## Configuration Files

### `jest.config.ts`

- Configures Jest for Next.js with jsdom test environment
- Maps module aliases (`@/components`, `@/app`, etc.)
- Mocks external dependencies (Swiper, Next.js modules)
- Excludes Playwright tests from Jest execution

### `jest.setup.ts`

- Mocks Next.js Image, Link, and navigation components
- Mocks Swiper slider library
- Sets up testing library DOM matchers

### `playwright.config.ts`

- Configures Playwright for multi-browser testing (Chromium, Firefox, Safari)
- Sets base URL to `http://localhost:3000`
- Auto-starts dev server before tests
- Enables HTML report generation

### `package.json` Scripts

```json
{
  "test": "jest", // Unit/component tests
  "test:watch": "jest --watch", // Watch mode for development
  "test:e2e": "playwright test", // E2E tests
  "test:e2e:ui": "playwright test --ui", // Interactive Playwright UI
  "test:all": "npm run test && npm run test:e2e" // All tests
}
```

## Mocked Modules

### External Dependencies

- **Swiper**: Mocked to prevent slider initialization errors
- **Next.js Image**: Returns simple `<img>` tag for testing
- **Next.js Link**: Returns simple `<a>` tag for testing
- **Next.js Navigation**: Mocks useRouter, usePathname, useSearchParams

### Redux Store

- Test store created without Redux Persist for unit tests
- Production store uses Redux Persist for localStorage persistence

## Example Test: Loading URL and Checking Data

### Unit Test (Jest)

```typescript
import { render, screen } from "@testing-library/react";
import Home from "@/app/(global)/(layout1)/page";
import { TestProviders } from "../../__mocks__/testProviders";

it("renders and checks data", () => {
  render(
    <TestProviders>
      <Home />
    </TestProviders>
  );

  // Check for specific text/data
  expect(screen.getByText(/Wholesale Designer Eyewear/)).toBeInTheDocument();
  expect(screen.getByText(/3,000/)).toBeInTheDocument();
});
```

### E2E Test (Playwright)

```typescript
import { test, expect } from "@playwright/test";

test("homepage loads and shows content", async ({ page }) => {
  // Navigate to URL
  await page.goto("/");

  // Check for data/content
  const heading = await page.locator("text=/Wholesale Designer/").isVisible();
  expect(heading).toBe(true);

  const customers = await page.locator("text=/3,000/").isVisible();
  expect(customers).toBe(true);
});
```

## Troubleshooting

### Jest Tests Failing

1. **Module not found**: Check `jest.config.ts` moduleNameMapper paths
2. **Component not rendering**: Verify all child components are mocked
3. **Timeout errors**: Increase Jest timeout in test file:
   ```typescript
   jest.setTimeout(10000);
   ```

### Playwright Tests Failing

1. **Connection refused**: Ensure dev server is running (`npm run dev`)
2. **Element not found**: Increase timeout or add waits:
   ```typescript
   await page.waitForSelector("text=/Expected Text/");
   ```
3. **Screenshot mismatches**: Update snapshots with `--update-snapshots` flag

## Best Practices

1. ✅ Keep unit tests fast (no external requests)
2. ✅ Use E2E tests for critical user flows
3. ✅ Mock external dependencies in unit tests
4. ✅ Use test IDs for reliable element selection
5. ✅ Clean up after tests (clear state, mocks)
6. ✅ Make tests independent (no test order dependencies)

## Next Steps

- Add more E2E tests for user interactions (form submission, navigation)
- Add performance tests using Lighthouse integration
- Set up CI/CD pipeline to run tests automatically
- Add visual regression testing with Playwright screenshots
- Expand test coverage for all page components
