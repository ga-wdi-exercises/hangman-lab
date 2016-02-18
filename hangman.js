var welcome = alert("WELCOME TO HANGMAN!");
var ready = alert("Press Ok to play!");


wordBank = ["wombat", "slack", "computer", "function", "commit", "code", "javascript", "github", "outcomes", "atom", "hangman",  "technology", "math", "global", "debugging", "context", "tags", "scope", "closure"];
var letter = wordBank.split("");
var wordLength = wordBank.length;
wordSubstring = wordBank.substring();
var word = randomWord();
var incorrectGuesses = [];
var correctGuesses = [];
var guess = [];

function newGame(){
  var ready = alert("Press Ok to play!");
  var randomWord;
  function randomWord(){
      var random = Math.floor(Math.random() * wordBank.length);
      var toString = wordBank[random];
      console.log(toString);
      word=toString.split("");
      console.log(word);
  }
  var incorrectGuesses = alert("Nice try but that letter is not there.");
  var correctGuesses = alert("CORRECT!");
  function guess(letter){
    prompt("Guess a letter");
    if(word.split("").includes(letter)){
      return = var correctGuesses
    } else {
      return = var incorrectGuesses
    }
  endgameannouncement =
  playAgain;
}
