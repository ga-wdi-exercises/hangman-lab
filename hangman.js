
var hangman = {
  word: "",
  letter: "",
  newWord: "",
  welcome: alert("welcome to hangman"),
  displayDashes: [],


  secretWord: function(){
    this.word = prompt("Player 1 please type your secret word.", "Type word here.").toLowerCase();
    return this.word;
  },

  //split word into array.
  splitWord: function(){
    this.newWord = this.word.split("");
  },

  //print the number of letters to screen OR display dashes.
  blankSpaces: function(){
    //for each letter in hangman.splitWord replace with a dash.
    for(i=0; i<this.word.length; i++){
      this.displayDashes.push("-");
    }
  },


  //ask for guess
  guessLetter: function(){
    this.letter = prompt("Please guess a letter Player2").toLowerCase();
  },


  //iterate over word/array
  compareToWord: function(){
    //compare newWord to letter to guess
      countAttempts = 6;
      while(countAttempts > 0){
      if(this.newWord.includes(this.letter)){
        for(var i = 0; i<this.newWord.length; i++){
        //I want to replace a "-"" with a letter
        if(this.newWord[i] === this.letter){
        this.displayDashes[i] = this.letter;
        }
      }

        alert(this.displayDashes);
          if(this.displayDashes.includes("-")){
            hangman.guessLetter();
            hangman.compareToWord();
          }
          else{
            alert("You win!");
          }
      }else{
        countAttempts -= 1;
        alert("sorry that letter is not in the word." + "\n" + this.displayDashes + "\n" + "Attempts left = " + countAttempts);
        hangman.guessLetter();
        hangman.compareToWord();
        if(countAttempts === 0){
          alert("You ran out of attempts. You lose. HANGMAN!");
        }else{
          hangman.guessLetter();
          hangman.compareToWord();
      }
    }
    }
  },

  startGame: function(){
    this.secretWord();
    this.splitWord();
    this.blankSpaces();
    this.guessLetter();
    this.compareToWord();

  },

  replyGame:function(){
    alert("");
  }
};

hangman.startGame();
