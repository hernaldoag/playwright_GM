import { test, expect } from '@playwright/test';

test('test lets kode', async ({ page }) => {
  await page.goto('https://courses.letskodeit.com/practice');
  await page.getByRole('group', { name: 'Radio Button Example' }).getByText('BMW').click();
  await page.locator('#bmwradio').check();
  await page.locator('#carselect').selectOption('honda');
  await page.locator('#multiple-select-example').selectOption('peach');
  await page.locator('#benzcheck').check();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByPlaceholder('Hide/Show Example').click();
  await page.getByPlaceholder('Hide/Show Example').fill('test');
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('button', { name: 'Disable' }).click();
  await page.getByRole('button', { name: 'Enable' }).click();
  await page.getByPlaceholder('Enabled/Disabled Field').click();
  await page.getByPlaceholder('Enabled/Disabled Field').fill('asss');
  await page.getByRole('button', { name: 'Disable' }).click();
});