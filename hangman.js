console.log("welcome to hangman");
var game = {
  secretLetters: [],
  indexLetters: [],
  //guessedLetters: [],
  matchingLetters: [],
  guess: [],
  wrongGuesses: [],

  getSecretWord: function() {
    //prompt user for secret word
    secretWord = prompt("Please enter your secret word.");
    //split secret word into array of letters
    game.secretLetters = secretWord.split("");
    console.log(game.secretLetters);

  },

  secretIndex: function() {
    //for secretLetters.length, create new array ["_", "_"]
    for (var i = 0; i < game.secretLetters.length; i++) {
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

  guessLetter: function(){
      while (game.wrongGuesses.length < 10) {
        var playerGuess = prompt("You have made " + (game.wrongGuesses.length) + " incorrect guesses out of 10. Please guess a letter -- or type STOP to stop the game.");
          if (playerGuess == "STOP" || playerGuess == "stop"){
          break;
          } else if (game.secretLetters.indexOf(playerGuess) >= 0) {
            alert(playerGuess + " is in the secret word!");
            //game.guesses.push(playerGuess);
            console.log(game.secretLetters.indexOf(playerGuess) >= 0);
          } else if (game.secretLetters.indexOf(playerGuess) === -1){
            alert(playerGuess + " is not in the secret word!");
            game.wrongGuesses.push(playerGuess);
          }
      }
    },




  // inputLetter: function() {
  //   //display prompt window with blanks. ask user to guess a letter.
  //   //log guessed letters into an array.
  //   var max = 5;//will change this value later
  //   for (var j = 0; j < max; j++) {
  //     guessLetter = prompt("Guess a letter.\n\n" + game.indexLetters + "\n\nYou have X guesses remaining.");
  //     game.guessedLetters.push(guessLetter);
  //     console.log(game.guessedLetters);
  //     stringGuesses = game.guessedLetters.toString();
  //     console.log(stringGuesses)
  //   }
  // },
  //
  // compareLeters: function() {
  //
  //   var matchLetters = game.secretLetters.indexOf(stringGuesses);
  //   while (matchLetters != -1) {
  //     game.matchingLetters.push(matchLetters);
  //     matchLetters = game.secretLetters.indexOf(stringGuesses + 1);
  //   }
  //   console.log(game.matchingLetters);// [0, 2, 4]
  // },


    //create function to compare if guessedLetters match string in secretWord


    //start guesses at 6 and decrease by 1 for each incorrect answer.
    //if prompt input matches a value of secretLetters, replace an indexLetters "_" with matching letter.
    //if prompt input does not match a value of secretLetters, indexLetters remains the same and guessesRemaining decreases in value by 1.

  playGame: function() {
    game.getSecretWord();
    game.secretIndex();
    game.showBlanks();
    game.guessLetter();
    // game.inputLetter();
    // game.compareLeters();
  }
}

game.playGame();
