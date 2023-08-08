const { test, expect } = require('@playwright/test');
const { resolve } = require('path');
const fs = require('fs');

const BASE_URL = ''; // Use an empty string since we are not using a server or website

async function setPageContent(page, filePath) {
  const pagePath = resolve(__dirname, `../pages/${filePath}`);
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  await page.setContent(pageContent);
}

test.describe('Blog2 Page Tests', () => {
  const pageFile = 'blog2.js';

  test('Blog2 page renders correctly', async ({ page }) => {
    await setPageContent(page, pageFile);

    // Wait for the largeText element to be available
    await page.waitForSelector('.largeText');

    const largeText = await page.textContent('.largeText');
    expect(largeText).toContain(
      '28-year-old Fiona chose Rise & Grind as her favorite gathering spot. Our casual atmosphere, consistent high-quality coffee, and no-fuss approach make it the perfect spot for her to connect with friends. In Rise & Grind, Fiona found a genuine, comfortable space to unwind and enjoy simple pleasures.'
    );

    // Add more tests for other elements on the blog2.js page as needed
  });
});
