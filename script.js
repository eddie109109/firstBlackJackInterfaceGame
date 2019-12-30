// this marks the completion of my first project with an interface to play with, there were quite a few bugs and i finally got it all fixed before the end of 2019
// took me more than a year lmao to get all those bugs.
// this project has very bad programming practice therefore making it very hard to debug!!
// but it has an interface and i can play with it bravo to me anyway!


let dealerTotalAceAsOne = 0;
let dealerTotalAceAsEleven = 0;
let dealerTotalAceAsElevenHasTen = 0;
let playerTotalAceAsOne = 0;
let playerTotalAceAsEleven = 0;
let playerTotalAceAsElevenHasTen = 0;
let dealerBlackjackCheck = [];
let dealerBlackjackCheckAmount = 0;
let playerSplitCheck = [];
let playerSplitCheckAmount = 0;
let allowToSplit = false;
let changeToSplitMode = false;


let gameStarted = 0;
let playerMoney = 100;
let playerRound = -1;
let dealerRound = 0;
let playerAceFound = 0; // this is to identify that we have found an ace and we need to display two total values at least
let dealerAceFound = 0;
let betPlaced = 0;
let betAmount = 0;
let insuranceTaken = false;
let insuranceAmount = 0;

////////////////////////////// the following global var is for split mode
let playerTotalAceAsOneSet1 = 0;
let playerTotalAceAsElevenSet1 = 0;
let playerTotalAceAsOneSet2 = 0;
let playerTotalAceAsElevenSet2 = 0;
let set1InTheProcess = false;
let set2InTheProcess = false;
let playerRoundSet1 = 0;   // for changing the images starts from the second position
let playerRoundSet2 = 0;
let set1DoubleDownAllowed = false;
let set2DoubleDownAllowed = false;
let set1BetAmount = 0;
let set2BetAmount = 0;
let set1HitAllowed = true;
/////////////////////////////// end of split mode global var


$("#halfInsurance").hide(); // hide the buttons at the begining

$("#fullInsurance").hide(); // hide the buttons at the begining


function newGame() { // starts a brand new game, resets every everything to the original state
  dealerTotalAceAsOne = 0;
  dealerTotalAceAsEleven = 0;
  dealerTotalAceAsElevenHasTen = 0;
  playerTotalAceAsOne = 0;
  playerTotalAceAsEleven = 0;
  playerTotalAceAsElevenHasTen = 0;
  dealerBlackjackCheck = [];
  dealerBlackjackCheckAmount = 0;
  playerSplitCheck = [];
  playerSplitCheckAmount = 0;
  allowToSplit = false;
  changeToSplitMode = false;

  gameStarted = 0;
  playerMoney = 100;
  playerRound = -1;
  dealerRound = 0;
  playerAceFound = 0; // this is to identify that we have found an ace and we need to display two total values at least
  dealerAceFound = 0;
  betPlaced = 0;
  betAmount = 0;
  insuranceTaken = false;
  insuranceAmount = 0;
  $("#playerScore").text("0");
  $("#dealerScore").text("0");
  $("#playerMoney").text("100");
  $("img").attr("src","images/2.png");
  $(".playerSplit").removeClass("showPlayerSplit"); // hide the split mode again
  $("#insurance").show();


  /// reset the split mode var below
  playerTotalAceAsOneSet1 = 0;
  playerTotalAceAsElevenSet1 = 0;
  playerTotalAceAsOneSet2 = 0;
  playerTotalAceAsElevenSet2 = 0;
  set1InTheProcess = false;
  set2InTheProcess = false;
  playerRoundSet1 = 0;
  playerRoundSet2 = 0;
  set1DoubleDownAllowed = false;
  set2DoubleDownAllowed = false;
  set1BetAmount = 0;
  set2BetAmount = 0;
  set1HitAllowed = true;

}


function newplayerRound() { // just reset everything
  dealerTotalAceAsOne = 0;
  dealerTotalAceAsEleven = 0;
  dealerTotalAceAsElevenHasTen = 0;
  playerTotalAceAsOne = 0;
  playerTotalAceAsEleven = 0;
  playerTotalAceAsElevenHasTen = 0;
  dealerBlackjackCheck = [];
  dealerBlackjackCheckAmount = 0;
  playerSplitCheck = [];
  playerSplitCheckAmount = 0;
  allowToSplit = false;
  changeToSplitMode = false;

  gameStarted = 0;
  // playerMoney = 100; // in new playerRound we dont reset the money yet
  playerRound = -1;
  dealerRound = 0;
  playerAceFound = 0;
  dealerAceFound = 0;
  betPlaced = 0;
  betAmount = 0; // reset the bet amount
  insuranceTaken = false;
  insuranceAmount = 0;
  $("#playerScore").text("0");
  $("#dealerScore").text("0");
  // $("#playerMoney").text("100");
  $("img").attr("src","images/2.png");
  $(".playerSplit").removeClass("showPlayerSplit"); // hide the split mode again
  $("#insurance").show();


  /// reset the split mode var below
  playerTotalAceAsOneSet1 = 0;
  playerTotalAceAsElevenSet1 = 0;
  playerTotalAceAsOneSet2 = 0;
  playerTotalAceAsElevenSet2 = 0;
  set1InTheProcess = false;
  set2InTheProcess = false;
  playerRoundSet1 = 0;
  playerRoundSet2 = 0;
  set1DoubleDownAllowed = false;
  set2DoubleDownAllowed = false;
  set1BetAmount = 0;
  set2BetAmount = 0;
  set1HitAllowed = true; // once set1 has doubled down, make this one false
}





// this function is for testing purpose!!!!!!!!!!!!!!!!!!!!!
// testing funciton needs to be commented out soon
function generateAnAce() { //
  var randomNumber = 1; // this one generates a number from 1
  var randomPattern = Math.floor(Math.random()*4);
  var randomPatternInSuits = "";
  // this one generates a number from 0 to 3  // 0 as spades, 1 as hearts, 2 as clubs, 3 as diamonds
  switch (randomPattern) {
    case 0:
      randomPatternInSuits = "S";
      break;
    case 1:
      randomPatternInSuits = "H";
      break;
    case 2:
      randomPatternInSuits = "C";
      break;
    case 3:
      randomPatternInSuits = "D";
      break;
    default:
      alert("Your careless ass missed something!");
      console.log(randomPattern);
  }
  var finalPattern = randomNumber + randomPatternInSuits;
  return finalPattern;
}

