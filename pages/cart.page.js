const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemPrice () { return $('.content >.meta') }
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('cart');
    }
}

module.exports = new CartPage();