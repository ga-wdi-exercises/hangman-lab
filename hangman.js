var welcome = alert("WELCOME TO HANGMAN!");
var ready = alert("Press Ok to play!");

var guess = [];
wordBank = ["wombat", "slack", "computer", "function", "commit", "code", "javascript", "github", "outcomes", "atom", "hangman",  "technology", "math", "global", "debugging", "context", "tags", "scope", "closure"];
var letters = wordBank.split("");
var wordLength = wordBank.length;
var wordSubstring = wordBank.substring();
randomWord();

function newGame(){
  var ready;
  var randomWord;
  var guess = prompt("Guess a letter");
  guess;
  var incorrectGuesses;
  var correctGuesses;
  endgameannouncement;
  playAgain;
}
function randomWord(){
    var random = Math.floor(Math.random() * wordBank.length);
    var toString = wordBank[random];
    console.log(toString);
    word=toString.split("");
    console.log(word);
}
