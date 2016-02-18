console.log("welcome to hangman");
var game = {
  //secretLetters: [],
  indexLetters: ["_"],

  getSecretWord: function() {
    //prompt user for secret word
    var secretWord = prompt("Please enter your secret word.");
    //split secret word into array of letters
    var secretLetters = secretWord.split("");
    console.log(secretLetters);

  },

  secretIndex: function() {
    for (var i = 0; i < secretLetters.length; i++) {
      //var indexLetters = ["_"];
      indexLetters.push(); //this creates a subarray of _'s.
      console.log(indexLetters);
      //console.log(indexLetters.length);
      //console.log(secretLetters);
    }

  },

  //create array of _ that matches length of secretWord
  //display a prompt console.log(indexLetters)
  // var blankWord = prompt("Guess a letter.\n" + console.log(indexLetters[0]) + "\nYou have 6 guesses remaining.");
  playGame: function() {
    game.getSecretWord();
    game.secretIndex();
  }
}

game.playGame();