function generateACard() {
  var randomNumber = Math.floor(Math.random()*13) + 1; // this one generates a number from 1 to 13
  var randomPattern = Math.floor(Math.random()*4);
  var randomPatternInSuits = "";
  // this one generates a number from 0 to 3  // 0 as spades, 1 as hearts, 2 as clubs, 3 as diamonds
  switch (randomPattern) {
    case 0:
      randomPatternInSuits = "S";
      break;
    case 1:
      randomPatternInSuits = "H";
      break;
    case 2:
      randomPatternInSuits = "C";
      break;
    case 3:
      randomPatternInSuits = "D";
      break;
    default:
      alert("Your careless ass missed something!");
      console.log(randomPattern);
  }
  var finalPattern = randomNumber + randomPatternInSuits;
  return finalPattern; // this one generates the final result esp: 1S means ace of Spades, 2C means two of Clubs
}


function checkForBlackJack(newCard1, newCard2) { // this returns a true or false value
  if (newCard1[0] == 1 && newCard2[0] == 1) { // first checking that the first char is '1'
    if ((isNaN(newCard1[1]) && !isNaN(newCard2[1]))|| (isNaN(newCard2[1]) && !isNaN(newCard1[1]))) {
      // alert("check for blackjack is returning true!");
      return true;// the above makes sure that one of the second char is not a number that means we have at least one ace
    } else {      //  and !isNaN ensures that the second char is a number that means you are not having two aces
      return false;
    }
  } else {
    return false;
  }
}



function updatePlayerScore(finalPattern) {
  if (isNaN(finalPattern[1])) { // this means that the card is either single valued or is an ace(with value of either 1 or 11)
    if (finalPattern[0] == 1) { // this means that we have an ace for sure. if it was a 10 it would be in the else block
      if (playerAceFound == 0) {
        playerTotalAceAsOne += 1;
        playerTotalAceAsEleven += 11;
        playerAceFound++;
      } else { //this means that there are two aces in user's hand, then we count the following aces with the value 1
        playerTotalAceAsOne += 1;
        playerTotalAceAsEleven += 1;
      }

    } else {
      playerTotalAceAsOne += Number(finalPattern[0]);
      playerTotalAceAsEleven += Number(finalPattern[0]);
    }

  } else { // if the second is a digit that means we have 10 11(J) 12(Q) or 13(K) which render the value of 10 in blackjack
    playerTotalAceAsOne += 10;
    if (playerTotalAceAsEleven > 11) {
      if (playerTotalAceAsElevenHasTen == 0) { // this is to address the situation like "A 4 then 10" so we get 15 not 25
        // playerTotalAceAsEleven += 0;
        playerTotalAceAsElevenHasTen ++;
      } else {
        playerTotalAceAsOne += 10;
      }
    }

  }

  if (playerAceFound == 0) {
    $("#playerScore").text(playerTotalAceAsOne);
  } else {
    $("#playerScore").text(playerTotalAceAsOne + " or " + playerTotalAceAsEleven);
  }

}


function updateDealerScore(finalPattern) {
  // alert("this should be activated!");
  if (isNaN(finalPattern[1])) { // this means that the card is either single valued or is an ace(with value of either 1 or 11)
    if (finalPattern[0] == 1) { // this means that we have an ace for sure. if it was a 10 it would be in the else block
      if (dealerAceFound == 0) {
        dealerTotalAceAsOne += 1;
        dealerTotalAceAsEleven += 11;
        dealerAceFound++;
      } else { //this means that there are two aces in dealer's hand, then we count the following aces with the value 1
        dealerTotalAceAsOne += 1;
        dealerTotalAceAsEleven += 1;
        dealerAceFound++;
      }

    } else {
      dealerTotalAceAsOne += Number(finalPattern[0]);
      dealerTotalAceAsEleven += Number(finalPattern[0]);
    }

  } else { // if the second is a digit that means we have 10 11(J) 12(Q) or 13(K) which render the value of 10 in blackjack
    dealerTotalAceAsOne += 10;
    if ((dealerTotalAceAsEleven > 11 && dealerTotalAceAsEleven < 17 )&& dealerTotalAceAsEleven <=17 ) { // this might fix the bug
      // alert("lets see if i have fixed the bug");
      if (dealerTotalAceAsElevenHasTen == 0) { // this is to address the situation like "A 4 then 10"
        // dealerTotalAceAsEleven += 0;
        dealerTotalAceAsElevenHasTen ++;
      } else {
        dealerTotalAceAsOne += 10;
      }
    }
  }

  if (dealerAceFound == 0) {
    $("#dealerScore").text(dealerTotalAceAsOne);
  } else {
    $("#dealerScore").text(dealerTotalAceAsOne + " or " + dealerTotalAceAsEleven);
  }
}


$(".newGameButton").click(function(){
  $(".newGameButton").addClass("press");
  setInterval(function(){ $(".newGameButton").removeClass("press"); }, 1000);
  newGame();

  //just need to comment out the below line for the ease of testing
  alert("You have started the game! 😃Please place your bet 👈and press confirm then start the game👉!")
  // need to uncomment the above line of code after testing


});


