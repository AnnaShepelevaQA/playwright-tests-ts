import { test, expect } from '@playwright/test';

test.only('check evaluate actions', async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    const title = await page.evaluate(()=> document.title);

    expect (title).toBe("The Internet");
});