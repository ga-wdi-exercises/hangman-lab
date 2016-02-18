console.log("welcome to hangman");

//LATER: ask for number of players
//LATER: get player names| can use .split()

//****players assigned game roles
var inCharge;
var guessers;

//***the player inCharge provides answer
//the spaces from answer are removed, the remaining characters are joined together, displayed in an array output
var answer = prompt("Choose a word, phrase, or sentence for the game.").replace(/ /g, "").split('');

guessing();
function guessing(){
while(answer){

  //***have guessers...guess answer
  var guess = prompt("What letter or number will you choose?");
  var count = 0;

  if( !(answer.includes(guess))){
    console.log("Nope, sorry.");
    count++;
    //move on to next player
  }
  else if(answer.includes(guess)){
    console.log("Correct!");
    answer=false;
    //repeat question so this should be a function (CALL IT HERE!!!)

  }
}
}
