const form = document.querySelector("form");
const button = document.querySelector(".purchase-button");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const birthDate = document.querySelector("#birthdate");
const password = document.querySelector("#password");
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

function validateDate(birthDate) {
  const regExDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  const patternMatchesDate = regExDate.test(birthDate);
  return patternMatchesDate;
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
