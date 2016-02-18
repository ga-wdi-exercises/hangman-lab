console.log("welcome to hangman");

//LATER: ask for number of players
//LATER: get player names| can use .split()

//****players assigned game roles
var inCharge;
var guessers;
var correct = [];
var incorrect = [];

//***the player inCharge provides answer
//the spaces from answer are removed, the remaining characters are joined together, displayed in an array output
var answer = prompt("Choose a word, phrase, or sentence for the game.").replace(/ /g, "").split('');


while(answer){
guessing();
  function guessing(){

  //***have guessers...guess answer
  var guess = prompt("What letter or number will you choose?");
  var count = 0;
  //var correct = [];
  //var incorrect = [];

  if( !(answer.includes(guess))){
    console.log("Nope, sorry.");
    incorrect.push(guess);
    count++;
    console.log(count);
    guessing();
    //move on to next player
    //if count reaches #, game over
  }
  else if(answer.includes(guess)){
    console.log("Correct! " + guess);
    //answer.remove(guess);
    correct.push(guess);
    console.log(correct);

    if(correct.length == answer.length){
      answer = false;
    }
    else{
          guessing();
    }
    //answer=false;
    //repeat question so this should be a function (CALL IT HERE!!!)
  }

  console.log("mega: " + correct);

  }

}
