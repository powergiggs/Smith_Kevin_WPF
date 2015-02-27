/**
 *  Kevin Smith
 *  2/26/15
 *  Functions_Assignment
 *
 */

//Variables

var myLottery = prompt("Please enter florida for Florida Lottery or powerball for Powerball lottery results");
//prompt user to enter value florida or powerball to see results

var floridaLottery = lotteryNumberGenerator(1, 53);
var powerballLottery = lotteryNumberGenerator(1, 59);
var powerBallNum = lotteryNumberGenerator(1, 35);
var lotteryResult;


//functions

function inputValidation(lotteryType){
    var i = 0;
    while(lotteryType === "" ){ // if condition is true prompt user

        lotteryType = prompt ("Do not leave this field blank\n\n Please enter 'florida' or 'powerball' for results")
       i++;

        if(lotteryType !=="florida" || lotteryType !=="powerball" ){

        }
        if (i > 5 ){


            break;
        }


    }

return (lotteryType);

}


function lotteryNumberGenerator (min, max){

    var lotteryArray = [];

    for(var i = 0; i < 6; i++){
var randomNumbers = Math.random() * (max - min) + min;
        randomNumbers = Math.ceil(randomNumbers);
        lotteryArray[i] = randomNumbers;


      //console.log(randomNumbers);


    }
        return (lotteryArray);
}


function printUserResult (){ //

    if(myLottery === "florida"){

        console.log("FL lottery numbers: " + floridaLottery );
    }

    else if(myLottery === "powerball"){

        console.log("PowerBall lottery numbers: " + powerballLottery + " with PB " + powerBallNum[0] );
    }
return(myLottery) ;
}






//Main Code
lotteryResult = printUserResult();

myLottery = inputValidation(myLottery);
floridaLottery = lotteryNumberGenerator(1, 53);
powerballLottery  = lotteryNumberGenerator(1, 59);
powerBallNum = lotteryNumberGenerator(1, 35);

//console.log("FL lottery numbers: " + floridaLottery );

//console.log(myLottery);