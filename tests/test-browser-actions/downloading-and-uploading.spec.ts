import { test, expect } from '@playwright/test';

test('check download', async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/download');

    const [download] = await Promise.all ([
        page.waitForEvent("download"),
        page.click('a:has-text("test.txt")')
    ])

    const path = await download.path();
    console.log(path);
});

test('check upload', async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles("#file-upload", "tests/test-data/test.txt");
    await page.click("#file-submit");

    await expect(page.locator("#uploaded-files")).toHaveText("test.txt")
});