$(".startButton").click(function(){ // at this stage i need to get the value of the card and add it to the corresponding total.
  $(".startButton").addClass("press");
  setInterval(function(){ $(".startButton").removeClass("press"); }, 1000);
  // i need to make sure that the user has placed the bet first
  // then i deal the player 2 cards, the dealer 1 card
  var hasBlackjack = false;
  if (gameStarted != 0) {
    alert("Game already started!🤪press one of the 5 buttons below you dumbass🖕!")
    return;
  }

  if (betPlaced == 0) {
    alert("You need to place your bet before you start!");
    return; // if now i will just return and not proceed to the next step
  } else {
    gameStarted++;
  }
  if (playerRound <= 0) { // only the first click works
    let newCard1 = generateACard();
    let newCard2 = generateACard();
    // let newCard1 = generateAnAce();
    // let newCard2 = generateAnAce(); // change for testing
    playerSplitCheck.push(newCard1);
    playerSplitCheck.push(newCard2);




    playerSplitCheckAmount += 2;
    hasBlackjack = checkForBlackJack(newCard1,newCard2); // this returns true or false to see if the player has blackjack;
    allowToSplit = checkForTwoSameValue(newCard1,newCard2); // this is to see if the player is qualified to split
    updatePlayerScore(newCard1);
    updatePlayerScore(newCard2);
    $("#playerCard" + playerRound).attr("src","images/"+ newCard1 + ".png"); // this is to change the picture on the screen
    playerRound ++;
    $("#playerCard" + playerRound).attr("src","images/"+ newCard2 + ".png");
    playerRound ++;
  }

  dealCardForDealer();
  if (hasBlackjack == true) {
    // alert("check if dealer also has blackjack begins ")
    if (dealerBlackjackCheck[0][0] == 1 ) { // make sure the first char is 1 so it can either be an ace or 10,11,12,13
      // alert("I still need to check if dealer has a blackjack");
      dealCardForDealer();
      var dealerHasBlackjack = checkForBlackJack(dealerBlackjackCheck[0],dealerBlackjackCheck[1]);
      if (dealerHasBlackjack) {
        alert("sorry! its a draw!");
        playerMoney += Number(betAmount); // update the playerMoney on the backend by returning the money;
        $("#playerMoney").text(playerMoney);
        $("#playerScore").text("BlackJack!");
        setTimeout(function(){ newplayerRound();}, 2000);//after 2 second, everything back to normal
        return;
      }
    }
    $("h1").text("Blackjack Congrats!");
    var audio = new Audio('sounds/ohYeah.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(betAmount)+Number(betAmount*1.5); // update the playerMoney backend you win by 1.5 ratio;
    $("#playerMoney").text(playerMoney); // update the front end

    //bug fixed!
    $("#playerScore").text("BlackJack!"); // this might address the bug when player has blackjack but not displaying score correctly
    setTimeout(function(){ newplayerRound();}, 2000);//after 1 second, everything back to normal
  }

});

//this is buggy or checkForBlackJack!!!!!!!!!
function dealCardForDealer() { // there is a small bug about dealer blackjack situation

  //the follow is just for debugging, to control the ace scenario
  // if (dealerRound == 2) {
  //   newCard = generateAnAce();
  // } else {
  //   newCard = generateACard();
  // }

  newCard = generateACard();

  dealerBlackjackCheck.push(newCard);
  dealerBlackjackCheckAmount++; // when there are 2 cards only we do the checking to see if dealer has blackjacks

  if (dealerBlackjackCheckAmount == 2) { // because we have 1 card in already, so, dealerBlackjackCheckAmount starts with 1
    var hasBlackjack = checkForBlackJack(dealerBlackjackCheck[0],dealerBlackjackCheck[1]);
    if (hasBlackjack) {
      if (insuranceTaken) { // insurance pays 2:1 here
        playerMoney += insuranceAmount*2;
        $("#playerMoney").text(playerMoney);
        alert("dealer has blackjack but you have won your insurance!");

        updateDealerScore(newCard);
        $("#dealerCard" + dealerRound).attr("src","images/"+ newCard + ".png");
        dealerRound++;

        setTimeout(function(){ newplayerRound();}, 2000);//after 2 seconds, everything back to normal
        return true;
      }

      alert("dealer has blackjack You have lost sucker❌❌❌!"); // bug need to fix here

      $("#dealerScore").text("BlackJack!"); // this is to update the scoreboard for dealer

      updateDealerScore(newCard);
      $("#dealerCard" + dealerRound).attr("src","images/"+ newCard + ".png");
      dealerRound++;

      $("#dealerScore").text("BlackJack!"); // this is to update the scoreboard for dealer
      setTimeout(function(){ newplayerRound();}, 2000);//after 2 seconds, everything back to normal
      return true;
    }
  }



    updateDealerScore(newCard);


  $("#dealerCard" + dealerRound).attr("src","images/"+ newCard + ".png");
  dealerRound++;
  return false;
}


function checkForTwoSameValue(card1, card2) { // this function returns true or false
  if (isNaN(card1[1]) && isNaN(card2[1])) { // this means that the two cards we are checking have only 1 numeric value
    if (card1[0] == card2[0]) { // if the first value is the same then they are equal: value of 1-9
      return true;
    } else {
      return false; // this means that they are not the same
    }
  } else if (card1[0] == card2[0]) {// this means that they are 10, 11, 12 , 13
  // strictly speaking they are not the same but we treat them the same because they all have the same value of 10
    return true;
  } else { // this is to address the scenario when we have 6 and 10
    return false;
  }
}

function dealCardForPlayer() { // the first dealing of two cards doesnt activate this function !!!
  // console.log("dealCardForPlayer check");
  newCard = generateACard();

  playerSplitCheck.push(newCard);
  playerSplitCheckAmount++;
  if (playerSplitCheckAmount == 2) {

    allowToSplit = checkForTwoSameValue(playerSplitCheck[0],playerSplitCheck[1]); // store the value that allows the player to split
  }
  updatePlayerScore(newCard);
  $("#playerCard" + playerRound).attr("src","images/"+ newCard + ".png");
  playerRound++;
}




$("#confirmButton").click(function(){
  // $("#confirmButton").addClass("press");
  // setInterval(function(){ $("#confirmButton").removeClass("press"); }, 1000);
  let userBetAmount = $("input").val(); // get the input value from the user
  if (userBetAmount > playerMoney) {
    alert("Sorry, you don't have this much money to bet. Please enter again");
  } else if (userBetAmount <= 0){
    alert("Sorry, amount can not be lower or equal to zero");
  } else {
    if (gameStarted != 0 || betPlaced == 1) {
      alert("Can't press confirm again my dear 😘");
      return;
    }
    betPlaced = 1;
    betAmount = userBetAmount;
    playerMoney -= userBetAmount; // update the balance of the user on the backgplayerRound
    $("#playerMoney").text(playerMoney); // update the balance on the interface
  }

});


function checkForBusted() {
  if (dealerTotalAceAsOne > 21) {
    $("h1").text("dealer busted!!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney+= Number(betAmount)*2;
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);
    return true;
  }
  if (playerTotalAceAsOne > 21) {
    if(insuranceTaken) {

      if (true == dealCardForDealer()) {
        // playerMoney += insuranceAmount*2;
        // $("#playerMoney").text(playerMoney);
        alert("You have busted yourself but you have won your insurance Money back!");
        // setTimeout(function(){ newplayerRound();}, 2000);//after 2 seconds, everything back to normal
      }

      setTimeout(function(){ newplayerRound();}, 2000);//after 2 seconds, everything back to normal

      return true;
    }

    $("h1").text("You have busted your dumbass!");
    var audio = new Audio('sounds/amountToNothing.mp3');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    setTimeout(function(){ newplayerRound();}, 2000);
    return true;
  }
  return false;
}


function compareScores() { //we compare score based on the fact that TotalAceAsOne is not over 21 for dealer and player
  let bestFromDealer = dealerTotalAceAsOne; // assume that dealer didnt bust and dealerTotalAceAsOne is the best value esp: 16 = 6 + J
  let bestFromPlayer = playerTotalAceAsOne; // assume the same thing as dealer
  if (dealerTotalAceAsEleven <= 21 ) {
    if (dealerTotalAceAsOne < dealerTotalAceAsEleven) {
      bestFromDealer = dealerTotalAceAsEleven;
    }
  }

  if (playerTotalAceAsEleven <= 21) {
    if (playerTotalAceAsOne < playerTotalAceAsEleven) {
      bestFromPlayer = playerTotalAceAsEleven;
    }
  }

  if (bestFromDealer > bestFromPlayer) {
    $("h1").text("Sucker you have lost! ");
    var audio = new Audio('sounds/amountToNothing.mp3');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    // alert("Sucker you have lost! "); // in this case we dont need to update the money because it is deducted already
    setTimeout(function(){ newplayerRound();}, 2000);
  } else if (bestFromDealer == bestFromPlayer) {
    // alert("It's a draw! ");
    $("h1").text("It's a draw! ");
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(betAmount); // add the amount back in
    $("#playerMoney").text(playerMoney); // and display the money again
    setTimeout(function(){ newplayerRound();}, 2000); // game restarts in 2 seconds
  } else {
    //if you have reached here, it means that You have better cards
    $("h1").text("YOU WIN!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(betAmount*2); // add the amount back in and double it
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);
  }
}



//// the following are player option functions: stand / hit / double down / split / surrender / insurance
/// also i need to implement the click action that triggers the function

$("#surrender").click(function(){
  $("#surrender").addClass("press");
  setInterval(function(){ $("#surrender").removeClass("press"); }, 1000);
  if (playerRound == 1 ) { // this means that the player has been dealt 2 cards, therefore playerRound increases to 0 from -1
    if (changeToSplitMode) {
      splitModeSurrender();
    } else {
      surrender();
    }
  } else {
    alert("You can't surrender now you idiot!🚫🐷Know your rule!");
  }
});


function surrender() { // if the player hits the surrender button the player gets half of his original bet back if the dealer doesn't have blackjack
  if (dealerBlackjackCheck[0][0] != 1) { // if the first char is not '1', which can either be ace , 10 , J , Q or K, we go to the next round
    let halfTheOriginalBet = betAmount/2;
    playerMoney += halfTheOriginalBet; // update the playerMoney on the back end
    newplayerRound();
    $("#playerMoney").text(playerMoney);
  } else {
    // alert("blackjack check situation");
    dealCardForDealer();
    let hasBlackJack = checkForBlackJack(dealerBlackjackCheck[0],dealerBlackjackCheck[1]);
    if (hasBlackJack) {
      // alert("Dealer has a blackjack and takes all your bet even if you have surrendered haha sucker!!");
      setTimeout(function(){ newplayerRound();}, 2000);
    } else {
      alert("No blackjack and u still lost half of your bet sucker!!");
      let halfTheOriginalBet = betAmount/2;
      playerMoney += halfTheOriginalBet; // update the playerMoney on the back end
      setTimeout(function(){ newplayerRound();}, 2000);
      $("#playerMoney").text(playerMoney);
    }
  }

}


$("#stand").click(function() {
  $("#stand").addClass("press");
  setInterval(function(){ $("#stand").removeClass("press"); }, 1000);
  if (gameStarted == 0) {
    alert("Game is not started yet! You stupid human being!🌚");
  } else {
    if (changeToSplitMode) {
      splitModeStand(); // this is to address the stand function in split mode
    } else {
      stand();
    }
  }
});




// this is the most annoying function because i have to decide when to stop the dealer from hitting !!
function stand() { // if the player stands, dealer has to keep hitting until he/she busts

    var hasBreak = false;
    while (dealerTotalAceAsOne < 17) { // we check for 17 first if an ace appears we check ace side

      dealCardForDealer();
      if (dealerBlackjackCheckAmount = 2) { // this is check for blackjack
        var hasBlackJack = checkForBlackJack(dealerBlackjackCheck[0],dealerBlackjackCheck[1]);
        if (hasBlackJack) {
          setTimeout(function(){ newplayerRound();}, 2000);
          return;
        }
      }
      var a = checkForBusted();
      for (var i = 0 ; i < dealerBlackjackCheck.length; i ++) {
        if (checkForAce(dealerBlackjackCheck[i])) {
          hasBreak = true;

          break;
        }
      }
      if (hasBreak) {
        break;
      }
    }

    if (hasBreak) { // here it means theres ace for sure
      // while ((dealerTotalAceAsOne < 17)) { // here i have to use and to stop A 8 and hit again // now dealer hits at soft 17
      // while (dealerTotalAceAsEleven <= 17 || dealerTotalAceAsEleven > 21 ) { // seems fixed to address 11 + 1 + 5 + 5 scenario
      while (dealerTotalAceAsEleven <= 17) {
        dealCardForDealer();
        if (dealerBlackjackCheckAmount = 2) {
          var hasBlackJack = checkForBlackJack(dealerBlackjackCheck[0],dealerBlackjackCheck[1]);
          if (hasBlackJack) {
            setTimeout(function(){ newplayerRound();}, 2000);
            return;
          }
        }
        var a = checkForBusted();

      }


      // if i can reach here that means dealer has an ace for sure and dealerTotalAceAsEleven > 17
      // but dealerTotalAceAsOne might be smaller than 17 so i need to address this scenario
      while (dealerTotalAceAsOne  < 17) { /// fixed !!!!!!!!!!!
        dealCardForDealer();
        var a = checkForBusted();
      }


    }

    playerRound++; // once the player has chosen to stand, increase the playerRound so that he cant surrender
    if (a == true) {
      return;
    }
    // alert("has reached here");
    compareScores();
    return;

}

$("#doubleDown").click(function(){
  $("#doubleDown").addClass("press");
  setInterval(function(){ $("#doubleDown").removeClass("press"); }, 1000);
  if (changeToSplitMode) {   // this is for split mode

    if (set1DoubleDownAllowed) {
      if (playerMoney < betAmount*2) {
        alert("You don't have enough money to double down! Poor man plz go to🏧");
        var audio = new Audio('sounds/wrongButton.mp3');
        audio.play();
        return;
      }
      splitModeDoubleDown();
      set1DoubleDownAllowed = false; // turn off set1DoubleDownAllowed


      set1HitAllowed = false;


      set2InTheProcess = true; //
      set2DoubleDownAllowed = true;
      return;
    } else if (set2DoubleDownAllowed) {
      if (playerMoney < betAmount*2) {
        // alert("betAmount now is:" + betAmount);
        alert("You don't have enough money to double down! Poor man plz go to🏧");
        var audio = new Audio('sounds/wrongButton.mp3');
        audio.play();
        return;
      }
      splitModeDoubleDown();
      set2DoubleDownAllowed = false; // turn off set2DoubleDownAllowed
    } else {
      alert("You can't double down now you idiot!🚫🐷Know your rule!");
    }

  } else {

    if (playerRound == 1 ) { // this means that the player has been dealt 2 cards, therefore playerRound increases to 0 from -1
      if (playerMoney < betAmount*2) {
        alert("You don't have enough money to double down! Poor man plz go to🏧");
        var audio = new Audio('sounds/wrongButton.mp3');
        audio.play();
        return;
      }
      doubleDown();
    } else {
      alert("You can't double down now you idiot!🚫🐷Know your rule!");
    }

  }

});

function doubleDown() {
  // alert("double down activated!")
  playerMoney -= betAmount; // the player has to lose another unit of his bet
  betAmount = betAmount*2;
  $("#playerMoney").text(playerMoney);

  // var audio = new Audio('sounds/sure.wav');
  // audio.play();
  dealCardForPlayer();
  checkForBusted(); // some people can choose to double down even tho there's a chance of busting
  stand(); // when player finishes doubling down, the situation will be like stand and wait for the dealer to keep hitting
}


$("#hit").click(function(){
  $("#hit").addClass("press");
  setInterval(function(){ $("#hit").removeClass("press"); }, 1000);
  if (gameStarted == 0) {
    alert("Game is not started yet! You stupid human being!🙈");
  } else {
    if (changeToSplitMode) {
      splitModeHit(); // this is to address the split mode

    } else {
      hit();
    }
  }
});

function hit() {
  dealCardForPlayer();
  checkForBusted();
}


$("#split").click(function(){
  $("#split").addClass("press");
  setInterval(function(){ $("#split").removeClass("press"); }, 1000);



  if (insuranceTaken) { // once i have chosen to take insurance, i dont allow splitting in my rule
    alert("You can't split now!!");

    return;
  }

  if (playerRound == 1 ) { // this means that the player has been dealt 2 cards, therefore playerRound increases to 0 from -1
    // split();// for testing only
    // return; // for testing only
    let minimumAmount = betAmount;

    if (allowToSplit == true) {
      if (playerMoney > minimumAmount * 2) {
        // alert("there might be sth wrong here!");
        set1BetAmount = betAmount; // set up two bet amounts first
        set2BetAmount = betAmount;
        split();
        allowToSplit = false; // turn off the split function, because we don't allow double split
      } else {
        alert("You don't have enough money to split");
        var audio = new Audio('sounds/wrongButton.mp3');
        audio.play();
      }

    } else {
      var audio = new Audio('sounds/wrongButton.mp3');
      audio.play();
      return;
      // alert("You are not qualified to split!");
    }
  } else {
    alert("You can't double down now you idiot!🚫🐷Know your rule!");
    return;
  }
});


function split() {
  // alert("sorry this function is not complete yet, you can't split 🌚🌚🌚");
  // console.log(playerSplitCheck); // this is for testing see what is inside this array
  playerMoney -= betAmount; // player loses another unit of bet first
  $("#playerMoney").text(playerMoney);

  // the below might be the cause of the bug so i need to comment it out

  betAmount = betAmount*2;// this is to record the unit the player has lost b4 the result being announced


  set1BetAmount = betAmount;
  set2BetAmount = betAmount;
  changeToSplitMode = true;
  // this is the key because i need to modify stand/hit/doubleDown/surrender*(no surrender after spliting)
  //no spliting again in my rule

  $(".playerSplit").addClass("showPlayerSplit");
  $("#playerCardSplit-1").attr("src","images/" + playerSplitCheck[1] + ".png"); // the first image of split mode will take the second img of the normal mode
  $("#playerCard0").attr("src","images/2.png"); // turn off the second img of the normal mode
  let value = getDisplayValueFromTheCard(playerSplitCheck[1]);
  playerTotalAceAsElevenSet2 += value; // add the value to the set2 first

  let aceFoundFromTheFirstCard = checkForAce(playerSplitCheck[0]);
  splitModeUpdateUserScoreRightAfterSplit(aceFoundFromTheFirstCard); // update the scoreboard right after the split

  //////////////////////////////////////////////

  set1InTheProcess = true;
  splitModeDealCardForPlayer(); // this is the first card being dealt after spliting

  // once we have changed to split mode, we need to deal one card for set1 and one card for set2

  set1InTheProcess = false;
  set2InTheProcess = true;
  splitModeDealCardForPlayer();
  set2InTheProcess = false;
  set1InTheProcess = true;
}

function splitModeDealCardForPlayer() {
  let newCard = generateACard();
  splitModeUpdateUserScoreAndImage(newCard);

}

function splitModeUpdateUserScoreAndImage(finalPattern) {
  if (checkForAce(playerSplitCheck[0])) {
    var aceFoundFirst = true;
  } else {
    var aceFoundFirst = false;
  }

  let beenHere = false;
  aceFound = checkForAce(finalPattern);
  let set1AceFound = false;
  let set2AceFound = false;
  if (set1InTheProcess) {
    // alert("set1InTheProcess should be here????");
    if (aceFound) {
      set1AceFound = true;
      if (playerTotalAceAsElevenSet1 > 10) {  // adding this is to address the 1 1 8 situation which should render the value of 20 not 30
        // alert("here");
        playerTotalAceAsOneSet1 += 1;
        playerTotalAceAsElevenSet1 += 1;
      } else {
        playerTotalAceAsOneSet1 += 1;
        playerTotalAceAsElevenSet1 += 11;
      }

    } else { // when it is not as ace, then it can be 2- 9 and  10 J Q K
      let displayedValue = getDisplayValueFromTheCard(finalPattern);
      playerTotalAceAsOneSet1 += displayedValue;
      playerTotalAceAsElevenSet1 += displayedValue;
    }

  } else if (set2InTheProcess){ // this is when set 2 is in the process

    // alert("set2InTheProcess should be here!!!!!!!!!!!!");
    if (aceFound) {
      set2AceFound = true;

      if (playerTotalAceAsElevenSet2 > 10) {  // adding this is to address the 1 1 8 situation which should render the value of 20 not 30
        // alert("here2");
        playerTotalAceAsOneSet2 += 1;
        playerTotalAceAsElevenSet2 += 1;
      } else {
        playerTotalAceAsOneSet2 += 1;
        playerTotalAceAsElevenSet2 += 11;
      }

    } else { // when it is not as ace, then it can be 2- 9 and  10 J Q K
      let displayedValue = getDisplayValueFromTheCard(finalPattern);
      playerTotalAceAsOneSet2 += displayedValue;
      playerTotalAceAsElevenSet2 += displayedValue;
    }
  } else {
    alert("you missed sth in splitModeUpdateUserScoreAndImage");
  }


  if(aceFoundFirst) {
    $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
    + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
  } else if (aceFound ) {
    beenHere = true; // once we have found one ace, we need to display more
    if (set1AceFound == true && set2AceFound == true) {
      $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
      + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
    } else if (set1AceFound == true && set2AceFound == false) {
      $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
      + " set2:" + playerTotalAceAsOneSet2 );
    } else if (set1AceFound == false && set2AceFound == true) {
      $("#playerScore").text("set1: " + playerTotalAceAsOneSet1
      + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
    } else {

      alert("You have missed something here in splitModeUpdateUserScoreAndImage")

    }

  } else { // this is when you havent found an ace after spliting
    if (beenHere) {
      if (set1AceFound == true && set2AceFound == true) {
        $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
        + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
      } else if (set1AceFound == true && set2AceFound == false) {
        $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
        + " set2:" + playerTotalAceAsOneSet2 );
      } else if (set1AceFound == false && set2AceFound == true) {
        $("#playerScore").text("set1: " + playerTotalAceAsOneSet1
        + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
      } else {
        alert("You have missed something here in splitModeUpdateUserScoreAndImage")

      }
      return;
    }
    // alert("you haven't found an ace after spliting!!!!!!!");
    $("#playerScore").text("set1: " + playerTotalAceAsOneSet1
    + " set2:" + playerTotalAceAsOneSet2);
  }

  //this is to update the images
  if (set1InTheProcess) {
    // alert("still set1 in progress");
    $("#playerCard" + playerRoundSet1).attr("src","images/"+ finalPattern + ".png");
    playerRoundSet1++;
  } else if (set2InTheProcess) {
    // alert("still set2 in progress");
    $("#playerCardSplit" + playerRoundSet2).attr("src","images/"+ finalPattern + ".png");
    playerRoundSet2++;
  } else {
    alert("you missed sth in splitModeUpdateUserScoreAndImage");
  }

}


function splitModeUpdateUserScoreRightAfterSplit(aceFoundFromTheFirstCard) { // if one card is an ace the other one must be an ace as well
  let aceFound = aceFoundFromTheFirstCard;
  let beenHere = false;
  set1InTheProcess = true; // then we target set1
  set1DoubleDownAllowed = true;
  aceFound = checkForAce(playerSplitCheck[0]); // this is to update the first two split cards
  if (aceFound) { // if we only allow to split once, then we need to display 4 scores
    beenHere = true;
    playerTotalAceAsOneSet1 = 1;
    playerTotalAceAsElevenSet1 = 11;
    playerTotalAceAsOneSet2 = 1;
    playerTotalAceAsElevenSet2 = 11;

    $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
    + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);

  } else { // this means that we don't have an ace; we can have 2-9 or 10 J Q K
    if (beenHere) {
      // alert("inside been here bracket");
      let displayedValue = getDisplayValueFromTheCard(playerSplitCheck[0]);
      playerTotalAceAsOneSet1 += displayedValue;
      playerTotalAceAsOneSet2 += displayedValue;
      $("#playerScore").text("set1: " + playerTotalAceAsOneSet1 + " or " + playerTotalAceAsElevenSet1
      + " set2:" + playerTotalAceAsOneSet2 + " or " + playerTotalAceAsElevenSet2);
      return; // since we have found an ace, we need to display more, cant go back
    }
    let displayedValue = getDisplayValueFromTheCard(playerSplitCheck[0]);
    playerTotalAceAsOneSet1 += displayedValue;
    playerTotalAceAsOneSet2 += displayedValue;
    $("#playerScore").text("set1: " + playerTotalAceAsOneSet1
    + " set2:" + playerTotalAceAsOneSet2);
  }
}



