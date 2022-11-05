let email = document.getElementById("email-input")
let password = document.getElementById("password-input")

let email_error = document.getElementById("email-error")
let password_error = document.getElementById("password-error")

function emailValidation(email) {
    var checkAtSymbol = email.indexOf("@")
    if (checkAtSymbol < 1) {
        return false
    }

    var checkDot = email.indexOf(".")
    if (checkDot <= checkAtSymbol + 2) {
        return false
    }

    if (checkDot === email.length - 1) {
        return false
    }

    return true
}

function validateLogin() {
    let emailCheck = emailValidation(email.value)
    if (!emailCheck) {
        email_error.innerHTML = "Enter a valid email address"
    }
    else{
        email_error.innerHTML = ""
    }
    if(password.value.length < 8){
        password_error.innerHTML = "Password length must be 8 characters minimum"
    }
    else{
        password_error.innerHTML = ""
    }
}