var game = {
  letters: [],
  blanks: [],

  // need to split the word into an array
  splitWord: function() {
    var initialWord = prompt("What word would you like to enter?");

    letters = initialWord.split("");
  },
  // need to create a new array with all letters as blanks
  blankArray: function() {
    while (i < letters.length) {
      game.blanks.push("-");
    }
  },
  // need to take a guess and check it with the index of the finalWord array
  guessLetter: function() {
    var guess = prompt("What letter would you like to guess?");
  },

  // need to compare the guessed letter to all the values in the finalWord loop

  // need to replace all index values that have the guessed letter with the letter itself

  // need to store all wrong guesses in incorrectGuesses and incremement by 1

  // need to end the game if incorrectGuesses reached 5

  // need to alert the player when all letters have been guessed

  // need to ask to play again
}

game.splitWord();
game.guessLetter();
