import { test, expect } from '@playwright/test';

test.describe('Chek problem user', async()=> {

    test.only('should cart to be empty after login @problem', async({page})=> {
        const item = page.locator('.shopping_cart_badge');
        await expect(item).not.toBeVisible();
    });
    
});

