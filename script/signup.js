let firstname = document.getElementById("firstname-input")
let lastname = document.getElementById("lastname-input")
let email = document.getElementById("email-input")
let address = document.getElementById("address-input")
let password = document.getElementById("password-input")
let confirmpassword = document.getElementById("confirmpassword-input")
let gender_male = document.getElementById("male")
let gender_female = document.getElementById("female")
let gender_xyz = document.getElementById("xyz")
let checkbox = document.getElementById("checkbox")

let firstname_error = document.getElementById("firstname-error")
let lastname_error = document.getElementById("lastname-error")
let email_error = document.getElementById("email-error")
let address_error = document.getElementById("address-error")
let password_error = document.getElementById("password-error")
let confirmpassword_error = document.getElementById("confirmpassword-error")
let gender_error = document.getElementById("gender-error")
let checkbox_error = document.getElementById("checkbox-error")

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

function validateSignUp() {
    if (firstname.value.length == 0) {
        firstname_error.innerHTML = "First name must be filled"
    }
    else{
        firstname_error.innerHTML = "";
    }
    if (lastname.value.length == 0) {
        lastname_error.innerHTML = "Last name must be filled"
    }
    else{
        lastname_error.innerHTML = ""
    }
    let emailCheck = emailValidation(email.value)
    if (!emailCheck) {
        email_error.innerHTML = "Enter a valid email address"
    }
    else{
        email_error.innerHTML = ""
    }
    if (address.value.length < 10) {
        address_error.innerHTML = "Address field must be 10 characters minimum"
    }
    else{
        address_error.innerHTML = "";
    }
    let password_checker = true
    if(password.value.length < 8){
        password_error.innerHTML = "Password length must be 8 characters minimum"
        password_checker = false
    }
    else{
        password_error.innerHTML = ""
        password_checker = true
    }
    if (password.value != confirmpassword.value || password_checker == false) {
        confirmpassword_error.innerHTML = "Password are not the same"
    }
    else{
        confirmpassword_error.innerHTML = ""
    }
    if ((!gender_male.checked) && (!gender_female.checked) && (!gender_xyz.checked)) {
        gender_error.innerHTML = "Choose a gender"
    }
    else{
        gender_error.innerHTML = ""
    }
    if (!checkbox.checked){
        checkbox_error.innerHTML = "You have to check the checkbox"
    }
    else{
        checkbox_error.innerHTML = ""
    }
}