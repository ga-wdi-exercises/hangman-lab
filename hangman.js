players = [];
word = [];
userattempts = 0;
var win = 0;
var lose = 0;
// Prompt welcomes users to game:
alert ("Welcome to Hangman. Let's Play!")

// Player Names are entered

/*function users(){
    var playerName = prompt(players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
    if(playerName){
      players.push(playerName);
      users();
    }
  }
*/

// Secret word is chosen:
function pickAWord () {
    var secretWord = prompt ("Please enter your secret word:");
    if(secretWord){
      word = secretWord.split("");
    }
  }

//Players take turns guessing a letter from "letters" array
  // if letter is stored in "word" array, remove from "letters", show in puzzle
  // if user selects a removed letter, display prompt

function attempts () {
    while (userattempts < 6) {
      var guess = prompt ("Please pick a letter:")
      userattempts ++;
        if (this.word.includes(guess)) {
          alert ("That's correct.");
        } else {
           alert("That's incorrect.")
      }
    }
  }

//Each player gets 5 attempts




/* users(); */
pickAWord();
attempts ();
