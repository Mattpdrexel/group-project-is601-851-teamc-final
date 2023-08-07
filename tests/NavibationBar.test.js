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
    expect(aboutUsHeading).toBe('About Rise & Grind');
    const subtitle = await page.textContent('h2');
    expect(subtitle).toBe('Serving Everyday Heroes with Everyday Coffee');
    const paragraphs = await page.$$('p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  test('Blog1 page renders correctly', async ({ page }) => {
    const pageUrl = '/blog1';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const heading = await page.textContent('h1');
    expect(heading).toBe('Patty');
    const secondaryHeader = await page.textContent('h2');
    expect(secondaryHeader).toBe('Executive');
    const secondaryText = await page.textContent('.secondaryText');
    expect(secondaryText).toContain(
      'As a busy professional, I cherish my midday coffee breaks at Rise & Grind. The no-frills, high-quality coffee experience provides the tranquility I need in the midst of my fast-paced corporate life.'
    );
    const image = await page.$('img[alt="Happy lady with coffee looking to side"]');
    expect(image).toBeTruthy();
    const nextButton = await page.$('a[href="/blog2"]');
    expect(nextButton).toBeTruthy();
  });

  test('Blog2 page renders correctly', async ({ page }) => {
    const pageUrl = '/blog2';
    await page.goto(`${BASE_URL}${pageUrl}`);
    const largeText = await page.textContent('.largeText');
    expect(largeText).toContain(
      '28-year-old Fiona chose Rise & Grind as her favorite gathering spot. Our casual atmosphere, consistent high-quality coffee, and no-fuss approach make it the perfect spot for her to connect with friends. In Rise & Grind, Fiona found a genuine, comfortable space to unwind and enjoy simple pleasures.'
    );
    const name = await page.textContent('.name');
    expect(name).toBe('Fiona');
    const mediumText = await page.textContent('.mediumText');
    expect(mediumText).toBe('Loiterer');
    const mainImage = await page.$('img[src="/images/Art/Unsplash/ana-itonishvili-Fyl8sMC2j2Q-unsplash.jpg"]');
    expect(mainImage).toBeTruthy();
    const leftQuote = await page.$('img[src="/images/Art/Quotes.png"]');
    expect(leftQuote).toBeTruthy();
    const rightQuote = await page.$('img[src="/images/Art/Quotes.png"]');
    expect(rightQuote).toBeTruthy();
    const nextButton = await page.$('a[href="/blog3"]');
    expect(nextButton).toBeTruthy();
  });

});
