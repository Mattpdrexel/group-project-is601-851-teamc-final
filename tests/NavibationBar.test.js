const { test, expect } = require('@playwright/test');

// URLs of the pages you want to test
const pages = ['/', '/aboutus', '/blog1', '/blog2', '/blog3', '/privacypolicy'];

test.describe('Navigation Bar Tests', () => {

  for (let pageUrl of pages) {
    test(`Navbar is visible on ${pageUrl}`, async ({ page }) => {
      await page.goto(`http://localhost:3000${pageUrl}`);

      // Check for navigation bar based on its unique element, e.g., h1 text
      const navbarTitle = await page.$('h1');
      expect(await navbarTitle.innerText()).toBe('Rise & Grind');

      // You can add more checks if needed, e.g., for individual links
    });
  }
});
