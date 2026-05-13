import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/services",
  "/work",
  "/process",
  "/about",
  "/contact",
  "/blog",
] as const;

for (const route of ROUTES) {
  test(`${route} renders, returns 200, and shows the LaunchhPad wordmark`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status(), `expected 200 status for ${route}`).toBe(200);

    // Wordmark text inside the sticky header. The "P" is split into a span,
    // so we assert against the full accessible name rather than a single text node.
    await expect(
      page.getByRole("link", { name: "LaunchhPad home" }).first(),
    ).toBeVisible();

    // And the literal token must be reachable somewhere in the document.
    expect(await page.content()).toContain("LaunchhPad");
  });
}