$("#insurance").click(function(){
    // if (dealerBlackjackCheck[0]);
    $("#insurance").addClass("press");
    setInterval(function(){ $("#insurance").removeClass("press"); }, 1000);
    if (changeToSplitMode) { // this is to disable insurance function after splitting
      alert("Insurance not available now!");
      return;
    }
    if (playerRound == 1 ) { // this one ensures no mid way insurance available

      if (checkForAce(dealerBlackjackCheck[0])) {
        let playerBetAmount = betAmount;
        let fullInsurance = false;
        if ( playerMoney > playerBetAmount) {
          fullInsurance = true;
          insurance(fullInsurance);
        } else if (playerMoney > playerBetAmount/2) {
          alert("You only have enough money to do half insurance!");
          insurance(fullInsurance);
        } else {
          alert("Poor people needs no an insurance lmao!!");
          var audio = new Audio('sounds/wrongButton.mp3');
          audio.play();
          return;
        }

      } else {
        alert("You can't take insurance unless dealer has an Ace!");
        var audio = new Audio('sounds/wrongButton.mp3');
        audio.play();
        // let fullInsurance = true; // add it for testing need to remove it later on
        // insurance(fullInsurance); // add it for testing need to remove it later on
      }

    } else {
      alert("Insurance not available now!");
      return;
    }


});

