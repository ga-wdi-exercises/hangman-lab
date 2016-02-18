
var hangman = {
  word: "",
  splitWord: [],
  displayWord: [],
  currentGuess: [],

  getWord: function(){
    this.word = prompt("Enter the word you want the other player to guess").toLowerCase();
    this.splitWord = this.word.split("");
    this.displayProgress();
  },

  displayProgress: function(){
    for (i = 0; i < this.splitWord.length; i++) {
      this.displayWord.push("_");
    }
    this.checkGuess();
  },
  checkGuess: function() {
    guessCounter = 5;
    while (this.displayWord.indexOf("_") >= 0) {
      this.currentGuess = prompt("Enter a letter." + this.displayWord).toLowerCase();
      if (this.splitWord.indexOf(this.currentGuess) >= 0) {
        var index = this.splitWord.indexOf(this.currentGuess);
        this.displayWord[index] = this.currentGuess;
      }
      else {
        guessCounter -= 1;
        alert("That letter not in the secret word. You have" + guessCounter + " guesses left.");
      }
    }
    }
  };

hangman.getWord();
