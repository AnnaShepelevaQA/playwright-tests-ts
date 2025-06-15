import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test.describe('Check products page', async()=> {

    test.beforeEach(async ({page}) => {
		await page.goto('');
        await page.fill('#user-name', process.env.USER_NAME || '');
        await page.fill('#password', process.env.PASSWORD || '');
        await page.click('#login-button');
	});

    test.afterEach('logout',async({page}) => {
        await page.click('.bm-burger-button');
        await page.click('#logout_sidebar_link');
    });

    test('check 1st product', async({page})=> {
        const firstProduct = page.locator('.inventory_item:first-child')

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(firstProduct).toBeVisible();
    });

    test('check 1st product button', async({page})=> {
        const firstProductBtn = page.locator('.inventory_item:first-child .btn_primary')

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(firstProductBtn).toContainText('ADD TO CART');
    });

    test('check 1st product button after click', async({page})=> {
        await page.click('.inventory_item:first-child .btn_primary');
        const firstProductBtn = page.locator('.inventory_item:first-child .btn_secondary')

        await expect(page).toHaveURL(/inventory\.html/);
        await expect(firstProductBtn).toContainText('REMOVE');
    });
});



