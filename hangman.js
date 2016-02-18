//Test area
console.log("welcome to hangman");
alert("Hello!");


//Do I want to create an object?



var secretWord;
var playerGuess;
var score = [];
var incorrectGuesses = 5;

//Prompt player1 to enter their secret word
var startGame = function() {
  secretWord = prompt("Please enter the secret word.");
  secretWord=secretWord.split("");
  console.log(secretWord);
};
//The secret word needs to be an array with indexes for each invidual letter
//Take input text and convert to array with each letter as an index.


//Prompt player2 to guess letter
  //This window should show dashes that correspond to the number of letters in the secret word.  It should also keep track of the amount of incorrect guesses remaining (begin with 5).
  //Player2 inputs letter
var playerTurn = function() {
    playerGuess = prompt("Guess a letter." + score + incorrectGuesses);
for (i = 0; i < secretWord.length; i ++) {
    if (playerGuess === secretWord[i]) {
        score[i] = playerGuess;

    }
    else {
        score[i] = "_";
        incorrectGuesses = incorrectGuesses - 1;
    }
    }

  console.log(score);
  }





startGame();
while(score !== secretWord) {
    playerTurn();
}




//If the letter entered by player2 is in the secret word:
  //Prompt player2 to guess letter
    //  -replace all the dashes that correspond with that letter with that letter.
    //  -keep incorrect guess tally at same number
//  -repeat guess letter prompt.

//Else If the letter entered by player2 is not in the secret word:
  //Prompt player2 to guess letter
    //  -all dashes representing secret word should remain dashes
    //  -reduce incorrect guess tally by 1
//  -repeat guess letter prompt

//If player2 guesses secret word (all dashes are removed)
  //alert "Congratulations, player2 wins!"

//If player2 does not guess secret word (guesses remaining = 0)
  //alert "Sorry, player2 loses"
