console.log("welcome to hangman");

var wordBank= ['monday', 'ennui', 'legit', 'beer', 'butt', 'llama', 'wombat'];
var answer;
var gameWord;
var correct_guesses= [];
var incorrect_guesses= [];


function chooseWord(){
  var wordIndex = Math.floor(Math.random()*wordBank.length);
  var hangWord = wordBank[wordIndex];

  return hangWord;
}

hangWord = chooseWord();
for(guess=0; guess<10; guess++){
  answer = prompt("Enter A Letter");
  if (hangWord.includes(answer)){
    correct_guesses.push(answer);
  }
  else (incorrect_guesses.push(answer));
}

for (hangWord)
iterate through hangWord
  if the correct_guesses does not include that Letter, replace with a dash