function insurance(fullInsurance) {
  $("#insurance").hide();

  insuranceTaken = true; // if it is the first time, then we marks that the insurance has been taken
  if (fullInsurance) { // the player has the option to do full or half insurance
    $("#halfInsurance").show();
    $("#fullInsurance").show(); // once the insurance button is pressed, i need to show the bet options to the player
  } else {
    $("#halfInsurance").show(); // in this case the player can only do half insurance
  }
}

$("#halfInsurance").click(function(){

  $("#halfInsurance").addClass("press");
  setInterval(function(){ $("#halfInsurance").removeClass("press"); }, 1000);
  halfInsurance();
  setTimeout(function(){ $("#fullInsurance").hide(); }, 500);
  setTimeout(function(){ $("#halfInsurance").hide(); }, 500);
});

$("#fullInsurance").click(function(){
  $("#fullInsurance").addClass("press");
  setInterval(function(){ $("#fullInsurance").removeClass("press"); }, 1000);
  fullInsurance();
  setTimeout(function(){ $("#fullInsurance").hide(); }, 500);
  setTimeout(function(){ $("#halfInsurance").hide(); }, 500);
});




function halfInsurance() {

  insuranceAmount = betAmount;
  insuranceAmount = insuranceAmount/2;
  playerMoney -= insuranceAmount;
  $("#playerMoney").text(playerMoney);
}

