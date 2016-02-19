var word = prompt("Please enter your secret word").toLowerCase();
var guesses = [];
var incorrectGuessLimit = 6;

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
    alert("you already guessed " + letter);
    return;
  }
  guesses.push(letter);
  var incorrectGuesses = countIncorrectGuesses(word, guesses);
  alert("you guessed: " + letter + "\n" + convertWordToDashes(word) + "\n" +  (incorrectGuessLimit -  incorrectGuesses + " guesses remaining"));
  if(incorrectGuesses == incorrectGuessLimit){
    alert("Game Over! You lose :(")
  }
  if(!convertWordToDashes(word).match(/-/)){
    alert("Game Over! You win :)")
  }
}

function countIncorrectGuesses(word, guesses){
  return guesses.filter(function(l){
    return !word.match(l);
  }).length;
}

while(countIncorrectGuesses(word, guesses) != incorrectGuessLimit){
  if(convertWordToDashes(word).match(/-/)){
    guess(prompt(convertWordToDashes(word) + "\nGuess a letter"));
  }else{
    break;
  }
}