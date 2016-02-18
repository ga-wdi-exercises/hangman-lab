console.log("welcome to hangman");
var word = prompt("Enter a word.");
console.log("word:" + word);
var dashWord = "-";
for (i = 1; i <word.length; i ++) {
  dashWord += "-";
}
// var dashWord = "-----";
alert("Word: " + dashWord + " Guess a letter");
gameOver= false
while (gameOver == false){
  var guess = prompt("Enter a Letter");
  console.log (guess);
}