function fullInsurance() {

  insuranceAmount = betAmount;
  playerMoney -= insuranceAmount;
  $("#playerMoney").text(playerMoney);
}





// since i have made the mistakes that most of my functions are not too resuable,
//i need to write separate functions for split mode🤣 here they are:
// functions tailored to split mode

function getDisplayValueFromTheCard(card) { // this function returns a digit so that it can be displayed on the scoreboard
  if (isNaN(card[1])) { // when the second char is not a digit, this can be 2-9 (we exclude ace situation here)
    return Number(card[0]); // in this case, i return the first char as a number
  } else { // when the second char is a digit, this means that we have 10 J Q K and they all evaluates to 10
    return 10;
  }
}

function checkForAce(card) { // this return a true or false value
  if (isNaN(card[1])) {// when the second char is not a digit this can be 1-9
    if (card[0] == 1) {
      return true;
    }
  }
  // alert("this card:" + card + "is not an ace!");
  return false;
}


function splitModeCheckForALLBusted() {
  if (dealerTotalAceAsOne > 21) {
    $("h1").text("dealer busted!!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney+= betAmount*2;
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);
    return true;
  }

  if (set1InTheProcess) {
    if (playerTotalAceAsOneSet1 > 21) {
      $("h1").text("You have busted set1! Now onto set 2!");
      var audio = new Audio('sounds/amountToNothing.mp3');
      audio.play();
      set1InTheProcess = false;
      set2InTheProcess = true;
      // return false;  // even though set1 busted i cant return true yet i need either set 1 and 2 busted or dealer busted to return true
    }
  } else if (set2InTheProcess){
    if (playerTotalAceAsOneSet2 > 21) {
      $("h1").text("You have busted your set2!!");
      var audio = new Audio('sounds/amountToNothing.mp3');
      audio.play();
      setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
      setTimeout(function(){ newplayerRound();}, 2000);
      // return true;
    }
  } else {
    alert("u have missed somthing in splitModeCheckForALLBusted");
  }

  if (playerTotalAceAsElevenSet1 > 21 && playerTotalAceAsElevenSet2 > 21) {
    return true;
  } else {
    return false;
  }

}


