/**
 *  Kevin Smith
 * 2/19/15
 * Conditionals Worksheet
 */

var mpg = 30;
var gasGauge = 55;
var gasTankCapacity =15;

var gasAvailable = gasGauge/100 * gasTankCapacity;   // this code calculates available gas and store as variable

//if the gas Gauge is greater than miles per gallon and miles per gallon is more than gas thank capacity


if(gasGauge > mpg && mpg > gasTankCapacity ){

  console.log("Yes, you can make it without stopping for gas!");
    // code print to console if conditions is true


}else{

    console.log("You only have " + gasAvailable +" gallons of gas in your tank,\nbetter get gas now while you can! ");

//code print to console if conditions is false

}




