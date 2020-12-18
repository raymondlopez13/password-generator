// Assignment code here
function generatePassword() {
  var passwordLength = prompt("Length of password (8-128 characters)");
  if (passwordLength < 8){
    alert('Please choose a number between 8 and 128 characters');
    generatePassword();
  } else if (passwordLength > 128) {
    alert('Please choose a number between 8 and 128 characters');
    generatePassword();
  }
  var lowercase = confirm("Would you like lowercase letters in your password?");
  lowercase = confirm("Are you sure?");
  var uppercase = confirm("Uppercase letters?");
  uppercase = confirm("Are you sure?");
  var numbers = confirm("Numbers?");
  numbers = confirm("Are you sure?");
  var specialChar = confirm("Special Characters?");
  specialChar = confirm("Are you sure?");
  if (lowercase === false && uppercase === false && numbers === false && specialChar === false){
    alert('I cannot create a password made of nothing!');
    generatePassword();
  }
  var arr = [];
  if (lowercase === true) {
    arr.push('abcdefghijklmnopqrstuvwxyz');
  } 
  if (uppercase === true) {
    arr.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  } 
  if (numbers === true) {
    arr.push('0123456789');
  } 
  if (specialChar === true) {
    arr.push(' !"#$%&\')(*+,-./;:<=>?@[\\]^_`{|}~')
  }
  console.log(arr);
  var password = [];
  for (i=0; i < passwordLength; i++){
    let rando = Math.floor(Math.random() * arr.length);
    let arrRando = Math.floor(Math.random() * arr[rando].length);
    password.push(arr[rando][arrRando]);
  }
  password = password.join('');
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
