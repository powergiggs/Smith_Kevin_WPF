/**
 * Kevin Smith on
 * 2/26/1
 * Functions_worksheet
 */


//Calculate the circumference of a circle.

var circumTotal = calculateCircumference (8); //variable to store function

function calculateCircumference (radius){
    var circumference = 2 * Math.PI * radius; // code for circumference calculation

    return circumference; // return value outside function
}

console.log("The circumference of the circle is " + circumTotal); //function result print to console.log