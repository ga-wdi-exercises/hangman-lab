var game = {
  lettersInWord: [],
  misses: [],
  correct: [],

  // BONUS 2
  showMenu: function () {
    var option = prompt("Welcome to Hangman!\n\n[1] Play Game\n[2] How To Play\n[3] Quit");
    if (option == 1) {
      this.newGame();
    } else if (option == 2) {
      alert("Hangman is a guessing game where one player thinks of a word and a second player attempts to guess that word in seven (or less) guesses buy suggesting letters.\n\nPlayer 1 will enter a word into the appropriate prompt and the remaining player will enter guesses one letter at a time.\n\nThe game will end when either Player 2 correctly guesses the word or 'The Hangman' is drawn completely.");
      this.showMenu();
    }
  },

  getANewWord: function () {
    var word = prompt("Player 1: Give a word to guess:");
    this.lettersInWord = word.split("");
    console.log(this.lettersInWord);
  },

  createCorrectBlanks: function () {
    var self = this;
    this.lettersInWord.forEach(function () {
      self.correct.push("_");
    });
  },

  getGuesses: function () {
    var parts = ["( )", "\n\\", "|", "/", "\n | \n", "/ ", "\\"];
    var man = "";
    while (this.misses.length < 7) {
      var guess = prompt("Guess:");
      if (this.lettersInWord.includes(guess)) {
        var wordIndex = this.lettersInWord.indexOf(guess);
        this.correct[wordIndex] = guess;
        if (this.detectWinner()) {
          alert("You Win!!\nThe word was '" + this.lettersInWord.join("") + "'");
          break;
        }
      } else {
        this.misses.push(guess);
        man += parts[this.misses.length - 1];
      }
      console.log("Correct: " + this.correct);
      console.log("Misses: " + this.misses);
      console.log(man);
    }
    if (this.misses.length === 7) {
      alert("You Lose!\n" + man);
    }
  },

  detectWinner: function () {
    if (this.correct.join("") === this.lettersInWord.join("")) {
      return true;
    } else {
      return false;
    }
  },

  newGame: function () {
    this.lettersInWord = [];
    this.misses = [];
    this.correct = [];
    this.getANewWord();
    this.createCorrectBlanks();
    alert("Ok Player 2: Time to guess");
    this.getGuesses();
    // BONUS 1
    var playAgain = prompt("Would you like to play again? (Y/N)");
    playAgain = playAgain.toLowerCase();

    if (playAgain === "y" || playAgain === 'yes') {
      game.newGame();
    }
  }
};

game.showMenu();
