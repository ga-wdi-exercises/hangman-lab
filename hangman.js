console.log("welcome to hangman");
// var parts = ["( )", "\n\\", "|", "/", "\n | \n", "/ ", "\\"];
// var man = "";

var game = {
  lettersInWord: [],
  misses: [],
  correct: [],

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

game.newGame();
