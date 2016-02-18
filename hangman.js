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

  //display a prompt console.log(indexLetters)
  // var blankWord = prompt("Guess a letter.\n" + console.log(indexLetters[0]) + "\nYou have 6 guesses remaining.");
  playGame: function() {
    game.getSecretWord();
    game.secretIndex();
  }
}

game.playGame();
