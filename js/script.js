const form = document.querySelector("form");
const button = document.querySelector(".purchase-button");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const creditCard = document.querySelector("#cardnumber");
const creditCardError = document.querySelector("#cardNumberError");
const expireDate = document.querySelector("#expireDate");
const expireDateError = document.querySelector("#expireDateError");
const cvv = document.querySelector("#CVV");
const cvvError = document.querySelector("#cvvError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 2) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateCreditCard(creditCard.value) === true) {
    creditCardError.style.display = "none";
  } else {
    creditCardError.style.display = "block";
  }

  if (validateExpireDate(expireDate.value) === true) {
    expireDateError.style.display = "none";
  } else {
    expireDateError.style.display = "block";
  }

  if (validateCvv(cvv.value) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }

  if (validateDate(birthDate.value) === true) {
    birthDateError.style.display = "none";
  } else {
    birthDateError.style.display = "block";
  }

  if (checkLength(password.value, 8) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const emailRegEx = /\S+@\S+\.\S+/;
  const patternMatchesEmail = emailRegEx.test(email);
  return patternMatchesEmail;
}

function validatePassword(password) {
  const regExPassword = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  const patternMatchesPassword = regExPassword.test(password);
  return patternMatchesPassword;
}

function validateCreditCard(creditCard) {
  const creditCardRegEx = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  const patternMatchesCreditCard = creditCardRegEx.test(creditCard);
  return patternMatchesCreditCard;
}

function validateExpireDate(expireDate) {
  const expireDateRegEx = /^\d{2}\/\d{2}$/g;
  const patternMatchesExpireDate = expireDateRegEx.test(expireDate);
  return patternMatchesExpireDate;
}

function validateCvv(cvv) {
  const cvvRegEx = /^[0-9]{3,4}$/;
  const patternMatchesCvv = cvvRegEx.test(cvv);
  return patternMatchesCvv;
}

const success = document.querySelector(".success-section");
const signUpForm = document.querySelector("#signUpForm");

function submitForm(event) {
  event.preventDefault();
  if (
    checkLength(fullName.value, 2) === true &&
    validateEmail(email.value) === true &&
    validateCreditCard(creditCard.value) === true &&
    validateExpireDate(expireDate.value) === true &&
    validateCvv(cvv.value) === true
  ) {
    success.style.display = "block";
    signUpForm.style.display = "none";
  }
}

form.addEventListener("submit", submitForm);
