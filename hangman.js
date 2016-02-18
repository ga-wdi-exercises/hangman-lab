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
    hangmanWord1.push(userWord);
    //hangmanWord[0].split("");
  //hangmanWord.push(userWord.split(""));

}
function splitHMW1() {
   hangmanWord = hangmanWord1[0].split("")
  console.log(hangmanWord);
}

/*function updateGuessWordHere()  {
  for (var i = 0; i < hangmanWord.length; i++)
  {guessWordHere.push("-")}
  console.log(hangmanWord.length)
  console.log(guessWordHere)
}*/

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




/*function evalGuess() {

}*/


//let's run some functions!
getWord();
splitHMW1();
/*don't worry about this now: updateGuessWordHere();*/
getUserGuess();
evalGuess();
moveGuess();
