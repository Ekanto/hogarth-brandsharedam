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
    await this.page
      .locator("button[type='submit']")
      .click();
  }
}

export default PO1;
