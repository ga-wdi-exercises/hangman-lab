console.log("welcome to hangman");

var wordBank= ['monday', 'ennui', 'legit', 'beer', 'butt', 'llama', 'wombat'];
var answer;
var gameWord;
var guesses= [];

function chooseWord(){
  var wordIndex = Math.floor(Math.random()* wordBank.length);
  var gameWord = wordBank[wordIndex];
  return gameWord;
}

gameWord = chooseWord();
  for(guess=0;guess<10;guess++){
    answer = prompt("Enter A Letter");
    guesses.push(answer);
    console.log(guesses);
  }
