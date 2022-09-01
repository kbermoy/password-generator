var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var abcOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ABCoption = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];
var specialCharOption = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// create functionality containing the user's decisions, which we will then use the gathered values as an object
function generatePassword() {
  // Variable to store length pf password from user input
  var length = parseInt(
    window.prompt("How many characters would you like your password to contain?")
  );

  var hasSpecialChar = confirm(
    "Click OK to confrim including SPECIAL CHARACTERS."
  );
  var hasLowerCaseChar = confirm(
    "Click OK to confirm including LOWER CASE CHARACTERS."
  );
  var hasUpperCaseChar = confirm(
    "Click OK to confirm including UPPER CASE CHARACTERS."
  );

  if (hasSpecialChar == true) {
    var indexSpecialChar = Math.floor(Math.random() * specialCharOption.length);
    var randomSpecialChar = specialCharOption[indexSpecialChar];
    window.alert("Password will include " + randomSpecialChar);
  } else {
  };
  if (hasLowerCaseChar == true) {
    var indexLowerCase = Math.floor(Math.random() * abcOption.length);
    var randomLowerCase = abcOption[indexLowerCase];
    window.alert("Password will include " + randomLowerCase);
  } else {
  };
  if (hasUpperCaseChar == true) {
    var indexUpperCase = Math.floor(Math.random() * ABCoption.length);
    var randomUpperCase = ABCoption[indexUpperCase];
    window.alert("Password will include " + randomUpperCase);
  } else {
  };
};
var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

passwordText.value = password; 

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);



