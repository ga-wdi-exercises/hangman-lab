console.log("welcome to hangman");

var game = {
  word: "",
  guesses: 5,

  getWord: function(){
    this.word = window.prompt("Enter a word to begin the game.");
  },

  playGame: function(){
    getWord();
  }


};
