console.log("welcome to hangman");
/*Pseudocode
input word for user to guess
split word into letters for array
ask user for one letter input
compare letter to the word for hangman
  (contained in array)
if letter is not contained, add a body part to hangman (strike to the player)
  total strikes = 5
if it's contained in the original word array, place it in the correct position*/

//once first prompt runs, user word goes into hangmanWord array
var hangmanWord = [];
var displayHM = [];
var incorrectGuesses = 0;
var remainingGuesses = 0;

//this function gets the word for the game
function getWord() {userWord = prompt("Welcome to hangman, please input a word for other user to guess:");
remainingGuesses = userWord.length;
hangmanWord.push(userWord)
displayHM.push(userWord)}

//var mask = function() {hangmanWord.replace(/./g, "-");}

//splitting function
function splitHMW() {
   hangmanWord = hangmanWord[0].split("");
   displayHM = displayHM[0].split("");
  console.log(hangmanWord);
  console.log(displayHM);
}

//attempted to make the "replace letters" alert below, currently not working
//displayHM.forEach(letter) {
//  replace(/./g, "-")}

getWord();
splitHMW();
//this function doesn't run:
//removeLetters();

//this function gets user guesses
var getUserGuess = function() {userGuess = prompt("Please input one letter below");
console.log("You guessed: " + userGuess);}
getUserGuess();


//this function should evaluate the user guess.
function evalGuess() {
      if (hangmanWord.includes(userGuess))
        {status = "found";
        alert("letter found!");
        }
        else {
          status = "not found";
        alert("letter not found");
        }
    }

//continues to evaluate status from evalGuess function
function moveGuess() {
  if (status == "found") {
    remainingGuesses = remainingGuesses-1;
    alert("You have "+remainingGuesses+" letters remaining")
  }
  else if (status == "not found") {
    incorrectGuesses = incorrectGuesses+1;
    alert("You have "+ (5 - incorrectGuesses) + " strikes remaining.")
  }
}

//while loop to determine end of game
while (incorrectGuesses < 5 && remainingGuesses > 0) {
  getUserGuess();
  evalGuess();
  moveGuess();
}

//should determine final message displayed - currently broken, each outcome displays game over message as of now
if (remainingGuesses = 0) {alert("YOU WIN!")}
else if (incorrectGuesses = 5)
{alert("Game over, you have hanged the hangman :(")}*/
