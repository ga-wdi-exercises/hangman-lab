var game = {
  word: [],
  guesses: [],
  wrongGuesses: [],
  /*getPlayers: function(){
    while (true){
    var self = this;
    var playerName = prompt("Welcome to the game! Please enter the player names one at a time. When all players are ready to start the game, type OK.");
    if(playerName == "OK" || playerName == "ok"){
      break;
    }else{
      self.players.push(playerName);
      }
    }
  },
  goesFirst: function(){
    game.players.sort(function(a,b){
      if (Math.random > 0.5) {
        return 1;
      }else{
        return -1;
      }
    });
  },*/
  chooseWord: function(){
      var playerWord = prompt("Please choose your secret word!");
      game.word.push(playerWord);
      return game.word.length;
    }
  }
  /*guessLetter: function(){
    var playerGuess = prompt("Please guess a letter.")
    game.players.forEach(player)
      if (playerGuess == game.word.
  }*/



game.chooseWord();
console.log(game.word);

/* psuedocode

function getPlayers
  return player

function playerTurn
  game.players.sort
  player[i]

function chooseWord
  prompt

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
