const MyAccountPage = require('./myAccount.page')
const Page = require('./page')

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get emailInputField () { return $('#email') }
    get passwordInputField () { return $('#password') }
    get submitButton () { return $('button[type="submit"]') }
    get errorMessage() { return $(`div.ui div.error > div.content > p`) }
    get passwordValidationError() { return $('div.ui > p') }
    get passwordValidationError2() { return $('//div[@class="ui segment"]/p[2]') }
    get emailValidationError() { return $('*[data-testid="error"]') }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email and password
     */
    async login (email, password) {
        await (await this.emailInputField).setValue(email)
        await (await this.passwordInputField).setValue(password)
        await (await this.submitButton).click()
    }

    async loginAndWait (email, password) {
        await this.login(email, password)
        await browser.pause(5000)
        await MyAccountPage.myAccountMenuItem.waitForDisplayed({ timeout: 5000 })
    }

    /**
     * Enter the email into the field
     * @param {String} text email to be entered
     */
     async enterEmail (text) {
        await this.emailInputField.waitForDisplayed()
        await this.emailInputField.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
     async enterPassword(text) {
        await this.passwordInputField.waitForDisplayed()
        await this.passwordInputField.setValue(text)
    }

    /**
     * Click login button
     */
     async clickLoginButton() {
        await this.submitButton.waitForDisplayed()
        await this.submitButton.click()
    }

    /**
     * Get the text from the error message
     */
     async getErrorMessageText () {
        await this.errorMessage.waitForDisplayed()
        return this.errorMessage.getText()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login')
    }
}

module.exports = new LoginPage()
