console.log("welcome to hangman");
/*Pseudocode
input word for user to guess
split word into letters for array

ask user for one letter input
compare letter to the word for hangman
  (contained in array)
if letter is not contained, add a body part to hangman (strike to the player)
  total strikes = 6 (head, torso, right arm, left arm, right leg, left leg (dead))
    ^this also looks like an array
if it's contained in the original word array, place it in the correct position*/

//once first prompt runs, user word goes into hangmanWord array
var hangmanWord1 = []
var hangmanWord = []
var guessWordHere = [];
var currentGuess = [];
var correctGuesses = [];
var incorrectGuesses = 0;

//this function gets the word for the game



function getWord() {userWord = prompt("Welcome to hangman, please input a word for other user to guess:");
hangmanWord1.push(userWord)}

//var getWord = prompt("Welcome to hangman, please input a word for other user to guess:")
//hangmanWord1.push(getWord);
function splitHMW1() {
   hangmanWord = hangmanWord1[0].split("")
  console.log(hangmanWord);
}


//this function should get user guesses
var getUserGuess = function() {userGuess = prompt("Please input one letter below");
console.log("You guessed: " + userGuess);
currentGuess.push(userGuess);
console.log(currentGuess)}

//this function should evaluate the user guess.

function evalGuess() {
  for (var i = 0; i < hangmanWord.length; i++) {
      if (hangmanWord[i] === userGuess) {
        return status = "found"
        break;
        }
        else {status = "not found"
        }
    }
};
function moveGuess() {
  if (status == "not found") {
    incorrectGuesses = incorrectGuesses+1;
  }}

getWord();
splitHMW1();

while (incorrectGuesses < 5) {
  getUserGuess();
  evalGuess();
  moveGuess();
}

if (incorrectGuesses = 5)
{alert("Game over, you have hanged the hangman :(")}

//let's run some functions!

// getUserGuess();
// evalGuess();
// moveGuess();
