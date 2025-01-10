const {test, expect} = require('@playwright/test');
import PO3 from '../PageObjects/PO3';
import MailosaurClient from 'mailosaur';
const mailosaur = new MailosaurClient('Iz6sYQTrxC7j46WqekkSpRFfhOMDC1Q5')

test('Verify I recived the download link in email', async({page}) => {
    const po3 = new PO3(page);
    await po3.open();
    await po3.login();
    await po3.clickOnDam();
    await po3.clickOnAssets();
    await po3.selectElement();

    const testEmail = 'sing-past@ahvoe1nr.mailosaur.net'
    const serverId = 'ahvoe1nr'

    const email = await mailosaur.messages.get(serverId, {
        sentTo: testEmail
    });

    const emailBodyLink = email.html.links[0].href;
    expect(emailBodyLink, 'Verify I have the download link').toContain('https://qaautomation.brandsharedam.com')


    
})