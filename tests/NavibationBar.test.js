const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// URLs of the pages you want to test
const pages = ['/', '/aboutus', '/blog1', '/blog2', '/blog3', '/privacypolicy'];

test.describe('Navigation Bar Tests', () => {

  for (let pageUrl of pages) {
    test(`Navbar is visible on ${pageUrl}`, async ({ page }) => {
      await page.goto(`${BASE_URL}${pageUrl}`);
      const navbarTitle = await page.$('h1');
      expect(await navbarTitle.innerText()).toBe('Rise & Grind');
    });
  }

  test('About Us page content', async ({ page }) => {
    const pageUrl = '/aboutus';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const navbarTitle = await page.$('h1');
    expect(await navbarTitle.innerText()).toBe('Rise & Grind');
    const aboutUsHeading = await page.textContent('h1');
    expect(aboutUsHeading).toBe('Rise & Grind');
    const subtitle = await page.textContent('h2');
    expect(subtitle).toBe('Serving Everyday Heroes with Everyday Coffee');
    const paragraphs = await page.$$('p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  test('Blog1 page renders correctly', async ({ page }) => {
    const pageUrl = '/blog1';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const heading = await page.textContent('h1');
    expect(heading).toBe('Rise & Grind');
    const secondaryHeader = await page.textContent('h2');
    expect(secondaryHeader).toBe('Executive');
    const image = await page.$('img[alt="Happy lady with coffee looking to side"]');
    expect(image).toBeTruthy();
    const nextButton = await page.$('a[href="/blog2"]');
    expect(nextButton).toBeTruthy();
  });

  test('Blog2 page renders correctly', async ({ page }) => {
    const pageUrl = '/blog2';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const mainImage = await page.$('img[alt="Description"]');
    expect(mainImage).toBeTruthy();
    const nextButton = await page.$('a[href="/blog3"]');
    expect(nextButton).toBeTruthy();
  });

  test('Blog3 page renders correctly', async ({ page }) => {
    const pageUrl = '/blog3';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const steveImage = await page.$('img[alt="Steve"]');
    expect(steveImage).toBeTruthy();
    const nextButton = await page.$('a[href="/blog1"]');
    expect(nextButton).toBeTruthy();
  });

  test('Privacy Policy page content', async ({ page }) => {
    const pageUrl = '/privacypolicy';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const navbarTitle = await page.$('h1');
    expect(await navbarTitle.innerText()).toBe('Rise & Grind');
  });

});
