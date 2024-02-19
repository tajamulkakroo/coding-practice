import {test, expect} from '@playwright/test';
require('dotenv').config();



test('Open the Amazon website', async ({page}) => {

    await page.goto('https://www.amazon.com');
    await expect(page).toHaveURL('https://www.amazon.com');
    await page.getByRole('link', { name: 'Start here.' }).click();
    await page.locator('#ap_customer_name').fill(process.env.AMAZON_NAME);
    await page.locator('#ap_email').fill(process.env.AMAZON_EMAIL);
    await page.locator('#ap_password').fill (process.env.AMAZON_PASSWORD);
    await page.locator('#ap_password_check').fill(process.env.AMAZON_PASSWORD);
    await page.locator('#continue').click();
    await expect(page).toHaveTitle('Verify email address');
});