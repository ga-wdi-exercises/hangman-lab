var game = {
  letters: [],
  guesses: [],
  wrongGuesses: 0,

  // need to split the word into an array
  splitWord: function() {
    var initialWord = prompt("What word would you like to enter?");

    letters = initialWord.split("");
  },
  // need to create a new array with all letters as blanks
  // blankArray: function() {
  //   letters.forEach(function(letter) {
  //     game.blanks.push();
  //   });
  // },
  // need to take a guess and check it with the index of the finalWord array
  guessLetter: function() {
    var guess = prompt("What letter would you like to guess?");
    var correct = letters.includes(guess);

    // need to compare the guessed letter to all the values in the finalWord loop

    if (correct === true) {
      letters.forEach(function(letter) {
        if (letter === guess) {
          // alert("Nice! This spot has a " + guess);

          game.guesses.push(guess);

        // need to create a new array with the correct letter guessed or _ if wrong

        } else {
          game.guesses.push("_");
        };
      });

      alert("Nice! You got it. Here are your letters so far: " + game.guesses);
    } else {
      alert("Sorry, try again!");

      // need to store all wrong guesses in wrongGuesses and incremement by 1
      return game.wrongGuesses++;
    };
  },

  // need to end the game if wrongGuesses reached 5

  // need to alert the player when all letters have been guessed

  // need to ask to play again
}

game.splitWord();
game.guessLetter();
