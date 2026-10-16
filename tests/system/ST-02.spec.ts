import { test, expect } from '@playwright/test';

test('ST-02: validate product sorting functionality', {
  annotation: {
    type: 'description',
    description: 'ทดสอบการเรียงลำดับสินค้าทั้ง 4 รูปแบบในหน้า Inventory'
  }
}, async ({ page }) => {
  await test.step('Login เข้าสู่ระบบ', async () => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/inventory\.html/);
  });

  const sortSelect = page.locator('[data-test="product-sort-container"]');

  await test.step('เรียงลำดับ Z to A', async () => {
    await sortSelect.selectOption('za');
    const firstItem = page.locator('.inventory_item_name').first();
    await expect(firstItem).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });

  await test.step('เรียงลำดับ Price low to high', async () => {
    await sortSelect.selectOption('lohi');
    const firstPrice = page.locator('.inventory_item_price').first();
    await expect(firstPrice).toHaveText('$7.99');
  });

  await test.step('เรียงลำดับ Price high to low', async () => {
    await sortSelect.selectOption('hilo');
    const firstPrice = page.locator('.inventory_item_price').first();
    await expect(firstPrice).toHaveText('$49.99');
  });

  await test.step('เรียงลำดับ A to Z (ค่าเริ่มต้น)', async () => {
    await sortSelect.selectOption('az');
    const firstItem = page.locator('.inventory_item_name').first();
    await expect(firstItem).toHaveText('Sauce Labs Backpack');
  });
});