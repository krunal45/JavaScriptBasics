// Problem Statement:
// Write a function named isValidPassword that checks the validity of a given password based on
// the following criteria:
// The password must be at least 8 characters long.
// The password must contain at least one uppercase letter.
// The password must contain at least one digit.
// The function should return true if all criteria are met; otherwise, it should return false.

function isValidPassword(password){
const minLength = 8;
const hasUpperCase = /[A-Z]/.test(password);
const hasDigit = /\d/.test(password);

 return password.length >= minLength && hasUpperCase  && hasDigit
}

let password = "Password1"
console.log('Is password Valid > '+isValidPassword(password))