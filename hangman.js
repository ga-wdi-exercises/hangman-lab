console.log("welcome to hangman");
var parts = ["( )", "\n\\", "|", "/", "\n | \n", "/ ", "\\"];
var man = "";

var game = {
  lettersInWord: [],
  misses: [],
  correct: [],

  getANewWord: function () {
    var word = prompt("Player 1: Give a word to guess:");
    this.lettersInWord = word.split("");
    console.log(this.lettersInWord);
  },

  createCorrect: function () {
    var self = this;
    this.lettersInWord.forEach(function () {
      self.correct.push("_");
    });
  },

  getGuesses: function () {
    var guess;
    while (this.misses.length < 7) {
      guess = prompt("Guess:");
      if (this.lettersInWord.includes(guess)) {
        var wordIndex = this.lettersInWord.indexOf(guess);
        this.correct[wordIndex] = guess;
        console.log("Correct: " + this.correct);
      } else {
        this.misses.push(guess);
        man += parts[this.misses.length - 1];
        console.log("Misses: " + this.misses);
        console.log(man);
      }
    }
  },

  // drawMan: function () {
  //   var self = this;
  //   this.misses.forEach(function (i) {
  //     var place = self.misses;
  //     man += parts[place];
  //   });
  //   console.log(man);
  // },

  playGame: function () {
    this.getANewWord();
    this.createCorrect();
    alert("Ok Player 2: Time to guess");
    this.getGuesses();
  }

};

game.playGame();
