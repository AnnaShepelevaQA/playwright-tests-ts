import { test, expect } from '@playwright/test';

test('check mouse actions', async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figure3 = page.locator('.figure').nth(2);
    const box = await figure3.boundingBox();

    if(box) {
        await page.mouse.move(box.x + box.width/2, box.y + box.height/2);
        await page.waitForTimeout(1000);
        const link = figure3.locator('h5:has-text("name: user3")');
        await expect(link).toBeVisible()
    }    
});