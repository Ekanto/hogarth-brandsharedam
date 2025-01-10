const {test, expect} = require('@playwright/test');
import PO2 from '../PageObjects/PO2';

test('Verify Updated title value showing up', async({page}) => {
    const po2 = new PO2(page);
    await po2.open();
    await po2.login();
    await po2.clickOnDam();
    await po2.clickOnAssets();
    await po2.openFile();
    await po2.editAndSave();
    await po2.verifyUpdate();
})