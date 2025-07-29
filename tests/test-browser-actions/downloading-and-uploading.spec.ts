import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

test('check download', async({page})=> {
    await page.goto(process.env.HEROKUAPP_URL + '/download');

    const [download] = await Promise.all ([
        page.waitForEvent("download"),
        page.click('a:has-text("test.txt")')
    ])

    const path = await download.path();
});

test('check upload', async({page})=> {
    await page.goto(process.env.HEROKUAPP_URL + '/upload');
    await page.setInputFiles("#file-upload", "tests/test-data/test.txt");
    await page.click("#file-submit");

    await expect(page.locator("#uploaded-files")).toHaveText("test.txt")
});