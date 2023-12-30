import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//this is to check for modification update
    //await page.waitForURL('https://testautomationpractice.blogspot.com/');
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#name').fill('First name only');
  await page.locator('#email').click();
  await page.locator('#email').fill('ajodav23@gmail.co');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('27228835546');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('Female').check();
  await page.getByLabel('Female').check();
  await page.getByLabel('Sunday').check();
  await page.getByLabel('Saturday').check();
  await page.getByLabel('Monday').check();
  await page.getByLabel('Sunday').uncheck();
  await page.getByLabel('Country:').selectOption('japan');
  await page.getByLabel('Colors:').selectOption('white');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '21' }).click();
  await page.getByRole('row', { name: 'Product 1 $10.99' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Product 4 $7.99' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Product 1 $10.99' }).getByRole('checkbox').uncheck();
  /*await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('row', { name: 'Product 8 $15.99' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'Product 6 $9.99' }).getByRole('checkbox').check();*/
  /*await page.locator('#slider').click();
  await page.locator('#slider span').dblclick();
  await page.locator('#slider span').click();
  await page.locator('#slider span').click();
  await page.locator('#slider span').click();
  await page.locator('#draggable').click();
  await page.locator('#droppable').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });*/
  await page.getByRole('button', { name: 'Confirm Box' }).click();
  await page.locator('#field1').fill('Today');
  await page.getByRole('button', { name: 'Copy Text' }).click();
  await page.frameLocator('#frame-one796456169').getByText('Female').click();
  await page.frameLocator('#frame-one796456169').getByText('Male', { exact: true }).click();
  await page.frameLocator('#frame-one796456169').getByLabel('Name:').click();
  await page.frameLocator('#frame-one796456169').getByLabel('Name:').fill('name drop in frame');
  await page.frameLocator('#frame-one796456169').locator('span').filter({ hasText: '+' }).first().click();
  await page.frameLocator('#frame-one796456169').getByRole('link', { name: '5', exact: true }).click();
  await page.frameLocator('#frame-one796456169').getByLabel('Job:').selectOption('Radio-1');
  await page.frameLocator('#frame-one796456169').getByRole('button', { name: 'Submit' }).click();
  await page.locator('#resizable div').nth(2).click();
  await page.locator('#resizable div').nth(2).click();
});