//const {test, expect} = require ('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locator', async ({page})=>{

    await page.goto("https://www.demoblaze.com/")

    const pageTitle = page.title
    console.log(pageTitle);
    await expect(page).toHaveTitle('STORE');

    await page.click('id=login2')
    await page.fill('id=loginusername','pavanol')
    await page.fill('id=loginpassword','test@123')
    await page.click("//button[contains(text(),'Log in')]")

    const verifybtn = await page.locator("//a[@id='logout2']")
    await expect(verifybtn).toBeVisible();

    page.close()







});