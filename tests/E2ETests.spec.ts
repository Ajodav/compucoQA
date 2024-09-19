import { test, expect } from '@playwright/test';
//const { E2E } = require('../../src/POM/');

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-test:1z2a6iTzNmKPvHga@online-qa-test.ccdemo.site/user');
    await page.getByLabel('Username *').fill('civicrm_user');
    await page.getByLabel('Password *').fill('civicrm_user');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(3000)
    // Validate Dashboard
    await expect(page.getByRole('heading', { name: 'CiviCRM Home' })).toBeVisible();
});


test('Add new individual', async ({ page }) => {

    await page.getByRole('link', { name: ' Contacts' }).click();
    await page.getByRole('link', { name: 'New Individual' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Testing');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Culture');
    await page.locator('[id="_qf_Contact_upload_view-top"]').click();
    await page.waitForTimeout(3000)
    // Verify user is in the right contact page
    await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
 
  
});


test('Find Contact', async ({ page }) => {

    await page.getByRole('link', { name: ' Search' }).click();
    await page.getByRole('link', { name: 'Find Contacts' }).click();
    await page.getByLabel('Name or Email').fill('Culture');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Culture, Testing' }).click();
    await page.waitForTimeout(3000)
      // Verify user is in the right contact page
    await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();


})


test('Add Relationship with null dates', async ({ page }) => {

    await page.getByRole('link', { name: ' Search' }).click();
    await page.getByRole('link', { name: 'Find Contacts' }).click();
    await page.getByLabel('Name or Email').fill('Culture');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Culture, Testing' }).click();
    await page.waitForTimeout(3000)
      // Verify user is in the right contact page
    await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
    await page.getByRole('link', { name: 'Relationships' }).click();
    await expect(page.getByRole('heading', { name: 'Current Relationships' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Inactive Relationships' })).toBeVisible();
    await page.getByRole('link', { name: 'Add Relationship' }).click();
    await page.getByRole('link', { name: '- select - ' }).click();
    await page.getByRole('option', { name: 'Employee of' }).click();
    await page.getByRole('textbox', { name: 'Contact(s) *' }).click();
    await page.getByRole('textbox', { name: 'Contact(s) *' }).fill('ms@ms.com');
    await page.locator('li').filter({ hasText: 'Microsoftms@ms.com' }).click();
    await page.getByRole('button', { name: ' Save Relationship' }).click();
    await page.waitForTimeout(3000)


})


test('Add Relationship with dates', async ({ page }) => {

  await page.getByRole('link', { name: ' Search' }).click();
  await page.getByRole('link', { name: 'Find Contacts' }).click();
  await page.getByLabel('Name or Email').fill('Culture');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Culture, Testing' }).click();
  await page.waitForTimeout(3000)
    // Verify user is in the right contact page
  await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
  await page.getByRole('link', { name: 'Relationships' }).click();
  await page.getByRole('link', { name: 'Add Relationship' }).click();
  await page.getByRole('link', { name: '- select - ' }).click();
  await page.getByRole('option', { name: 'Employee of' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).fill('ms@ms.com');
  await page.locator('li').filter({ hasText: 'Microsoftms@ms.com' }).click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByRole('link', { name: '17' }).click();
  await page.getByRole('textbox', { name: 'End Date' }).click();
  await page.getByRole('link', { name: '19' }).click();
  await page.getByRole('button', { name: ' Save Relationship' }).click();
  await page.waitForTimeout(3000)


})


test('Add Relationship with Enabled Off', async ({ page }) => {

  await page.getByRole('link', { name: ' Search' }).click();
  await page.getByRole('link', { name: 'Find Contacts' }).click();
  await page.getByLabel('Name or Email').fill('Culture');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Culture, Testing' }).click();
  await page.waitForTimeout(3000)
    // Verify user is in the right contact page
  await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
  await page.getByRole('link', { name: 'Relationships' }).click();
  await page.getByRole('link', { name: 'Add Relationship' }).click();
  await page.getByRole('link', { name: '- select - ' }).click();
  await page.getByRole('option', { name: 'Employee of' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).fill('ms@ms.com');
  await page.locator('li').filter({ hasText: 'Microsoftms@ms.com' }).click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByRole('link', { name: '17' }).click();
  await page.getByRole('textbox', { name: 'End Date' }).click();
  await page.getByRole('link', { name: '19' }).click();
  await page.getByLabel('Enabled?').uncheck();
  await page.getByRole('button', { name: ' Save Relationship' }).click();
  await page.waitForTimeout(3000)


})



test('Employer of Additional fields', async ({ page }) => {

  await page.getByRole('link', { name: ' Search' }).click();
  await page.getByRole('link', { name: 'Find Contacts' }).click();
  await page.getByLabel('Name or Email').fill('Culture');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Culture, Testing' }).click();
  await page.waitForTimeout(3000)
    // Verify user is in the right contact page
  await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
  await page.getByRole('link', { name: 'Relationships' }).click();
  await page.getByRole('link', { name: 'Add Relationship' }).click();
  await page.getByRole('link', { name: '- select - ' }).click();
  await page.getByRole('option', { name: 'Employee of' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).click();
  await page.getByRole('textbox', { name: 'Contact(s) *' }).fill('ms@ms.com');
  await page.locator('li').filter({ hasText: 'Microsoftms@ms.com' }).click();
  await page.getByLabel('Linkedin').fill('linkedURL');
  await page.getByLabel('Website').fill('https://website.com');
  await page.getByLabel('Attachment', { exact: true }).setInputFiles('tests/uploadFiles/4PQC_Eevz49k5Y9eO2iZ5 2.png');
  await page.getByRole('button', { name: ' Save Relationship' }).click();
  await page.waitForTimeout(3000)

})



test('Delete Contact', async ({ page }) =>{

    await page.getByRole('link', { name: ' Search' }).click();
    await page.getByRole('link', { name: 'Find Contacts' }).click();
    await page.getByLabel('Name or Email').fill('Culture');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Culture, Testing' }).click();
    await page.waitForTimeout(3000)
    // Verify user is in the right contact page
    await expect(page.locator('#crm-contactname-content').getByText('Testing Culture')).toBeVisible();
    await page.getByRole('link', { name: 'Delete Contact' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Delete Contact(s)' }).click();
    await page.waitForTimeout(2000)
    await expect(page.getByText('Testing Culture has been moved to the trash.')).toBeVisible()


});