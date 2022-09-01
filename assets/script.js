// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerCase = prompt("Include lower case alphabets? Enter y/n");
  var upperCase = prompt("Include upper case alphabets? Enter y/n");
  var passwordLenght = prompt("Choose a # from 8-128 for password lenght");
  var specialChar = prompt("Include special characters? Enter y/n or blank to skip");
  
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



