/**
 *  kevin smith
 *  2/26/15.
 *  Loops
 */

// while loop

    console.log("......loops.......")
var b = 50; // setup the index

while (b > 10){ // checks the condition
    console.log (b + " book on the shelf");
    b--;//increment or decrement the index
}

// Do while loop

console.log("------ Do While Loops -----");

var c = 10;

do {

    console.log(c + " book on the shelf");
    c--;
}

while (c > 0);

console.log("----- For Loops ------ ")

for (var i = 10; i > 0; i--){
    console.log(i + " books on the shelf");

}

var throwCount;
var diceThrow;
for (throwCount = 0; throwCount < 10; throwCount++){
    diceThrow = (Math.floor(Math.random() * 6) + 1);

}

console.log (diceThrow );