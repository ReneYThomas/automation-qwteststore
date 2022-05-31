const Page = require('./page');

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