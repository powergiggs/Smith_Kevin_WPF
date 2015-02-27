/**
 *  Kevin Smith
 *  2/26/15
 *  Functions_Assignment
 *
 */

//Variables

var myLottery = prompt("Please enter florida for Florida Lottery or powerball for Powerball lottery results");
//prompt user to enter value florida or powerball to see results




//functions

function inputValidation(lotteryType){
    var i = 1;
    while(lotteryType === "" ){ // if condition is true prompt user

        lotteryType = prompt ("Do not leave this field blank\n\n Please enter 'florida' or 'powerball' for results")
       i++;

        if (i === 10 ){


            break;
        }



    }

return (lotteryType);

}


function lotteryNumberGenerator (){

    var lotteryArray = [];

    for(var i = 0; i < 6; i++){
var randomNumbers = math.random() * (max - min) + min;
        randomNumbers =


    }

}






//Main Code
myLottery = inputValidation(myLottery);

//console.log(myLottery);