console.log("welcome to hangman");
var game = {
  //secretLetters: [],
  indexLetters: [],
  guessedLetters: [],

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
      var blankLetter = " _ ";
      game.indexLetters.push(blankLetter);
      console.log(game.indexLetters);
      //console.log(indexLetters.length);
      //console.log(secretLetters);
    }

  },

  showBlanks: function() {
    //display a prompt of console.log(indexLetters)
    blankWord = alert("Your word is now a secret.\n\n" + game.indexLetters + "\n\n Please press 'return' or click 'OK' to continue game.");
  },

  guessLetter: function() {
    //display prompt window with blanks. ask user to guess a letter.
    //log guessed letters into an array.
    var max = 5;
    for (var j = 0; j < max; j++) {
      guessLetterStart = prompt("Guess a letter.\n\n" + game.indexLetters + "\n\nYou have X guesses remaining.");
      game.guessedLetters.push(guessLetterStart);
      console.log(game.guessedLetters);
    }



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
