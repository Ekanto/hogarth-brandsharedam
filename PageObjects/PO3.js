const { test, expect } = require("@playwright/test");
import Locators from "../Locators/Locators";

class PO3 {
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
    await this.page
      .locator(this.pageObject.damBtnId)
      .click();
  }
  async clickOnAssets() {
    await this.page.locator(this.pageObject.assetsBtnId).click();
  }

  async selectElement() {
    await this.page
      .getByRole("row", { name: "sample.png" })
      .locator("span")
      .click();
    await this.page.getByLabel("Share").click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('div').filter({ hasText: /^Please Select$/ }).nth(2).click();
    await this.page.locator('div').filter({ hasText: /^Please Select$/ }).nth(2).type('sing-past@ahvoe1nr.mailosaur.net')
    await this.page.waitForTimeout(2000);
    await this.page.getByText('Create "sing-past@ahvoe1nr.mailosaur.net"', { exact: true }).click();
    await this.page.locator('button:has-text("Send")').click();
  }
}
export default PO3;
