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

var wkSalary = weeklyHours * hourRate; //calculation for salary before tax

var taxSalary = wkSalary - incomeTax/100 * wkSalary ;// salary with tax deduction

// if the values equal true codes print to console

if(weeklyHours === ""  && hourRate === "" ){

    console.log ("please enter values for weekly hours and hourly rate"); //codes execute if there is no value enter in  prompt


    }else if(incomeTax === ""){

    console.log("Please enter Income tax rate");

}else{

 console.log("your weekly salary before tax is $" +wkSalary + " and $"+ taxSalary + " after tax."  );

}



//console.log (taxSalary);