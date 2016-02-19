var game = {
  word: [],
  secretWord: [],
  guesses: [],
  wrongGuesses: [],

  chooseWord: function(){
      var playerWord = prompt("Please choose your secret word!");
      for (var i = 0; i <= playerWord.length; i++){
        var letter = playerWord[i];
        game.word.push(letter);
      }
      for (var i = 0; i <= playerWord.length; i++){
        var c = playerWord.charAt(i);
        var c = "-";
        game.secretWord.push(c);
      }
      alert("Your word is now a secret: " + game.secretWord);
  },

  guessLetter: function(){
    while ((game.wrongGuesses.length + game.guesses.length) < 10) {
      var playerGuess = prompt("You have made " + (game.wrongGuesses.length + game.guesses.length) + " guesses out of 10. Please guess a letter -- or type STOP to stop the game.");
        if (playerGuess == "STOP" || playerGuess == "stop"){
        alert("Game over!");
        break;
      }else if (playerGuess.length > 1)  {
        alert("You can't guess that! Please guess one letter.");
        }else if (game.word.indexOf(playerGuess) >= 0){
          alert(playerGuess + " is in the word!");
          game.guesses.push(playerGuess);
          var g = game.word.indexOf(playerGuess);
          game.secretWord[g] = playerGuess;
          alert(game.secretWord);
          //something to reveal the secretWord letter by letter goes here
          //game.secretWord.replace(/.*/,"-");
        }else if (game.word.indexOf(playerGuess) === -1){
          alert(playerGuess + " is not in the secret word!");
          game.wrongGuesses.push(playerGuess);
        }
    };
  }
}

game.chooseWord();
game.guessLetter();
console.log(game.word);
console.log(game.secretWord);
console.log(game.guesses);
console.log(game.wrongGuesses);


/* psuedocode

function chooseWord
  prompt
  split playerWord into characters
  push split playerWord into game.word array
  return length of array with a special character for each letter

function guessLetter
  game.players.forEach
  var playerGuess = prompt("Please guess a letter.")
  if playerGuess is in the word array, reveal the letter
    game.guesses.push
    else if player guess is not in the word array, add playerGuess to the wrongGuesses array

function aNewGame
  game.getPlayers();
  game.goesFirst();
  game.chooseWord
*/
