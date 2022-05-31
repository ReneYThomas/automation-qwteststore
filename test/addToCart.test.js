const CartPage = require('../pages/cart.page')
const loginData = require('../data/login.data')
const HomePage = require('../pages/home.page')
const ItemPage = require('../pages/item.page')
const LoginPage = require('../pages/login.page')
const MyAccountPage = require('../pages/myAccount.page')

describe('Add Item to Cart', function () {    
    describe('Unauthenticated User', function () {
        beforeEach(async () => {
            await HomePage.open()
        })
    
        afterEach(async () => {
            await browser.reloadSession()
        })

        it('Should add one item to cart', async () => {
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            assert.equal(await ItemPage.cartButton.getText(), 'Cart (1)')
        })

        it('Should add multiple items to cart', async () => {
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            await ItemPage.navigateToHomePage()
            await HomePage.selectItem(2)
            await ItemPage.addItemToCart(2)
            assert.equal(await ItemPage.cartButton.getText(), 'Cart (2)')
        })

        it('Should add same item to cart multiple times', async () => {
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            await ItemPage.navigateToHomePage()
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(2)
            assert.equal(await ItemPage.cartButton.getText(), 'Cart (2)')
        })
    })
   
    describe('Authenticated User', function () {
        beforeEach(async () => {
            await HomePage.open()
        })
    
        afterEach(async () => {
            await browser.reloadSession()
        })

        it('Should have same product price on product page and cart page', async () => {
            let itemPagePrice = ''
            let cartPagePrice = ''

            await HomePage.clickSignInButton()
            await LoginPage.login(loginData.validEmailAndInvalidPassword.email, loginData.validEmailAndInvalidPassword.password)
            await MyAccountPage.navigateToHomePage()
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)
            
            itemPagePrice = await ItemPage.itemPrice.getText()
            
            await ItemPage.cartButton.click()

            cartPagePrice = await CartPage.itemPrice.getText()
            cartPagePrice = cartPagePrice.slice(3)

            assert.equal(itemPagePrice, cartPagePrice)
        })

        it('Should show the same items in cart when user authentication status changes', async () => {
            let cartItemsCountBeforeLogout = ''
            let cartItemsCountAfterSignIn = ''

            await HomePage.clickSignInButton()
            await LoginPage.loginAndWait(loginData.validEmailAndValidPassword.email, loginData.validEmailAndValidPassword.password)
            await MyAccountPage.navigateToHomePage()
            await HomePage.selectItem(1)
            await ItemPage.addItemToCart(1)

            cartItemsCountBeforeLogout = await ItemPage.cartButton.getText()

            await ItemPage.clickSignOutButton()
            await ItemPage.clickSignInButton()
            await LoginPage.login(loginData.validEmailAndValidPassword.email, loginData.validEmailAndValidPassword.password)
            await MyAccountPage.clickCartButton()

            cartItemsCountAfterSignIn = await CartPage.cartButton.getText()      
            assert.equal(cartItemsCountBeforeLogout, cartItemsCountAfterSignIn)      
        })
    })
})