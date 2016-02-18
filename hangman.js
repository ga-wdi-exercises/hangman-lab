var game = {
  word: [],
  hidden: [],
  guesses: 5,

  getWord: function(){
    var temp = window.prompt("Have someone enter a secret word for you to begin the game.");
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

  indexesOf: function(myLetter)
  {
    var indexes = [];
    for(var i = 0; i < this.word.length; i++)
    {
        if(this.word[i] == myLetter)
        {
            indexes.push(i);
        }
    }
    return indexes;
  },

  playRound: function(){
    var self = this;
    var answer = this.getGuess();
    var goodGuess = false; // There's got to be a better way to do this
    this.word.forEach(function(letter)
    {
      if(letter == answer)
      {
        var indexes = self.indexesOf(letter);

        indexes.forEach(function(index)
        {
          self.hidden[index] = letter;
        });
        goodGuess = true;
      }
    });

    if(!goodGuess)
    {
      this.guesses--;
      window.alert("Nope! Try again!");
      return false;
    }
    else
    {
      window.alert("Good job! You got it!");
      return this.checkWin();
    }
  },

  playGame: function(){
    var win = false;
    this.getWord();
      while(this.guesses > 0 && !win)
      {
        win = this.playRound();
      }

      if(win)
      {
        window.alert("Congrats you won! The word was: " + this.hidden.join(""));
      }
      else
      {
        window.alert("Sorry, you lose. The word was: " + this.word.join(""));
      }
      // reset game
      win = false;
      this.guesses = 5;
      this.startGame();
  },

  showRules: function(){
    window.alert("1. Have a friend enter a word\n2. Choose letters to guess the word.\n3. You have 5 tries");

    var menu = window.prompt("Return to menu? Press Y for yes");

    if(menu == "Y" || menu == "y")
    {
      this.startGame();
    }
  },

  startGame: function(){
    var choice = window.prompt("Welcome to Hangman!" +
    "\n1. Play Game\n2. Help / How To Play\n3. Quit");
    console.log(choice);

    if(choice == 1)
    {
      this.playGame();
    }
    else if(choice == 2)
    {
      this.showRules();
    }
    else
    {
      window.alert("Thanks for playing!");
    }

  }
};

game.startGame();
