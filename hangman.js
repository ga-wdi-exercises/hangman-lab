console.log("Welcome to Hilary's Hangman");


word()
function word() {
  // var word = prompt("What is your secret word?");

    var word = prompt("What is your secret word?");
    secret = word.length;
    if (secret > 1){
      GameWord = word.split("");
      LetterHolder = [];
      for (var i = 0; i < GameWord.length; i++){
        LetterHolder[i]="-";
      }
    }
    else{
       console.log("x");

    }
}

function Game() {

}

// }
// function guesses(word){
// var guess = prompt("Guess a letter");
//   while(true){
//     if (guess.length = 1){
//       return guess;
// //     }
// //   }
// };


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
