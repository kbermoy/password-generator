var passwordText = document.getElementById("password");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial 
}

// create a function as a container to hold the window prompts
function writePassword() {
  var passwordLength = window.prompt (
    'Enter a number from 8-128 for you password lenght'
  );
  if (passwordLength < 8) {
    window.alert("Length has to be greater than 8")
    return;
  }
  else if (passwordLength > 128) {
    window.alert("Length has to be less than 128")
    return;
  }
  var hasLowerCase = confirm (
    'Click OK to confrim including LOWER CASE CHARACTERS.'
  );
  var hasUpperCase = confirm (
    'Click OK to confrim including UPPER CASE CHARACTERS.'
  );
  var hasNumericChar = confirm (
    'Click OK to confrim including NUMERIC CHARACTERS.'
  );
  var hasSpecialChar = confirm (
    'Click OK to confirm including SPECIAL CHARACTERS.'
  );
  
  //console.log(hasLowerCase, hasUpperCase, hasNumericChar, hasSpecialChar, passwordLength);
  passwordText.innerText = generatePassword(hasLowerCase, hasUpperCase, hasNumericChar, hasSpecialChar, passwordLength); //still need to create function 'generatePassword
};

function generatePassword(lower, upper, number, special, passwordLength) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + special;
  const typesArr = []
  if (lower === true) {
    typesArr.push(getRandomLower)
  }
  if (upper === true) {
    typesArr.push(getRandomUpper)
  }
  if (number === true) {
    typesArr.push(getRandomNumber)
  }
  if (special === true) {
    typesArr.push(getRandomSpecial)
  }
 var password = ''
  console.log("Types Array: " + typesArr);
  for(let i=0; i<passwordLength; i++) {
    password += typesArr[Math.floor(Math.random() * typesArr.length)]()
  }
 return password;
}

// add event listener to generate btn
document.getElementById("generate").addEventListener("click", writePassword);

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial() {
  const specials = '!@#$%^&*(){}[]=<>/,.'
  return specials[Math.floor(Math.random() * specials.length)];
}
//console.log(getRandomSpecial());

// check if user confirmed each prompts and check length  


// we want to see a true/false in console to see if the user confirms
//then want to pass these into a function'generatePassword' 
//then put function 'generatePassword' into the Secure Password by using a DOM element (which is password)
//exp: passwordEl.innerText = generatePassword(hasLower,hasUpper,etc);

//generate password function using:
// function generatePassword (lower, upper, number, special, length) {}
// this function will take all the info from the above
// 1. initialize a password variable
// 2. filter out checked unconfirmed types
		// do this by using Object.values(item)[0]
		// also want to check if all are not confirmed
// 3. loop over the length, call generator function for each type
// 4. add final password to the password variable and return
		// use return finalPassword;
		// which is returning the finalPassword from the generatePassword function, which is going to put into the result

// create functions to get the random character and put it into an object
