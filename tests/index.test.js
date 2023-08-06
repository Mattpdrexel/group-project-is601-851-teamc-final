const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('loads homepage and checks elements', async ({ page }) => {
  await page.goto(BASE_URL);

  // Check for the presence of the main heading
  const heading = await page.textContent("h1");
  expect(heading).toBe("Rise & Grind");
  
  // Check for the presence of the logo image
  const logo = await page.$('img[alt="Rise & Grind Logo"]');
  expect(logo).toBeTruthy();

  // Additional checks can be added...
});
