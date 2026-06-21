const { test, expect } = require('@playwright/test');

test.describe('Practice Software Testing - Login Tests', () => {

  test('TC-01: Login with invalid credentials shows error', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.fill('[data-test="email"]', 'invaliduser@test.com');
    await page.fill('[data-test="password"]', 'WrongPassword123');
    await page.click('[data-test="login-submit"]');
    await expect(page.locator('[data-test="login-error"]')).toBeVisible();
  });

  test('TC-02: Login page loads with required fields', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await expect(page.locator('[data-test="email"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-submit"]')).toBeVisible();
  });

  test('TC-03: Search for an existing product', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');
    await page.fill('[data-test="search-query"]', 'Hammer');
    await page.click('[data-test="search-submit"]');
    await expect(page.locator('.card')).toHaveCount(6);
  });

});