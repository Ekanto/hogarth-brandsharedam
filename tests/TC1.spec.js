const {test, expect} = require('@playwright/test');
import PO1 from '../PageObjects/PO1';

test('Verify URL', async({page}) => {
    const po1 = new PO1(page);
    await po1.open();
    await po1.login();

})
