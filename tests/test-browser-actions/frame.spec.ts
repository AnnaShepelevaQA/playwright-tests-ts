import { test, expect } from '@playwright/test';

test('check text on page', async({page})=> {
    await page.goto('https://books-pwakit.appspot.com/');
    const shadowHost = page.locator('.main-content');
    const text = shadowHost.locator('.books-desc');

    await expect(text).toHaveText("Search the world's most comprehensive index of full-text books.")
});