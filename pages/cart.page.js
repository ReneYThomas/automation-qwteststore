const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemPrice () { return $('.content >.meta') }
    get removeItemButton () { return $('button.ui.basic.icon.button') }
    get removeItemButtons () { return $$('button.ui.basic.icon.button') }

    async clickRemoveItemButton () {
        await this.removeItemButton.waitForDisplayed()
        await this.removeItemButton.click()
    }
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('cart');
    }
}

module.exports = new CartPage();