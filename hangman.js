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
var hangmanWord = []
var correctGuesses = [];
var incorrectGuesses = [];

//this function gets the word for the game
function getWord() {userWord = prompt("Welcome to hangman, please input a word for other user to guess:").toUpperCase();
  hangmanWord.push(userWord.split(''));
  console.log(hangmanWord);
}

//this function should get user guesses
function getUserGuess() {var userGuess = prompt("Please input one letter below").toUpperCase();
console.log("You guessed: " + userGuess);}


/*  for (var i = 0; i < hangmanWord.length; i++) {
    console.log(hangmanWord.indexOf(userGuess))
    if (hangmanWord.indexOf(userGuess) > -1) {
      console.log("found it")
    } else {console.log("not there")}}};
*/

    //if (userGuess === hangmanWord[i]) {console.log("You guessed correctly!")}
    //else {console.log("WRONG!")}
    //}
  //}



/*function evalGuess() {

}*/


//let's run some functions!
getWord();
getUserGuess();
