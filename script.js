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

  //These are booleon
  var specialChars = window.confirm("Click OK to confirm including special characters.");
  var lowerCase = window.confirm("Click OK to confirm lower case characters");
  var numericChars = window.confirm("Click OK to confirm including numeric characters.");
  var upperCase = window.confirm("Click OK to confirm uncluding upper case characters.");
  
  if(specialChars){
 
    container = container.concat(special)
  }

  if(lowerCase){
    container = container.concat(lower)
  }

  if(numericChars){
    container = container.concat(numbers);
  }


  if(upperCase){
    container = container.concat(upper);
  }



  //console.log("check",container)

  for(var i = 0; i < numberChars; i++){

   
    var index = Math.floor(Math.random() *  (container.length - 1));//random number 0 -25 
    newPassword = newPassword + container[index] //0

 

  }



  console.log("password:",password)


  

  return newPassword;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //gets password genreated
  var passwordText = document.querySelector("#password"); //selects the html element with id "password"
  
  passwordText.value = password; //adds text inside as value
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









