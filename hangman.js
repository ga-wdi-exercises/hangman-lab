alert("WELCOME TO HANGMAN\nPress Ok to play!");

var secretWord = prompt("Enter a secret word");

var guess = prompt("Guess a letter");

var guess = [];
var letters = secretWord.split("");
var wordLength = secretWord.length;
var wordSubstring = secretWord.substring();
var incorrectGuesses = ("guess" - 1);
var wordBank = ["wombat", "slack", "computer", "function", "commit", "code", "javascript", "github", "outcomes", "atom", "hangman",  "technology", "math", "global", "debugging", "context", "tags", "scope", "closure"];

var guess = prompt("Guess a letter");
while (guess != secretWord)
guess +=1;
if (guess > 9) {
  prompt("Oh no, you lost!");
}
