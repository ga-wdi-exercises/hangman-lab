var word = prompt("Choose your word").toLowerCase();
var guesses = [];
var incorrectGuessesLimit = 6;
var letters = [];
var countIncorrectGuesess = [];
var incorrectGuesses = [];

function convertWordToDashes(word){
  var letters = word.split("");
  var dashes = "";
  for(var i = 0; i < letters.length; i++){
    if(guesses.includes(letters[i])){
      letters[i] = letters[i]
    }else{
      letters[i] = "-"
    }
  }
  return letters.join("")
}

function guess(letters){
  if(guesses.includes(letters)){
    alert("you already guessed " + letters);
    return;
  }
}
guesses.push(letters);
var incorrectGuesses = countIncorrectGuesses(word, guesses);
