var game = {
  players: [],
  word: [],
  guesses: [],
  getPlayers: function(){
    while (true){
    var playerName = prompt("Welcome to the game! Please enter the player names one at a time. When all players are ready to start the game, type OK.");
    if(playerName == "OK"){
      break;
    }else{
      game.players.push(playerName);
      }
    }
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
