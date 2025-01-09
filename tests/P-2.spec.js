const {test, expect} = require('@playwright/test');
import PO2 from '../PageObjects/PO2';

test('Part-2', async({page}) => {
    const po2 = new PO2(page);
    await po2.open();
    await po2.login();
    await po2.clickOnDam();
    await po2.clickOnAssets();
    await po2.openFile();
    await po2.editAndSave();
})