/**
 * Kevin Smith
 *
 * 02/19/2015
 *
 * Conditionals_Assignment
 */

var weeklyHours = prompt("Please enter your Weekly Hours");// prompt user to enter their total hours work
var hourRate = prompt ("Please enter your hourly rate"); // prompt user to enter their hourly rate
var incomeTax = prompt ("Please enter your income tax rate"); // prompt user to enter their income tax rate
var overTime;

var wkSalary = weeklyHours * hourRate; //calculation for salary before tax

var taxSalary = wkSalary - incomeTax/100 * wkSalary ;// salary with tax deduction

// if the values equal true codes print to console

if(weeklyHours === ""  && hourRate === "" ){

    console.log ("please enter values for weekly hours and hourly rate"); //codes execute if there is no value enter in for prompt

//if the value equal true cods print to console

    }else if(incomeTax === ""){

    console.log("Please enter Income tax rate");// code execute if no value is enter in prompt

}else{

 console.log("your weekly salary before tax is $" +wkSalary + " and $"+ taxSalary + " after tax."  );

 // salary before and after tax print to console

}

//if the weekly hours is more than 40 hours get "you have earn some extra cash" otherwise "No overtime sorry"

overTime = (weeklyHours > 40) ? "You have earn some extra cash" : "No overtime sorry"; //

console.log(overTime);

// I type in 40 for hours, 32 for hourly rate and 5 for tax rate and calculator gave 1280 for salary before tax and 1216 after tax


