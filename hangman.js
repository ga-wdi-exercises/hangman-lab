var answer;
game();
function game(){
  console.log("welcome to hangman");

  //!!!LATER: ask for number of players
  //!!!LATER: get player names| can use .split()

  //****players assigned game roles
  var inCharge;
  var guessers;
  var correct = [];
  var incorrect = [];
  var count = 0;

  //***the player inCharge provides answer
  //the spaces from answer are removed, the remaining characters are joined together, displayed in an array output

  answer = beg = prompt("Choose a word, phrase, or sentence for the game.");
  //answer.replace(/ /g, "").split('');

  while(answer){
    guessing();
    function guessing(){

      //***have guessers...guess answer
      var guess = prompt("What letter or number will you choose?");

      //wrong answer
      if( !(answer.includes(guess)) ){
        console.log("Nope, sorry.");
        incorrect.push(guess);
        count++;
        console.log(count);

        //game over
        if(count == 3){
          console.log("Game Over");
          answer=false;
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
        console.log(correct);

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
