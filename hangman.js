var answer;
game();
function game(){
  console.log("welcome to hangman");

  var correct = [];
  var incorrect = [];
  var players = [];
  var count = 0;

  //get players
  while(true){
    var playerName = prompt("Who's playing? \n Please insert name(s). \n (Insert STOP to stop)");
    if(playerName == "STOP"){
      break;
    }
    else{
      players.push(playerName);
    }
    console.log(players);
  }

  //choose random player
  var inCharge = players[Math.floor(Math.random() * players.length)];
  var index = players.indexOf(inCharge);
  players.splice(index, 1);

  console.log("It's " + inCharge + "'s turn for hangman!");

  //***the player inCharge provides answer
  //the spaces from answer are removed, the remaining characters are joined together, displayed in an array output
  answer = beg = prompt(inCharge + " , please choose a word, phrase, or sentence to begin the game.");
  //answer.replace(/ /g, "").split('');

  while(answer){
    guessing();
    function guessing(){

      var guessers = players[Math.floor(Math.random() * players.length)];
      //***have guessers...guess answer
      var guess = prompt(guessers + ", what letter or number will you choose?");

      //wrong answer
      if( !(answer.includes(guess)) ){
        console.log("Nope, sorry.");
        incorrect.push(guess);
        count++;
        console.log(count + " try used");

        //game over
        if(count == 3){
          console.log("You exceeded your amount of tries.");
          oneMoreTime();
        }
        else{
          guessing();
        }
        //move on to next player
      }

      //correct answer
      else if(answer.includes(guess)){
        console.log("Correct! " + guess);
        correct.push(guess);
        //console.log(correct);

        //play again?
        if(correct.length == answer.length){
          console.log("You got it! \n The answer was " + beg);
          oneMoreTime();
        }
      }
    }
    //console.log("mega: " + correct);
  }
}

//!!!bring to top
function oneMoreTime(){
  var again = prompt("Would you like to play again? (Y/N)");
  if(again == "Y"){
    game();
  }
  else if(again == "N"){
    console.log("Game Over");
    answer = false;
  }
  else{
    console.log("Invalid Entry: Please try again");
    oneMoreTime();
  }
}
