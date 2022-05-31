const checkoutData = require('../data/checkout.data')
const Page = require('./page')

class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemPrice () { return $('.content >.meta') }
    get removeItemButton () { return $('button.ui.basic.icon.button') }
    get checkoutButton () { return $('.ui.black.right.floated.button') }

    // Checkout Popup Modal
    get checkoutIframe () { return $('iframe.stripe_checkout_app') }
    get emailInputField () { return $('#email') }
    get nameInputField () { return $('#billing-name') }
    get addressInputField () { return $('#billing-street') }
    get billingCountrySelector () { return $('#billing-country') }
    get paymentInfoButton () { return $('.iconContinue') }
    get cityInputField () { return $('#billing-city') }
    get closeButton () { return $('.close') }
    
    get cardNumberInputField () { return $('#card_number') }
    get expiryDataInputField () { return $('#cc-exp') }
    get cvcInputField () { return $('#cc-csc') }
    get submitPaymentButton () { return $('#submitButton') }
    get submitPaymentButtonContainer () { return $('.button.submit.success') }

    async clickRemoveItemButton () {
        await this.removeItemButton.waitForDisplayed()
        await this.removeItemButton.click()
    }

    async clickCheckoutButton () {
        await this.checkoutButton.waitForDisplayed()
        await this.checkoutButton.click()
    }
    
    async setDemographicFormData () {
        await this.checkoutIframe.waitForDisplayed()
        await browser.switchToFrame(this.checkoutIframe)

        await this.emailInputField.waitForDisplayed()
        await this.emailInputField.setValue(checkoutData.email)

        await this.nameInputField.waitForDisplayed()
        await this.nameInputField.setValue(checkoutData.name)

        await this.addressInputField.waitForDisplayed()
        await this.addressInputField.setValue(checkoutData.address)

        await this.cityInputField.waitForDisplayed()
        await this.cityInputField.setValue(checkoutData.city)

        await this.billingCountrySelector.waitForDisplayed()
        await this.billingCountrySelector.selectByVisibleText('Jamaica')
    }
    
    async clickPaymentInfoButton () {
        await this.paymentInfoButton.waitForDisplayed()
        await this.paymentInfoButton.click()
    }

    async setCreditCardData () {
        await this.cardNumberInputField.waitForDisplayed()
        await this.cardNumberInputField.setValue(checkoutData.cardNumber)
        
        await this.expiryDataInputField.waitForDisplayed()
        await this.expiryDataInputField.setValue(checkoutData.expiryDate)
        
        await this.cvcInputField.waitForDisplayed()
        await this.cvcInputField.setValue(checkoutData.cvc)
    }

    async clickSubmitPaymentButton () {
        await this.submitPaymentButton.waitForDisplayed()
        await this.submitPaymentButton.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('cart');
    }
}

module.exports = new CartPage();
