/*
 * Kevin Smith
 * 3/12/15
 * Expression Assignment

 */


var principalAmount =  prompt("Please enter the amount of money borrow"); // Prompt user to enter the principal amount being borrowed

var rate =  prompt ("Please enter the percentage rate for loan"); // prompt user to enter the percentage rate charge for loan

var timePeriod = prompt ("Please enter time period in years for\n which the money is being borrowed"); // prompt user to enter the time period for loan in months

rate = rate/100; //calculation for reducing rate variable to decimal

var userValue =  [Number(principalAmount), Number(rate), Number(timePeriod)];// array variable for converting user input to number value

var interestCalc = userValue[0] * rate * userValue [1];// variable to calculate and store result from user prompt input




//console.log(interestCalc.toFixed());