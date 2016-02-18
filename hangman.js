console.log("Welcome to Robizzy's HangMan console game.");

var word = prompt("Please enter a word");
var attempt = [];
var incorrectAttemptLimit = 7;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

function attempt(letter){
  if (attempt.includes(letter)){
    alert("Already attempted this letter");
    return;
  }
}

function countIncorrectAttempts(word, attempts){
  return attempts.filter(function(count){
    return !word.match(count);
  });
}