function splitModeCompareScores() {
  let bestFromDealer = dealerTotalAceAsOne; // assume that dealer didnt bust and dealerTotalAceAsOne is the best value esp: 16 = 6 + J
  let bestFromPlayerSet1 = playerTotalAceAsOneSet1;
  let bestFromPlayerSet2 = playerTotalAceAsOneSet2;
  // there are 9 possible outcomes w w / l l /d d/ / w l / l w / d w / d l / w d / l d
  if (dealerTotalAceAsEleven <= 21 ) {
    if (dealerTotalAceAsOne < dealerTotalAceAsEleven) {
      bestFromDealer = dealerTotalAceAsEleven;
    }
  }


  if (playerTotalAceAsElevenSet1 <= 21) {
    if (playerTotalAceAsOneSet1 < playerTotalAceAsElevenSet1) {
      bestFromPlayerSet1 = playerTotalAceAsElevenSet1;
    }
  }


  if (playerTotalAceAsElevenSet2 <= 21) {
    if (playerTotalAceAsOneSet2 < playerTotalAceAsElevenSet2) {
      bestFromPlayerSet2 = playerTotalAceAsElevenSet2;
    }
  }



  if (bestFromDealer > bestFromPlayerSet1 && bestFromDealer > bestFromPlayerSet2) {
    $("h1").text("Sucker you have lost both hands! "); // no need to deduct more money because it was deducted at betting
    var audio = new Audio('sounds/amountToNothing.mp3');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    // alert("Sucker you have lost! "); // in this case we dont need to update the money because it is deducted already
    setTimeout(function(){ newplayerRound();}, 2000);
  } else if (bestFromDealer == bestFromPlayerSet1 && bestFromDealer == bestFromPlayerSet2) {
    // alert("It's a draw! ");
    $("h1").text("It's a draw for both of your hands with dealer! ");
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(set1BetAmount); // add the amount back in
    playerMoney += Number(set2BetAmount);
    $("#playerMoney").text(playerMoney); // and display the money again
    setTimeout(function(){ newplayerRound();}, 2000); // game restarts in 2 seconds
  } else if (bestFromPlayerSet1 > bestFromDealer && bestFromPlayerSet2 > bestFromDealer) {
    $("h1").text("YOU WIN both hands!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += (set1BetAmount* 2); // add the amount back in and double it
    playerMoney += (set2BetAmount* 2);
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);

  } else if (bestFromPlayerSet1 > bestFromDealer && bestFromPlayerSet2 < bestFromDealer) {
    $("h1").text("YOU WIN One hand and lose the other!");
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(set1BetAmount);
    $("#playerMoney").text(playerMoney); // and display the money again
    setTimeout(function(){ newplayerRound();}, 2000); // game restarts in 2 seconds
  } else if (bestFromPlayerSet1 < bestFromDealer && bestFromPlayerSet2 > bestFromDealer) {
    $("h1").text("YOU WIN One hand and lose the other!");
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += Number(set2BetAmount);
    $("#playerMoney").text(playerMoney); // and display the money again
    setTimeout(function(){ newplayerRound();}, 2000); // game restarts in 2 seconds
  } else if (bestFromPlayerSet1 == bestFromDealer && bestFromPlayerSet2 > bestFromDealer) {
    $("h1").text("YOU WIN one hand and draw the other!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += (set1BetAmount); // add the amount back in
    playerMoney += (set2BetAmount* 2);
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);
  } else if (bestFromPlayerSet1 == bestFromDealer && bestFromPlayerSet2 < bestFromDealer) {
    $("h1").text("Sucker you have lost one hand and got a draw for the other! "); // no need to deduct more money because it was deducted at betting
    var audio = new Audio('sounds/amountToNothing.mp3');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += (set1BetAmount); // add the amount back in
    // alert("Sucker you have lost! "); // in this case we dont need to update the money because it is deducted already
    setTimeout(function(){ newplayerRound();}, 2000);
  } else if (bestFromPlayerSet1 > bestFromDealer && bestFromPlayerSet2 == bestFromDealer) {
    $("h1").text("YOU WIN one hand and draw the other!");
    var audio = new Audio('sounds/yaySound.wav');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += (set1BetAmount*2); // add the amount back in
    playerMoney += (set2BetAmount);
    $("#playerMoney").text(playerMoney);
    setTimeout(function(){ newplayerRound();}, 2000);
  } else if (bestFromPlayerSet1 < bestFromDealer && bestFromPlayerSet2 == bestFromDealer) {
    $("h1").text("Sucker you have lost one hand and got a draw for the other! "); // no need to deduct more money because it was deducted at betting
    var audio = new Audio('sounds/amountToNothing.mp3');
    audio.play();
    setTimeout(function(){ $("h1").text("Welcome to Eddie's Blackjack game! ");}, 2000);
    playerMoney += (set2BetAmount); // add the amount back in
    // alert("Sucker you have lost! "); // in this case we dont need to update the money because it is deducted already
    setTimeout(function(){ newplayerRound();}, 2000);
  } else {
    $("h1").text("Sucker you missed something! ");
  }

}




