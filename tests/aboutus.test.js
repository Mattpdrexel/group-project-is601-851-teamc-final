const { test, expect } = require('@playwright/test');
const { resolve } = require('path');
const fs = require('fs');

const BASE_URL = ''; // Use an empty string since we are not using a server or website

async function setPageContent(page, filePath) {
  const pagePath = resolve(__dirname, `../pages/${filePath}`);
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  await page.setContent(pageContent);
}

test.describe('About Us Page Tests', () => {
  const pageFile = 'aboutus.js';

  test('About Us page content', async ({ page }) => {
    await setPageContent(page, pageFile);

    // Wait for the main heading to be available
    await page.waitForSelector('h1');

    const navbarTitle = await page.$('h1');
    expect(await navbarTitle.innerText()).toBe('About Rise & Grind');

    // Add more tests for other elements on the aboutus.js page as needed
  });
});
