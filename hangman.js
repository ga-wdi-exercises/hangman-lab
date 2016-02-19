var game = {
  letters: [],
  guesses: [],
  wrongGuesses: 0,
  playerScore: 0,
  gameInProgress: true,
  word: "",

  // need to split the word into an array
  splitWord: function() {
    this.word = prompt("What word would you like to enter?");

    this.letters = this.word.split("");
  },

  guessLetter: function() {

    var guess = prompt("What letter would you like to guess?");
    var correct = this.letters.includes(guess);

    if (correct === true && game.gameInProgress === true) {
      this.letters.forEach(function(letter,i) {
        if (letter === guess) {
          console.log("correct guess", guess);
          game.guesses[i] = guess;

          game.playerScore++;
          console.log(game.playerScore);

          alert("Nice! You got it. Here are your letters so far: " + game.guesses);

          game.endGame();
        }
      });
    } else if (correct === false && game.gameInProgress === true){
      alert("Sorry, try again!");

      // need to store all wrong guesses in wrongGuesses and incremement by 1
      game.wrongGuesses++;

      game.endGame();

      console.log(game.wrongGuesses);
    } else if (game.gameInProgress === false) {
      game.endGame();
    };
  },

  // start game using guessed letter and continue until wrong guesses = 5 or all letters are guessed
  startGame: function() {
    while (game.gameInProgress === true) {
      this.guessLetter();
    };
  },

  endGame: function() {
    if (this.playerScore === this.letters.length) {
      game.gameInProgress = false;
      alert("Awesome! You won the game! The answer was " + this.word + ".");
    } else if (game.wrongGuesses === 5) {
      game.gameInProgress = false;
      alert("Game over! Nice, try. The answer was " + this.word + ".");
    };
  }
};

game.splitWord();
game.startGame();
