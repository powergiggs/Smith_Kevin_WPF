/**
 * Created by kevinsmith on 2/19/15.
 */

//Ternary Operators

var age = 6;
var book;

//if the child is under 10, they green Eggs and Ham, otherwise they get the machine

/*if(age < 10){
    book = "Green Eggs and Hams";


}else{
    book = "The Time Machine";
 
}*/

book =(age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);