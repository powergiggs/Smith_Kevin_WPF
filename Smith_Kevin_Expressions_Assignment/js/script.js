/*
 * Kevin Smith
 * 3/12/15
 * Expression Assignment

 */


var principalAmount =  prompt("Please enter the amount of money borrow"); // Prompt user to enter the principal amount being borrowed

var rate =  prompt ("Please enter the percentage(%) rate for loan"); // prompt user to enter the percentage rate charge for loan

var timePeriod = prompt ("Please enter time period in years for\n which the money is being borrowed"); // prompt user to enter the time period for loan in months

//rate = rate/100; //calculation for reducing rate variable to decimal

var userValue =  [Number(principalAmount), Number(rate), Number(timePeriod)];// array variable for storing user input  and converting string to number value

var interestCalc = userValue[0] * (userValue[1]/100) * userValue [2];// variable to calculate  result from user  input




console.log("Hello your interest amount is $" + interestCalc.toFixed()+ " for your loan"); // print calculation result to console.log



/*
I typed 14,000 for principal amount, 7 for interest percentage rate and 3 for the amount of years
and result yield 2,940 for interest amount.

also

 I typed 23,000 for principal amount, 10 for interest percentage rate and 2 for the amount of years
 and result yield 4,600 for interest amount.


 */