import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test('check drag and drop', async({page})=> {
    await page.goto(process.env.HEROKUAPP_URL + '/drag_and_drop');
    await page.dragAndDrop('#column-a', '#column-b');
    const text = await page.locator("#column-a header").textContent();

    expect(text?.trim()).toBe('B');
});