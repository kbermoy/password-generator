var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var abcOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ABCoption = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];
var specialCharOption = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//
function writePassword() {
  var lowerCase = window.prompt("Include lower case alphets? Enter y or n");
  var indexLowerCase = Math.floor(Math.random() * abcOption.length);  
  var randomLowerCase = abcOption[indexLowerCase]; 
  
  
  var upperCase = window.prompt("Include upper case alphabets? Enter y or n");
  var indexUpperCase = Math.floor(Math.random() * ABCoption.length);
  var randomUpperCase = ABCoption[indexUpperCase];

  var specialCharOption = window.prompt("Include special characters? Enter y or n");
  var indexSpecialChar = Math.floor(Math.random() * specialCharOption.length);
  var randomSpecialChar = specialCharOption[indexSpecialChar];

  var numericChar = window.prompt("Pick your password length: Chose a # from 8-128");

  
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

passwordText.value = password;  
}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);



