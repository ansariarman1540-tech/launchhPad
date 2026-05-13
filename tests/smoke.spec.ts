import { test, expect } from "@playwright/test";

test("home page returns 200 and mentions LaunchhPad", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  const body = await page.content();
  expect(body).toContain("LaunchhPad");
});
