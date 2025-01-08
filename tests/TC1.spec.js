const {test, expect} = require('@playwright/test');
import PO1 from '../PageObjects/PO1';

test('Verify URL', async({page}) => {
    const po1 = new PO1(page);
    await po1.open();
    await po1.login();
    await po1.clickOnDam();
    await po1.clickOnAssets();
    await po1.clickOnUpload();
    await po1.uploadFile();
    await page.waitForTimeout(10000);
    // await po1.verifyImage();

})
