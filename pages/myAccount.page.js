const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get myAccountMenuItem () { return $('a.active') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('myaccount');
    }
}

module.exports = new MyAccountPage();