const { test, expect } = require('@playwright/test');
const { resolve } = require('path');
const fs = require('fs');

const BASE_URL = ''; // Use an empty string since we are not using a server or website

async function setPageContent(page, filePath) {
  const pagePath = resolve(__dirname, `../pages/${filePath}`);
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  await page.setContent(pageContent);
}

test.describe('Blog1 Page Tests', () => {
  const pageFile = 'blog1.js';

  test('Blog1 page renders correctly', async ({ page }) => {
    await setPageContent(page, pageFile);

    // Wait for the main heading to be available
    await page.waitForSelector('h1');

    const heading = await page.textContent('h1');
    expect(heading).toBe('Patty');

    // Add more tests for other elements on the blog1.js page as needed
  });
});
