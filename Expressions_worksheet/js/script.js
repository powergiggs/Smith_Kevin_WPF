/** Kevin Smith--02/12/2015--Expression Worksheet */

/**Dog Years*/

var humanAge = 2; // define variable for Sparky age

var dogAge = humanAge * 7; //  calculations for sparky human age
console.log ("Sparky is " + humanAge + " human years old which is "+ dogAge +" in dog years." ); // printing Sparky human and dog age result

/**Slice of Pie part 1 */

var pizzaSlice = 8; // variable for number of slices per pizza

var nuPeople = 16; // Variable for number of people at party

var nuPizzaOrder = 4; // variable to represent number of pizzas ordered

var slicePerPerson = (pizzaSlice * nuPizzaOrder)/nuPeople; // calculations for number of pizza slices per person

console.log ("Each person ate "+ slicePerPerson + " slices of pizza at the party."); // printing result of how many slices of pizza each person ate


/*Slice of Pie part II*/

var dogSlices = (pizzaSlice * nuPizzaOrder)% nuPeople; // calculation for sparky slices
console.log ("Sparky got " + dogSlices + " slices of pizza.");// printing result of sparky slices



/*Average shopping bill*/

var weeklyGrocery = [120, 233, 452, 235, 300]; //variable array declare
var totalGro = weeklyGrocery[0]+weeklyGrocery[1]+weeklyGrocery[2]+weeklyGrocery[3]+weeklyGrocery[4]; //variable calculation for grocery total

var average = totalGro/5; // variable calculation for grocery average

console.log("You have spent a total of $" +totalGro+ " on groceries over 5 weeks. That is an average of $" + average +" per week");// print result showing both total and average for grocery spending


/*Discounts*/

var orgPrice= 200; //variable for item original  price
var discount = 30; // variable for discount amount
var item = "watch"; // variable string for item name
var saleTax = 0.10 // variable for sale tax

var discountPrice = orgPrice- (orgPrice *  (discount/100)); //discount price calculation

var pWithTax =  (discountPrice * saleTax) + discountPrice  ; //calculation for item with tax

var pWithoutTax = discountPrice; //variable item without tax


console.log("Your " + item +" was originally $"+orgPrice+", but after a " + discount+ "% discount, it is now $"+ pWithoutTax + " without tax, and $" + pWithTax + " with tax.");// print result showing accurate result
