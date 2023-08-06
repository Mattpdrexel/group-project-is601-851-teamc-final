const { test, expect } = require('@playwright/test');

test('loads homepage and checks elements', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Assuming your app runs on port 3000

  // Check for the presence of the main heading
  const heading = await page.textContent("h1");
  expect(heading).toBe("Rise & Grind");
  
  // Check for the presence of the logo image
  const logo = await page.$('img[alt="Rise & Grind Logo"]');
  expect(logo).toBeTruthy();

  // Additional checks can be added...
});
