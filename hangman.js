var game = {
  letters: [],
  guesses: [],
  wrongGuesses: 0,
  playerScore: 0,
  word: "",

  // need to split the word into an array
  splitWord: function() {
    this.word = prompt("What word would you like to enter?");

    this.letters = this.word.split("");
  },

  guessLetter: function() {
    var guess = prompt("What letter would you like to guess?");
    var correct = this.letters.includes(guess);
    if (correct) {
      this.letters.forEach(function(letter,i) {
        if (letter === guess) {
          // alert("Nice! This spot has a " + guess);

          game.guesses[i] = guess;

          this.playerScore++;

          // need to create a new array with the correct letter guessed or _ if wrong

        };
      });
      alert("Nice! You got it. Here are your letters so far: " + game.guesses);
    } else {
      alert("Sorry, try again!");

      // need to store all wrong guesses in wrongGuesses and incremement by 1
      return game.wrongGuesses++;
    };
  },

  // start game using guessed letter and continue until wrong guesses = 5 or all letters are guessed
  startGame: function() {
    while (this.playerScore <= this.letters.length && this.wrongGuesses <= 5) {
      this.guessLetter();
    };

    alert("Game over! Nice, try. The answer was " + this.word);

    return;
  }

  // need to end the game if wrongGuesses reached 5

  // need to alert the player when all letters have been guessed

  // need to ask to play again
}

game.splitWord();
game.startGame();
