const Page = require('./page')

class ItemPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addToCartButton () { return $('.ui.orange.button') }
    get itemPrice () { return $('.description > p') }
    
    async addItemToCart (cartNumber) {
        await this.addToCartButton.waitForDisplayed()
        await this.addToCartButton.click()
        await this.addToCartButton.waitUntil(
            async () => {
                return (await this.cartButton.getText() === `Cart (${cartNumber})`)
            },
            { timeout: 3000 }
        )
    }
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('')
    }
}

module.exports = new ItemPage()
