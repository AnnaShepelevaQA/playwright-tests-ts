import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test('check text on page', async({page})=> {
    await page.goto(process.env.BOOKS_URL || '');
    const shadowHost = page.locator('.main-content');
    const text = shadowHost.locator('.books-desc');

    await expect(text).toHaveText("Search the world's most comprehensive index of full-text books.")
});