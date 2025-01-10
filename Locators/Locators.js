class Locators {
  constructor(page) {
    this.page = page;
    this.URL = "https://qaautomation.brandsharedam.com/";
    this.userMail = "sash.dqa@gmail.com"
    this.password = "Omar1234"
    this.damBtnId = "[title='DAM']"
    this.assetsBtnId = 'button:has-text("Assets")'
    this.uploadBtnId = "New Item"
    this.uploadFieldText = "Drag and drop files here,or"
    this.titleField = "textbox"
    this.dropDown = ".css-1lsxwht > ._s_add-user-group > .css-b62m3t-container > .mb-tag-field__control > .mb-tag-field__value-container > .mb-tag-field__input-container"
    this.updatePopUp = "#chakra-toast-manager-bottom-right"
    this.emailShareField = "#react-select-27-placeholder"


    /*  */
  }
}
export default Locators;
