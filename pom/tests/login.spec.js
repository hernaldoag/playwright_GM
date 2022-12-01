import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

const { LoginPage } = require('../pages/login-page');

test('User must be logged in successfuly', async ({ page }) => {
  await page.goto(process.env.SAUCEDEMORUL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.SAUCEDEMOUSER, process.env.SAUCEDEMOPASS);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});