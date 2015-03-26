/**
 *  Kevin Smith
 *  3/26/15
 *  Functions_Assignment
 */

//Variables

var myLottery = prompt("Please enter florida for Florida Lottery or powerball for Powerball lottery results");
//prompt user to enter value florida or powerball to see results

var floridaLottery = lotteryNumberGenerator(1, 53);
var powerballLottery = lotteryNumberGenerator(1, 59);
var powerBallNum = lotteryNumberGenerator(1, 35);
var lotteryResult;
myLottery = inputValidation(myLottery);


//functions

function inputValidation(lotteryType){

    while(lotteryType === "" ){ // if condition is true prompt user

        lotteryType = prompt ("Do not leave this field blank\n\n Please enter 'florida' or 'powerball' for results");


      //  if(lotteryType !=="florida" || lotteryType !=="powerball" ){

      //  }



    }

return (lotteryType);

}


function lotteryNumberGenerator (min, max){ //random number generator for lottery array

    var lotteryArray = [];

    for(var i = 0; i < 6; i++){
var randomNumbers = Math.random() * (max - min) + min;
        randomNumbers = Math.ceil(randomNumbers);
        lotteryArray[i] = randomNumbers;//


      //console.log(randomNumbers);


    }
        return (lotteryArray);
}


function printUserResult (){ // function to show result to user

    if(myLottery === "florida"){ // checks if input is equal to florida

        console.log("FL lottery numbers: " + floridaLottery );// print result to user if input is florida
    }

    else if(myLottery === "powerball"){// checks if input is equal to powerball

        // print result to user if input is powerball
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
