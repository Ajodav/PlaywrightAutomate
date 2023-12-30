const {test, expect} = require('@playwright/test')

test('MultipleLocators', async({page})=>{
    
    await page.goto('https://www.demoblaze.com/')
    const pageTitle = page.title;
    console.log(pageTitle);
    await expect(page).toHaveTitle('STORE');

    const Links = await page.$$('a');
    for (const link of Links)
    {
        const linktext = await link.textContent();
        console.log(linktext);

    }





});