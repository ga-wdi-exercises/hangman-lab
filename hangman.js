alert("welcome to hangman");

//Need prompt for word
//create object
var hangman = {
  secretWord: prompt("Player 1 please type your secret word.", "Type word here."),

//split word into array.
  splitWord: function(){
    newWord = this.secretWord.split("");
    return newWord;
  },

  //print the number of letters to screen OR display dashes.
  blackSpaces: function(){
    //for each letter in hangman.splitWord replace with a dash.
    for(i=0; i<secretWord.length; i++){

    }
  }
};

//ask for guess
//iterate over word/array
//if letter in word, locate index and replace blank with letter
//display progress
//else no change
//display progress
// if hyphen exists ask again.
//else display 'you win'.

//functions include: displayProgress, checkProgress, updateProgress
