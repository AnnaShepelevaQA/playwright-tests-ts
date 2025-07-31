import { test, expect } from '@playwright/test';

test.describe('check keyboard actions', async()=> {
    test('should be "CONTROL" after click', async({page})=> {
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        await page.keyboard.press("Control")
        const result = page.locator('#result');

        await expect(result).toHaveText("You entered: CONTROL");
    });

    test('should be "N" after actions', async({page})=> {
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        const [name] = await Promise.all ([
            await page.keyboard.press("a"),
            await page.keyboard.press("n"),
            await page.keyboard.press("n")
        ])
        
        await expect(page.locator('#result')).toHaveText("You entered: N");
    });
});