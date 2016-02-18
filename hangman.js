var welcome = alert("WELCOME TO HANGMAN!");
var ready = alert("Press Ok to play!");


var letter = word.split("");
var wordLength = word.length;
wordSubstring = word.substring();
var word = randomWord(wordBank);
var wordBank = ["wombat", "slack", "computer", "function", "commit", "code", "javascript", "github", "outcomes", "atom", "hangman",  "technology", "math", "global", "debugging", "context", "tags", "scope", "closure"];
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
  function guess(letter){
    prompt("Guess a letter");
    if(word.split("").includes(letter)){
      return = "CORRECT!"
    } else {
      return = "Nice try but that letter is not there."
    }
  endgameannouncement =
  playAgain;
}
