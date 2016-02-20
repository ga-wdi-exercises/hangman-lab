var game = {
  letters: [],
  guesses: [],
  lastGuess: "",
  display: "",
  wrongGuesses: 0,
  rightGuesses: 0,
 // choose word -- make this into a prompt soon
  word: "nick",

  // Split word into an array
  splitWord: function() {
    this.letters = this.word.split("");
  },
  // Take letter input & store input in guess array
  guessLetter: function() {
    while (this.rightGuesses <= this.word.length) {
      var letter = prompt("What letter would you like to guess?");

      console.log("right guesses before: " + this.rightGuesses);
      console.log("word length: " + this.word.length);

      this.guesses.push(letter);

      this.lastGuess = letter;

      this.checkLetter();
    };

    if (this.rightGuesses === this.word.length) {
      this.endGame();
    };
  },
  // Check guesses array with letters array
  checkLetter: function() {
    for (var i=0; i<this.word.length; i++) {
      if (this.guesses.includes(this.word[i])) {
        this.display = this.display + this.word[i] + " ";

        this.lastGuess = this.word[i];

        console.log(this.lastGuess);

        if (this.lastGuess.includes(this.word[i])) {
          this.rightGuesses++;
        };

        this.endGame();
      } else {
        this.display = this.display + "_ ";

        this.endGame();
      };
    };

    console.log(this.display);
    console.log("right guesses after: " + this.rightGuesses);
    this.guessLetter();
  },
  // End game if 5 wrong guesses or guesses.length === word.length
  endGame: function() {
    if (this.wrongGuesses === 6) {
      console.log("Nice try! You lost. The word was " + word);
    } else if (this.letters.length === this.rightGueses) {
      console.log("Nice! You won the game!");
    };
  }
}

game.splitWord();
game.guessLetter();
