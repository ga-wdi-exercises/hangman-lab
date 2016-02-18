var game = {
  players: [],
  word: [],
  guesses: [],
  getPlayers: function(){
    console.log("this is how you determine the number of players");
  }
}

game.getPlayers();

/* psuedocode

function getPlayers
  return player

function playerTurn
  game.players.sort

function chooseWord
  prompt

function guessLetter

function aNewGame
  game.getPlayers();
  game.playerTurn();
  game.chooseWord
*/
