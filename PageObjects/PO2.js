const {test, expect} = require('@playwright/test');
import Locators from '../Locators/Locators';

class PO2{
    constructor(page){
        this.pageObject = new Locators(page);
        this.page = page;
    }

    async open(){
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
    async openFile(){
        await this.page.getByText('sample.png').click();
    }
    async editAndSave(){
        await this.page.getByLabel('edit', { exact: true }).click();
        await this.page.getByRole(this.pageObject.titleField).first().fill('QA Automation Engineer');
        await this.page.getByLabel('Save').nth(1).click();
        await this.page.getByRole('button', { name: 'close' }).nth(2).click();
    }


}

export default PO2;