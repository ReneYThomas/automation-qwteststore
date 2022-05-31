const loginData = require('../data/login.data')
const CartPage = require('../pages/cart.page')
const HomePage = require('../pages/home.page')
const ItemPage = require('../pages/item.page')
const LoginPage = require('../pages/login.page')
const MyAccountPage = require('../pages/myAccount.page')

describe('Checkout', function () {    
    describe('Unauthenticated User', function () {
        beforeEach(async () => {
            await HomePage.open()
        })
    
        afterEach(async () => {
            await browser.reloadSession()
        })

        it('Should checkout successfully', async () => {
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            await ItemPage.clickCartButton()
            await CartPage.clickCheckoutButton()
            await CartPage.setDemographicFormData()
            await CartPage.clickPaymentInfoButton()
            await CartPage.setCreditCardData()
            await CartPage.clickSubmitPaymentButton()

            await expect(await CartPage.submitPaymentButtonContainer).to.not.be.undefined
        })
    })
   
    describe('Authenticated User', function () {
        beforeEach(async () => {
            await LoginPage.open()
        })
    
        afterEach(async () => {
            await browser.reloadSession()
        })

        
        it('Should checkout successfully', async () => {
            await LoginPage.loginAndWait(loginData.validEmailAndValidPassword.email, loginData.validEmailAndValidPassword.password)
            await MyAccountPage.navigateToHomePage()
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            await ItemPage.clickCartButton()
            await CartPage.clickCheckoutButton()
            await CartPage.setDemographicFormData()
            await CartPage.clickPaymentInfoButton()
            await CartPage.setCreditCardData()
            await CartPage.clickSubmitPaymentButton()

            await expect(await CartPage.submitPaymentButtonContainer).to.not.be.undefined
        })
    })
})
