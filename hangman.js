console.log("welcome to hangman");
var word = prompt("Please enter your secret word").toLowerCase();
var guesses = [];

console.log(convertWordToDashes(word))
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

function guess(letter){
  if(guesses.includes(letter)){
    console.log("you already guessed " + letter);
    return;
  }
  console.log("")
  console.log("you guessed: " + letter)
  guesses.push(letter);
  console.log(convertWordToDashes(word));
  var incorrectGuesses =countIncorrectGuesses(word, guesses);
  console.log( 6 -  incorrectGuesses + " guesses remaining");
  if(incorrectGuesses == 6){
    alert("Game Over! You lose :(")
  }
  if(!convertWordToDashes(word).match(/-/)){
    alert("Game Over! You win :)")
  }
}

function countIncorrectGuesses(word, guesses){
  return guesses.filter(function(l){
    return !word.match(l);
  }).length
}

while(countIncorrectGuesses(word, guesses) != 6 || !convertWordToDashes(word).match(/-/)){
  guess(prompt("Guess a letter"))
}