module.exports = {
    validEmailAndValidPassword: {
        email: 'desk@desk.com', 
        password: 'desk1'
    },

    validEmailAndInvalidPassword: {
        email: 'desk@desk.com', 
        password: '1desk'
    },  

    validEmailAndNoPassword: {
        email: 'desk@desk.com', 
        password: ''
    },

    invalidEmailAndValidPassword: {
        email: 'deskter@desk.com', 
        password: 'desk1'
    },

    noEmailAndNoPassword: {
        email: '', 
        password: ''
    },

    errorMessages: {
        validEmailAndInvalidPassword: 'Please check your login details and try again.',
        passwordValidationError: 'Password is required',
        emailValidationError: 'Email address is required',
        invalidEmailValidPassword: 'Please check your login details and try again.'
    }
}