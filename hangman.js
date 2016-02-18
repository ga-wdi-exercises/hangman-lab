console.log("welcome to hangman");
var game = {
  //secretLetters: [],
  //indexLetters: ["_"],

  getSecretWord: function() {
    //prompt user for secret word
    secretWord = prompt("Please enter your secret word.");
    //split secret word into array of letters
    secretLetters = secretWord.split("");
    console.log(secretLetters);

  },

  secretIndex: function() {
    //for secretLetters.length, create new array ["_", "_"]
    for (var i = 0; i < secretLetters.length; i++) {
      indexLetters = ["_"];
      indexLetters.push(); //this creates a subarray of _'s.
      console.log(indexLetters);
      //console.log(indexLetters.length);
      //console.log(secretLetters);
    }

  },

  showBlanks: function() {
    //display a prompt of console.log(indexLetters)
    blankWord = prompt("Your word is now a secret.\n" + indexLetters[0] + "\n\n Please press 'return' or click 'OK' to continue game.");
  },

  guessLetter: function() {
    //display prompt window with blanks. ask user to guess a letter.
    blankWord = prompt("Guess a letter.\n" + indexLetters[0] + "\nYou have X guesses remaining.");

    //create a guesses function.
    //start guesses at 6 and decrease by 1 for each incorrect answer.
    //if prompt input matches a value of secretLetters, replace an indexLetters "_" with matching letter.
    //if prompt input does not match a value of secretLetters, indexLetters remains the same and guessesRemaining decreases in value by 1. 

  },

  playGame: function() {
    game.getSecretWord();
    game.secretIndex();
    game.showBlanks();
    game.guessLetter();
  }
}

game.playGame();
