var head = "___________\n |/       |\n |       (_)\n |\n |\n |\n |\n |____";
var neck = "___________\n |/       |\n |       (_)\n |        |\n |\n |\n |\n |____";
var body = "___________\n |/       |\n |       (_)\n |        |\n |        |\n |\n |\n |____";
var arm1 = "___________\n |/       |\n |       (_)\n |       \\|\n |        |\n |\n |\n |____";
var arm2 = "___________\n |/       |\n |       (_)\n |       \\|/\n |        |\n |\n |\n |____";
var leg1 = "___________\n |/       |\n |       (_)\n |       \\|/\n |        |\n |       /\n |\n |____";
var leg2 = "___________\n |/       |\n |       (_)\n |       \\|/\n |        |\n |       / \\\n |\n |____";

var game = {
  lettersInWord: [],
  misses: [],
  correct: [],
  man: "",
  parts: [head, neck, body, arm1, arm2, leg1, leg2],

  showMenu: function() {
    var option = prompt("Welcome to Hangman!\n\n[1] Play Game\n[2] How To Play\n[3] Quit");
    if (option == 1) {
      this.newGame();
    } else if (option == 2) {
      alert("Hangman is a guessing game where one player thinks of a word and a second player attempts to guess that word in seven (or less) guesses buy suggesting letters.\n\nPlayer 1 will enter a word into the appropriate prompt and the remaining player will enter guesses one letter at a time.\n\nThe game will end when either Player 2 correctly guesses the word or 'The Hangman' is drawn completely.");
      this.showMenu();
    }
  },

  getANewWord: function() {
    var word = prompt("Player 1: Give a word to guess:");
    this.lettersInWord = word.split("");
  },

  createCorrectBlanks: function() {
    var self = this;
    this.lettersInWord.forEach(function () {
      self.correct.push("_");
    });
  },

  getsCorrectLetters: function(guess) {
    if (!this.lettersInWord.includes(guess)) {
      this.misses.push(guess);
      this.man = this.parts[this.misses.length - 1];
    } else {
      for (var i = 0; i < this.lettersInWord.length; i++) {
        if (guess === this.lettersInWord[i]) {
          this.correct[i] = guess;
        }
      }
    }
    console.log("Correct: " + this.correct);
    console.log("Misses: " + this.misses);
    console.log(this.man);
  },

  getGuesses: function() {
    while (this.misses.length < 7) {
      var guess = prompt("Guess:");
        if (this.correct.includes(guess) || this.misses.includes(guess)) {
          alert("You already guessed that letter!\nGuess again!");
          continue;
        }
        this.getsCorrectLetters(guess);
        if (this.detectWinner()) {
          alert("You Win!!\nThe word was '" + this.lettersInWord.join("") + "'");
          break;
        }
    }
    if (this.misses.length === 7) {
      alert("You Lose!\n" + this.man);
    }
  },

  detectWinner: function() {
    if (this.correct.join("") === this.lettersInWord.join("")) {
      return true;
    } else {
      return false;
    }
  },

  newGame: function() {
    this.lettersInWord = [];
    this.misses = [];
    this.correct = [];
    this.getANewWord();
    this.createCorrectBlanks();
    alert("Ok Player 2: Time to guess");
    this.getGuesses();
    var playAgain = prompt("Would you like to play again? (Y/N)");
    playAgain = playAgain.toLowerCase();
    if (playAgain === "y" || playAgain === 'yes') {
      game.newGame();
    }
  }
};

game.showMenu();
