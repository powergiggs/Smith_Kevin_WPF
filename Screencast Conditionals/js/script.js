/**
 * Created by kevinsmith on 2/17/15.
 */

    //Conditional logic else if

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45;

//if the child is old enough print to console "you can ride"
//if the kid is over 48 inches in height

if(kidHeight > minHeight ) {
        // you can ride
    console.log("You can ride the coaster!");

}else if (kidHeight > wParentHeight){
        //code perform if condition is false
    console.log ("you can ride, but only with parent present");
}else{


    console.log ("Sorry kid! you got some growing to do first");
}
