const Page = require('./page')

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstItemLink () { return $('a[href*="product/e1f683cd-2e31-4791-ade4-dab13f67b043"]') }
    get secondItemLink () { return $('a[href*="product/f2944a96-07e1-44b2-9a02-7bd564085570"]') }

    /**
     * Select item
     */
    async selectItem (index) {
        if (index === 1) {
            await this.firstItemLink.waitForDisplayed()
            await this.firstItemLink.click()
        } else {
            await this.secondItemLink.waitForDisplayed()
            await this.secondItemLink.click()
        }

        await browser.pause(2000)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('')
    }
}

module.exports = new HomePage()