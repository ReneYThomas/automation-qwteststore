const LoginPage = require("../pages/login.page")
const data = require('../data/login.data')
const MyAccountPage = require("../pages/myAccount.page")

describe("Login Page", function () {
    beforeEach(async () => {
        await LoginPage.open()
    })
    
    describe('Positive Login Tests', function () {
        it("Should enter email", async () => {
            await LoginPage.enterEmail(data.validEmailAndValidPassword.email)
            assert.equal(await LoginPage.emailInputField.getValue(), data.validEmailAndValidPassword.email)
        })

        it("Should enter password", async () => {
            await LoginPage.enterPassword(data.validEmailAndValidPassword.password)
            assert.equal(await LoginPage.passwordInputField.getValue(), data.validEmailAndValidPassword.password)
        })
       
        it("Should successfully log in user with correct email and password", async () => {
            await LoginPage.loginAndWait(data.validEmailAndValidPassword.email, data.validEmailAndValidPassword.password)
            await expect(await MyAccountPage.myAccountMenuItem.getText()).to.equal('My Account')
        })
    })
   
    describe('Negative Login Tests', function () {
        it("Should display correct error message when valid email and invalid password is submitted", async () => {
            await LoginPage.login(data.validEmailAndInvalidPassword.email, data.validEmailAndInvalidPassword.password)
            assert.equal(await LoginPage.errorMessage.getText(), data.errorMessages.validEmailAndInvalidPassword)
        })

        it("Should display correct error message when invalid email and valid password is submitted", async () => { 
            await LoginPage.login(data.invalidEmailAndValidPassword.email, data.invalidEmailAndValidPassword.password)
            assert.equal(await LoginPage.errorMessage.getText(), data.errorMessages.invalidEmailValidPassword)
        })

        it("Should display correct error message when valid email and no password is submitted", async () => {
            await LoginPage.login(data.validEmailAndNoPassword.email, data.validEmailAndNoPassword.password)
            assert.equal(await LoginPage.passwordValidationError.getText(), data.errorMessages.passwordValidationError)
        })

        it("Should get correct error message for no email and no password", async () => {
            await LoginPage.login(data.noEmailAndNoPassword.email, data.noEmailAndNoPassword.password)
            assert.equal(await LoginPage.emailValidationError.getText(), data.errorMessages.emailValidationError)
            assert.equal(await LoginPage.passwordValidationError2.getText(), data.errorMessages.passwordValidationError)
        })
    })
    
})