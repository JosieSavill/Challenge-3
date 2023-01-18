// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = ""
var numbers = ['0', '2', '3', '4', '5', '6', '7', '8', '9']
var lower = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'x', 'y', 'z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var container  = [];


function generatePassword(){
  var numberChars = window.prompt("How many characters would you like your password to contain?");
  console.log (numberChars);
  var specialChars = window.confirm("Click OK to confirm including special characters.");
  console.log("specialChars" , specialChars);
  var numericChars = window.confirm("Click OK to confirm including numeric characters.");

  var lowerCase = window.confirm("Click OK to confirm lower case characters");
  var upperCase = window.confirm("Click OK to confirm uncluding upper case characters.");

  if (lowerCase) {
    container = container + lower.join("") + special.join("") + upper.join("") + numbers.join("");
    
  }

  console.log(container);


  

  return newPassword;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

