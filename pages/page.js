/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    get homeButton () { return $('.header.item') }
    get cartButton () { return $('a[href*="/cart/"]') }
    get signInButton () { return $('a[href*="/login/"]') }
    get signOutButton () { return $('//a[text()="Sign out"]') }

    async navigateToHomePage () {
        await this.homeButton.waitForDisplayed() 
        await this.homeButton.click() 
    }

    async clickSignInButton () {
        await this.signInButton.waitForDisplayed()
        await this.signInButton.click()
    }

    async clickSignOutButton () {
        await this.signOutButton.waitForDisplayed() 
        await this.signOutButton.click() 
    }

    async clickCartButton () {
        await this.cartButton.waitForDisplayed() 
        await this.cartButton.click() 
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`${browser.options.baseUrl}/${path}`)
    }
}