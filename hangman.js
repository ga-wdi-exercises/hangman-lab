console.log("Welcome to Hilary's Hangman");
var guesses
var incorrectGuesses

word()
function word() {
  // var word = prompt("What is your secret word?");
  while(true){
    var word = prompt("say word")
    if (word.length > 1){
      return word;

    } else {
      alert("word too short");
    }
  }
}


    // if (word.length > 1){
    //   mySplit();
    //
    // } else (word.length = 0) {
    //   return prompt("Please enter a word")
    // }
    // }




// function mySplit(){
//   var mySplitResult = word.this.split(" ");
// }
