
var hangman = {
  word: "",
  splitWord: [],
  displayWord: [],
  currentGuess: [],
  spliceNum: [],

  getWord: function(){
    this.word = prompt("Enter the word you want the other player to guess").toLowerCase();
    this.splitWord = this.word.split("");
  },

  displayProgress: function(){
    for (i = 0; i < this.splitWord.length; i++) {
      this.displayWord.push(["-"]);
    }
  },

  getGuess: function() {
    this.currentGuess = prompt("Enter a letter").toLowerCase();
  },

  checkGuess: function() {
    if (this.currentGuess in this.splitWord) {
      var index = this.splitWord.indexOf(this.currentGuess);
      this.splitWord[index] = this.currentGuess;
      if ("-" in this.splitWord) {
        getGuess();
        }
        else {
          alert("You win!");
        }}
    else {
        alert("That letter not in the secret word.")
        getGuess();
      }
    }
  }



hangman.getWord();
hangman.displayProgress();
hangman.getGuess();
hangman.checkGuess();
