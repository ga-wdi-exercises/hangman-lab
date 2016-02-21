console.log("welcome to hangman");

// get a word
var word = "goober"; //prompt("enter a secret word")
var guesses = [];
var incorrectGuesses = 0;

// display the word with underscores
console.log(displayWord(word))
// start guessin until 6 wrong guesses or they got it
  while(incorrectGuesses < 7){
    guess(prompt("enter a letter"), word)
    console.log(displayWord(word))
    if(!displayWord(word).match("_")){
      alert("you win! yay!")
      break;
    }
  }
  if(incorrectGuesses === 6){
    alert("you lose :(")
  }

  // ask for a guess (letter)

function displayWord(word){
  var display = "";
  for(var i = 0; i < word.length; i++){
    // is that letter in the guesses array?
    if(guesses.includes(word[i])){
      // if yes, display that letter
      display = display + word[i] + " "
    } else {
      // if no, display underscore
      display = display + "_ "
    }
  }
  return display
}

function guess(letter, word){
  if(!word.match(letter)){
    incorrectGuesses++
  }
  guesses.push(letter)
}
