/**
 * Created by kevinsmith on 2/25/15.
 * Functions
 */

//alert("hello world");

//outptMsg()
//calcArea()

function outptMsg(){
    //console.log("hello world");

}

function calcArea(){
    var width = 20;
    var height = 30
    var area = width * height;
    //console.log(area)
}
// Function - Parameters and Arguments

function dogYears(age){
    var dogyears = age * 7;
    console.log("Sparky is " + dogyears + " years old");

}
dogYears(6)


//Function- Returning Values

var total = calcArea(30, 20);

function calcArea(w, h){
var area = w * h;
    return area; // function spitting out the info

}

console.log(total);