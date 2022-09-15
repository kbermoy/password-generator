// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];

//Create the Window Prompts
const hasLowerCase = confirm (
  "Click OK to confirm including LOWER CASE CHARACTERS."
);
const hasNumericChar = confirm(
  "Click OK to confirm including NUMERIC CHARACTERS."
)
const hasSpecialChar = confirm (
  "Click OK to confirm including SPECIAL CHARACTERS."
);
const hasUpperCase = confirm(
  "Click OK to confirm including UPPER CASE CHARACTERS."
);
const passwordLength = window.prompt(
  "Enter a number betwee 8-128 for your password length."
);

//Put Promps into one object
const promptsConfirm = [
  {hasLowerCase},
  {hasNumericChar},
  {hasSpecialChar},
  {hasUpperCase},
  {passwordLength}

  //password.innerText = generatePassword
];
console.log(promptsConfirm),

/* DOM Elements
const passwordEl = document.getElementById('password');
const lengthtEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialsEl = document.getElementById('specials');
const generateEl = document.getElementById('generate');
*/

/* const randomFun = {
  lower: getRandomLower(), //(this it a key called lower)
  upper: getRandomUpper(),  //(this is a key called upper)
  number: getRandomNumber(),
  special: getRandomSpecial()
};
*/

generateEl.addEventListener('click', () => {
  const length = lengthtEl.value;

  console.log(length);
})

// Create functions to get the random characters
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}

function getRandomNumber () {
  const numbers = "1234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSpecial() {
  const specials = "!@#$%^&*(){}[]=<>/,.";
  return specials[Math.floor(Math.random() * specials.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
