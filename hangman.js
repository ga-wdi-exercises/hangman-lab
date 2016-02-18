console.log("welcome to hangman");

var game = {
  word: [],
  hidden: "",
  guesses: 5,

  getWord: function(){
    var temp = window.prompt("Enter a word to begin the game.");
    this.word = temp.split("");
  },



  playGame: function(){
    this.getWord();
    // display blank string
    // prompt user for first guesses
    // if correct, add letter to blank string
    // else subtract from number of guesses
    // repeat until...

    // if all letters guessed, display win and word
    // else if run out of guesses, display lose
  }
};

game.playGame();
