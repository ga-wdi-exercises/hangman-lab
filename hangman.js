var game = {
  alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t" , "u", "v", "w", "x", "y", "z"],
  word: [],
  secretWord: [],
  guesses: [],
  wrongGuesses: [],

  chooseWord: function(){
      console.log("about to prompt user");
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
  },

  guessLetter: function(){
    while (game.wrongGuesses < 10) {
      var playerGuess = prompt("You have made " + (game.wrongGuesses + game.guesses.length) + " guesses out of 10. Please guess a letter -- or type STOP to stop the game.");
        if (playerGuess == "STOP"){
        break;
      }else if (game.word.indexOf(playerGuess) > 0){
          console.log(playerGuess + " is here!");
          // game.secretWord.replace(".*","-");
          // game.guesses.push(playerGuess);
        }else if (game.word.indexOf(playerGuess) === -1){
          alert(playerGuess + " is not in the secret word!");
          game.wrongGuesses++;
        }else if (playerGuess.length > 1) {
          alert("You can't guess that! Please guess one letter.");
        }
    }
  }
}

game.chooseWord();
game.guessLetter();
console.log(game.word);
console.log(game.secretWord);

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
