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

var hangmanWord = []
var correctGuesses = [];
var incorrectGuesses = [];
function getWord() {userWord = prompt("Welcome to hangman, please input a word for other user to guess:").toUpperCase();
  hangmanWord.push(userWord.split(''));
  console.log(hangmanWord);
}
function getUserGuess() {var userGuess = prompt("Please input one letter below").toUpperCase();
console.log("You guessed: " + userGuess);}
getWord();
/*function evalGuess() {

}*/
