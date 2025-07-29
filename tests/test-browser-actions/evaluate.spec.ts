import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test('check evaluate actions', async({page})=> {
    await page.goto(process.env.HEROKUAPP_URL + '/broken_images');
    const title = await page.evaluate(()=> document.title);

    expect (title).toBe("The Internet");
});