/**  Kevin Smith, 2/13/15, SDI_Expression_Assignment */

var dayOne = prompt ("We are calculating your average daily miles run for 5 days. \n Please enter miles "); // Prompt user for the first  input value
var dayTwo = prompt ("Please enter the miles.");   //prompt user for the second input value

var dayThree = prompt ("Please enter the miles."); // prompt user for the third input value

var dayFour = prompt ("Please enter the miles."); // prompt user for fourth input value

var dayFive = prompt ("Please enter final miles.");   // prompt user for final input value

//var arrayValues = Number [dayOne, dayTwo, dayThree, dayFour, dayFive];   // array variable to store the date from user



var average = (Number(dayOne)+Number(dayTwo)+Number(dayThree)+Number(dayFour)+Number(dayFive))/5; //   Variable use to store calculation for the average result



alert ("You ran a average "+ average + " miles for the five days but \n ran " + dayOne + " miles on your first day");

/*  I type 45,35,50,25 and 30 respectively and my calculator gave me 185 for total and 37 for average when divided by 5 */