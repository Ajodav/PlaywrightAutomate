const { test, expect } = require('@playwright/test');

test('Login Succesfully', async ({page})=>{
    test.setTimeout(120000);

    await page.goto("https://www.ebay.com");

   const pageURL = page.url();
console.log ('Page Url is:',pageURL);

await expect(page).toHaveURL("https://www.ebay.com");

page.close();
} 
);

