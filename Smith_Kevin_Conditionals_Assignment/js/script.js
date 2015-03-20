/*
 *  Kevin Smith
 *  3/19/15.
 *  Conditionals_Assignment
 */


var numberMiles = prompt("Please enter the number of miles for your trip"); // prompt user to enter their trip distance in miles
var milesPerGallon = prompt("Please enter the car miles per gallon efficiency "); // prompt user to enter car miles per gallon
var fuelPrice = prompt("Please enter the cost of fuel per gallon"); // prompt user to enter the cost of fuel per gallon

var fuelVolume = numberMiles/milesPerGallon;// variable to calculate fuel volume
var tripCost = fuelVolume * fuelPrice; // variable to calculate trip cost for fuel

if(numberMiles === "" && milesPerGallon === ""  ){

    console.log ("Please enter a  value for miles and miles per gallon");// print to console if condition is true

} else if(fuelPrice === ""){

    console.log("Please enter fuel cost"); // print to console if condition 1 is false and condition is true


}else{

    console.log ("Your " + numberMiles + " miles road trip will cost you $" + tripCost.toFixed(2)+ " in fuel");// 
}





//console.log(numberMiles);