/**
 *  Kevin Smith
 * 2/19/15
 *
 * Conditionals Worksheet,
 * Multiple Conditions
 * Movie Ticket Price
 */


var discountPrice= 7.00;
var regularPrice = 12.00
var movieTime = 2;

var customerAge = 20

// if the customer is under 10 or 55 and older print to console
if(customerAge < 10 || customerAge >= 55 ){

    console.log("The ticket price is $" + discountPrice); //code perform is one of the condition is true

// if the movie time is greater than or equal to 3 AND less than or equal to 4 print to console
    }else if(movieTime >= 3 && movieTime <= 5 ){

    console.log("The ticket price is $" + discountPrice);// code perform if both condition is met

}else{
    console.log("The ticket price is $" + regularPrice);//code perform if the conditions above is false


}



