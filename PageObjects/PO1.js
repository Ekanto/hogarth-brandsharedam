const { test, expect } = require("@playwright/test");
import Locators from "../Locators/Locators";

class PO1 {
  constructor(page) {
    this.pageObject = new Locators(page);
    this.page = page;
  }

  async open() {
    await this.page.goto(this.pageObject.URL);
  }
  async login() {
    await this.page.fill("[name='userName']", this.pageObject.userMail);
    await this.page.locator("button:has-text('Next')").click();
    await this.page.fill("[name='password']", this.pageObject.password);
    await this.page.locator("button[type='submit']").click();
  }
  async clickOnDam() {
    await this.page.locator(`#${this.pageObject.damBtnId}`, {timeout: 5000}).click();
  }
  async clickOnAssets() {
    await this.page.locator(`#${this.pageObject.assetsBtnId}`).click();
  }
  async clickOnUpload() {
    await this.page.getByLabel('New Item').click();
  }
  async uploadFile(){
    await this.page.locator('input[type="file"]').setInputFiles('Resources/sample.png');
    await this.page.getByRole(this.pageObject.titleField).fill('QA Automation Engineer');
    await this.page.locator(this.pageObject.dropDown).click();
    await this.page.getByText('Image', { exact: true}).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('button:has-text("Save")').click();
  }

  async verifyImage(){
    //await expect(await this.page.locator('img[alt="QA Automation Engineer"]').isVisible()).toBeTruthy();
    await expect(await this.page.getByText('sample.png')).toBeVisible(); 
  }


}

export default PO1;
