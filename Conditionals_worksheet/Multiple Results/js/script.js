/**
 *  Kevin Smith
 * 2/19/15
 *
 * Conditionals Worksheet,
 * Multiple Results
 * Check the Login
 */

var enterName = prompt("Please enter your user name"); // prompt user for user name
var enterPassword = prompt("Please enter the correct password"); // prompt user for password

var userName = "powergiggs"; // variable storing username
var passWord = "happy"; // variable storing password

// if the user name and password is equal to the variable user and  password print to console

if(enterName === userName && enterPassword === passWord ){

    console.log("Welcome," +userName+ "!"); // code execute if the condition is true


    }else if(enterName != userName ){

    console.log("User not found. Try again.") // code execute if user name do not match


    }else if(enterName === userName && enterPassword != passWord ){

    console.log("Password does not match our records.") // code execute if username match but password doesn't
}

//console.log(enterName);


