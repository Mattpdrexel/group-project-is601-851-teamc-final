const { test, expect } = require('@playwright/test');
const { resolve } = require('path');
const fs = require('fs');

const BASE_URL = ''; // Use an empty string since we are not using a server or website

// Function to set the page content directly for testing
async function setPageContent(page, filePath) {
  const pagePath = resolve(__dirname, `../pages/${filePath}`);
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  await page.setContent(pageContent);

  // Wait for the main heading to be available
  await page.waitForSelector('h1');
}

test.describe('Navigation Bar Tests', () => {
  test('Navbar is visible on index.js', async ({ page }) => {
    await setPageContent(page, 'index.js');

    const navbarTitle = await page.$('h1');
    expect(await navbarTitle.innerText()).toBe('Real Coffee, Real People');
  });
});
