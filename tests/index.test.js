const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('loads homepage and checks elements', async ({ page }) => {
  await page.goto(BASE_URL);

  // Check for the presence of the main heading
  const heading = await page.textContent('h1');
  expect(heading).toBe('Rise & Grind');

  // Check for the presence of the logo image
  const logo = await page.$('img[alt="Rise & Grind Logo"]');
  expect(logo).toBeTruthy();

  // Check for the presence of the "Daily Delight" text
  const dailyDelight = await page.textContent('h2');
  expect(dailyDelight).toBe('Daily Delight');

  // Check for the presence of the "Real Coffee, Real People" text
  const realCoffeeText = await page.textContent('h1 > span');
  expect(realCoffeeText).toBe('Coffee');
  const realPeopleText = await page.textContent('h1 > span:last-child');
  expect(realPeopleText).toBe('People');

  // Check for the presence of the newsletter form
  const newsletterForm = await page.isVisible('form[name="mc-embedded-subscribe-form"]');
  expect(newsletterForm).toBeTruthy();
});
