const {test, expect} = require('@playwright/test')

test('OtherLocators', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();






});