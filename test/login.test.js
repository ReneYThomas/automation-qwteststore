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
    })
   
    describe('Negative Login Tests', function () {
    })
    
})