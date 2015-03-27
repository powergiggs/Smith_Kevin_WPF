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
myLottery = inputValidation();


//functions

function inputValidation(){

    while (myLottery === "" || myLottery !== "florida" && myLottery !== "powerball" ){ // if condition is true prompt user

        myLottery = prompt ("Do not leave this field blank\n\n Please enter 'florida' or 'powerball' for results");
        // while loop prompt for user



    }

return (myLottery);

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

        console.log("Your Florida lottery numbers: " + floridaLottery );// print result to user if input is florida
    }

    else if(myLottery === "powerball"){// checks if input is equal to powerball

        // print result to user if input is powerball
        console.log("Your PowerBall lottery numbers: " + powerballLottery  + " with PB " + powerBallNum[0] );
    }
return(myLottery) ;
}

powerballLottery.pop();// reduce powerball to 5 random numbers




//Main Code
lotteryResult = printUserResult();

/*
code tested and yield the results

Your Florida lottery numbers: 24,48,30,49,7,40

and

Your PowerBall lottery numbers: 14,7,11,55,44 with PB 25

*/
