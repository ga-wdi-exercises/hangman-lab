console.log("welcome to hangman");
var word = prompt("Enter a word.");
console.log("word:" + word);
var dashWord = "-";
for (i = 1; i <word.length; i ++) {
  dashWord += "-";
}
// var dashWord = "-----";
alert("Word: " + dashWord + " Guess a letter");
var word = "pizza"
gameOver = false;
while (gameOver == false){
  var guess = prompt("Enter a Letter");
  console.log (guess);

  var word = "word"

function guess(letter){
  if(word.split("").includes(letter)){
    return "guess correct"
  } else {
    return "guess incorrect"
  }
}
