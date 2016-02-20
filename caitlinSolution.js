var game = {
  letters: [],
  guesses: [],
  lastGuess: "",
  display: "",
  wrongGuesses: 0,
  rightGuesses: 0,
  gameInProgress: true,
  word: "",
 // choose word -- make this into a prompt soon
  enterWord: function() {
    this.word = prompt("What word would you like to play?");

    this.splitWord();
  },

  // Split word into an array
  splitWord: function() {
    this.letters = this.word.split("");

    this.guessLetter();
  },
  // Take letter input & store input in guess array
  guessLetter: function() {
    while (this.gameInProgress === true) {
      var letter = prompt("What letter would you like to guess?");

      this.guesses.push(letter);

      this.lastGuess = letter;

      this.checkLetter();
    };

    if (this.rightGuesses === (this.word.length - 1)) {
      this.endGame();
    };
  },
  // Check guesses array with letters array
  checkLetter: function() {
    for (var i=0; i<this.word.length; i++) {
      if (this.guesses.includes(this.word[i])) {
        this.display = this.display + this.word[i] + " ";

        if (this.lastGuess === this.word[i]) {
          this.rightGuesses++;
        };

      this.endGame();
      } else {
        this.display = this.display + "_ ";

        this.endGame();
      };
    };

    if (this.lastGuess != this.word[i]) {
      this.wrongGuesses++;
    };

    this.guessLetter();
  },
  // End game if 5 wrong guesses or guesses.length === word.length
  endGame: function() {
      if (this.gameInProgress === true) {
        if (this.wrongGuesses === 5) {
          alert("Nice try! You lost. The word was " + this.word);

          this.gameInProgress = false;
        } else if (this.letters.length === this.rightGuesses) {
          alert("Nice! You won the game!");

          this.gameInProgress = false;
      };
    }
  }
};

game.enterWord();
