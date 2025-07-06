import { chromium } from '@playwright/test';

export default async ()=> {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'problem_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    console.log("test HOOK")
    await page.waitForURL('**/inventory.html');
    await page.context().storageState({path: "problem-user-state.json"});
    await browser.close();

};