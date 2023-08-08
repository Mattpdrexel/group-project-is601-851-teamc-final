const { test, expect } = require('@playwright/test');
const { resolve } = require('path');
const fs = require('fs');

const BASE_URL = ''; // Use an empty string since we are not using a server or website

async function setPageContent(page, filePath) {
  const pagePath = resolve(__dirname, `../pages/${filePath}`);
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  await page.setContent(pageContent);
}

test.describe('Blog3 Page Tests', () => {
  const pageFile = 'blog3.js';

  test('Blog3 page renders correctly', async ({ page }) => {
    await setPageContent(page, pageFile);

    // Wait for the steveImage element to be available
    await page.waitForSelector('img[alt="Steve"]');

    const steveImage = await page.$('img[alt="Steve"]');
    expect(steveImage).toBeTruthy();

    // Add more tests for other elements on the blog3.js page as needed
  });
});
