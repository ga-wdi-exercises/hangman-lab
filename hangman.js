
var hangman = {
  word: "",
  letter: "",
  newWord: "",
  welcome: alert("welcome to hangman"),
  displayDashes: [],
  counterAttempts: 6,

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
    while(this.counterAttempts > 0){
      if(this.newWord.includes(this.letter)){
        for(var i = 0; i<this.newWord.length; i++){
          if(this.newWord[i] === this.letter){
          this.displayDashes[i] = this.letter;
          }
        }
        alert(this.displayDashes);
          if(this.displayDashes.includes("-")){
            this.guessLetter();
            this.compareToWord();
          }
          else{
            alert("You win!");
          }
      }else{
        alert("sorry that letter is not in the word." + "\n" + this.displayDashes);
        hangman.counterAttempts -= 1;
        console.log(hangman.counterAttempts);
        hangman.guessLetter();
        hangman.compareToWord();
      }
    }
    //infinite loop occurs after adding this snippet.
    if(this.counterAttempts === 0){
    alert("You have no more attempts. Sorry you lose.");
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
