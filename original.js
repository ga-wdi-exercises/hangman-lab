console.log("welcome to hangman");

var wordBank= ['monday', 'ennui', 'legit', 'beer', 'butt', 'llama', 'wombat'];
var answer;
var gameWord;
var guesses= [];


function chooseWord(){
  var wordIndex = Math.floor(Math.random()* wordBank.length);
  var hangWord = wordBank[wordIndex];
  return hangWord;
}

hangWord= chooseWord();
