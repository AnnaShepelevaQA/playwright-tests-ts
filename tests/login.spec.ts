import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test.describe('Login page', async()=> {
    let error ='[data-test="error"]';

    test.beforeEach(async ({page}) => {
		await page.goto('');
	});
	
    test('should login with valid login and password', async({page})=> {
        await page.fill('#user-name', process.env.USER_NAME || '');
        await page.fill('#password', process.env.PASSWORD || '');
        await page.click('#login-button');

        await expect(page).toHaveURL(/inventory\.html/)
    });

    test('should login with invalid login and valid password', async({page})=> {
        await page.fill('#user-name', 'test111');
        await page.fill('#password', process.env.PASSWORD || '');
        await page.click('#login-button');

        await expect(page.locator(error)).toBeVisible();
        await expect(page.locator(error)).toContainText('Username and password do not match any user in this service');
    });

    test('should login with valid login and invalid password', async({page})=> {
        await page.fill('#user-name', process.env.USER_NAME || '');
        await page.fill('#password', 'qwerty');
        await page.click('#login-button');

        await expect(page.locator(error)).toBeVisible();
        await expect(page.locator(error)).toContainText('Username and password do not match any user in this service');
    });

    test('should login with locked user and valid password', async({page})=> {
        await page.fill('#user-name', process.env.LOCKED_USER_NAME || '');
        await page.fill('#password', process.env.PASSWORD || '');
        await page.click('#login-button');

        await expect(page.locator(error)).toBeVisible();
        await expect(page.locator(error)).toContainText('Sorry, this user has been locked out.');
    });

    test('should logo be visible', async({page})=> {
        await expect(page.locator('.login_logo')).toBeVisible();
    });
});