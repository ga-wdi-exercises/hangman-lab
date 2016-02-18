


var hangman = {
  word: "",
  splitWord: [],
  displayWord: [],

  getWord: function(){
    this.word = prompt("Enter the word you want the other player to guess");
    this.splitWord = this.word.split("");
  },

  displayProgress: function(){
    for (i = 0; i < this.splitWord.length; i++) {
      this.displayWord.push(["-"]);
    }
  },


  getGuess: function() {

  }

}


hangman.getWord();
hangman.displayProgress();
