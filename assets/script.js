var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from
var abcOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ABCoption = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"];
var specialCharOption = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lenghtOption = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128"];

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

  var lenghtOption = window.prompt("Pick your password length: Chose a # from 8-128");

  
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

passwordText.value = password;  
}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);



