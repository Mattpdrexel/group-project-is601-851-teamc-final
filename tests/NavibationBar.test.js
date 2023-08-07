const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// URLs of the pages you want to test
const pages = ['/', '/aboutus', '/blog1', '/blog2', '/blog3', '/privacypolicy'];

test.describe('Navigation Bar Tests', () => {

  for (let pageUrl of pages) {
    test(`Navbar is visible on ${pageUrl}`, async ({ page }) => {
      await page.goto(`${BASE_URL}${pageUrl}`);

      // Check for navigation bar based on its unique element, e.g., h1 text
      const navbarTitle = await page.$('h1');
      expect(await navbarTitle.innerText()).toBe('Rise & Grind');

      // You can add more checks if needed, e.g., for individual links
    });
  }

  test('About Us page content', async ({ page }) => {
    const pageUrl = '/aboutus'; // URL for the About Us page
    await page.goto(`${BASE_URL}${pageUrl}`);

    // Check for the presence of the navigation bar based on its unique element, e.g., h1 text
    const navbarTitle = await page.$('h1');
    expect(await navbarTitle.innerText()).toBe('Rise & Grind');

    // Check for the presence of the "About Rise & Grind" heading
    const aboutUsHeading = await page.textContent('h1');
    expect(aboutUsHeading).toBe('About Rise & Grind');

    // Check for the presence of the "Serving Everyday Heroes with Everyday Coffee" subtitle
    const subtitle = await page.textContent('h2');
    expect(subtitle).toBe('Serving Everyday Heroes with Everyday Coffee');

    // Check for the presence of paragraphs on the page
    const paragraphs = await page.$$('p');
    expect(paragraphs.length).toBeGreaterThan(0);

    // Add more specific checks for other elements on the About Us page if needed
  });

});