// the following are the hit / stand / doubleDown / split / surrender functions of split mode
function splitModeSurrender() {
  alert("You have split already! No late surrender now!");
  var audio = new Audio('sounds/wrongButton.mp3');
  audio.play();
}


function splitModeDoubleDown() { // for the doubleDown function we always allow we do the checking when the player clicks
  if (set1DoubleDownAllowed) {
    set1HitAllowed = false;
    set1DoubleDownAllowed = false; // after doubling down disable it
      if (set1InTheProcess) {
        playerMoney -= set1BetAmount; // the player has to lose another unit of his bet
        set1BetAmount = set1BetAmount*2;

      } else if (set2InTheProcess) { // now it should be set2InTheProcess
        playerMoney -= set2BetAmount; // the player has to lose another unit of his bet
        set2BetAmount = set2BetAmount*2
      }
      $("#playerMoney").text(playerMoney);
      $("#doubleDown").addClass("press");
      setInterval(function(){ $("#doubleDown").removeClass("press"); }, 2000);
      splitModeDealCardForPlayer();
      splitModeCheckForALLBusted(); // some people can choose to double down even tho there's a chance of busting

      set1InTheProcess = false;
      set1DoubleDownAllowed = false; // after doubling down disable it
      set2InTheProcess = true;
    } else if (set2DoubleDownAllowed) {
      set1InTheProcess = false;
      set2InTheProcess = true;
      set1DoubleDownAllowed = false;
      set2DoubleDownAllowed = false;
      if (set1InTheProcess) {
        playerMoney -= set1BetAmount; // the player has to lose another unit of his bet
        set1BetAmount = set1BetAmount*2;

      } else if (set2InTheProcess) { // now it should be set2InTheProcess
        playerMoney -= set2BetAmount; // the player has to lose another unit of his bet
        set2BetAmount = set2BetAmount*2 // i modified the setAmount because i need to i need this info for later calculation for the result
      }
      $("#playerMoney").text(playerMoney);
      $("#doubleDown").addClass("press");
      setInterval(function(){ $("#doubleDown").removeClass("press"); }, 2000);

      splitModeDealCardForPlayer();
      splitModeCheckForALLBusted(); // some people can choose to double down even tho there's a chance of busting
      splitModeStand(); // when player finishes doubling down, the situation will be like stand and wait for the dealer to keep hittin

      splitModeStand(); // double stand just in case see if it helps!!!!!!!!!!
    } else {
      alert("you have missed again!");
    }
}


function splitModeHit() {
  // alert("using splitModeHit");
  if (set1HitAllowed) {
    splitModeDealCardForPlayer();
    splitModeCheckForALLBusted();
  } else {
    // alert("in the correct place");
    set2InTheProcess = true;
    set1InTheProcess = false;
    splitModeDealCardForPlayer();
    splitModeCheckForALLBusted();
  }

}

function splitModeStand() {
  // alert("splitModeStand activated");
  if (set2InTheProcess) {
    set2InTheProcess = true;
    set2DoubleDownAllowed = false;
    // while (dealerTotalAceAsOne < 17 && (dealerTotalAceAsEleven <= 17 || dealerTotalAceAsEleven >21)) { // now dealer hits at soft 17
    while  ((dealerTotalAceAsOne < 17) && (dealerTotalAceAsEleven <= 17)) {
      dealCardForDealer();
      var a = splitModeCheckForALLBusted();

    }
    playerRound++; // once the player has chosen to stand increases the playerRound so that he cant surrender
    if (a == true) { // this is to address the situation when one is busted
      return;
    }
    // alert("now reaching splitModeCompareScores");
    splitModeCompareScores(); // when either side finishes hitting, we compare the scores from both sides if no one busted
    return;
  }

  if (set1InTheProcess) {
    set1InTheProcess = false; // once the player chooses stand we switch to set2 immediately
    set2InTheProcess = true;
    set1DoubleDownAllowed = false;
    set2DoubleDownAllowed = true;
    // splitModecompareScores(); // when either side finishes hitting, we compare the scores from both sides
    alert("now onto set2!");
  }



}
