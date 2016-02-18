console.log("welcome to hangman");

var game = {
  word: [],
  hidden: [],
  guesses: 5,

  getWord: function(){
    var temp = window.prompt("Enter a word to begin the game.");
    this.word = temp.split("");
    this.hidden = Array(this.word.length).fill("-");
  },

  getGuess: function(){
    var message = "Word: " + this.hidden.join("");
    message += "\nYou have " + this.guesses + " guesses.";
    message += "\nEnter a letter.";

    return window.prompt(message);
  },

  checkWin: function(){
    if(this.word.toString() == this.hidden.toString())
    {
      return true;
    }
  },

  playRound: function(){
    var self = this;
    var answer = this.getGuess();
    var goodGuess = false; // There's got to be a better way to do this
    this.word.forEach(function(letter)
    {
      if(letter == answer)
      {
        self.hidden[self.word.indexOf(letter)] = letter;
        goodGuess = true;
      }
    });

    if(!goodGuess)
    {
      this.guesses--;
      return false;
    }
    else
    {
      return this.checkWin();
    }
  },

  playGame: function(){
    var win = false;
    this.getWord();
    while(this.guesses >0 && !win)
    {
      win = this.playRound();
    }

    if(win)
    {
      window.alert("Congrats you won! The word was: " + this.hidden.join(""));
    }
    else
    {
        console.log("Sorry, you lose The word was: " + this.word.join(""));
    }
    // display blank string &
    // prompt user for first guesses
    // if correct, add letter to blank string
    // else subtract from number of guesses
    // repeat until...

    // if all letters guessed, display win and word
    // else if run out of guesses, display lose
  }
};

game.playGame();
