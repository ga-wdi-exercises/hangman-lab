//I want the game to start by prompting the user to input their name

//Then I want the player to type in the secret word

//Next I want the player to start guessing the word using letters

//Each time the player guesses a letter I want to record that letter and show if they guessed the right letter or the wrond letter

//If the player guessed right: show where the letter is placed inside of the secret word

//If the player guessed wrong: alert "Wrong letter. Pick again." + start counting how many letters the player guessed wrong

//If the player guesses wrong 6 times the game is over. Else keep playing until incorrectGuesses reaches 6

//If the player guesses the correct secret word alert "Game over. You Win!" and end the game


//var userGuesses = [];

var game = {
  players: [],
  word: "",
  getWord: function() {
    this.word = prompt("Enter your secret word. Don't tell anyone what it is. *wink *wink")
  },
  guesses: [],
  getGuesses: function () {
    alert("Guess the secret word.")
    var playerGuess = prompt();
    if (playerGuess === this.word) {
      alert("You win! Now go away.")
    }else if(playerGuess != this.word) {
      alert("Wrong answer doofus.");
    }else {
      game.guesses.push(playerGuess);
    }
  },
  // incorrectGuesses: [],
  getPlayers: function() {
    while(true) {
      alert("Enter your name,if you dare, then type STOP. Don't ask why, just do it!")
      var playerName = prompt();
      if (playerName === "STOP") {
        break;
      }else {
        game.players.push(playerName);
      }
    }

  },
  playANewGame: function() {
    game.getPlayers();
    game.getWord();
    game.getGuesses();
    // game.incorrectGuesses();
  }

}









game.playANewGame();
console.dir(game);
console.log("welcome to hangman");
