console.log("welcome to hangman");
var word;
var guesses = [];
var incorrectGuesses;

var word = prompt ("Please enter your secret word.");
var  splitWord = word.split("");


// function getWord(word){
//  var dashes = "";
//  for (var i=0, i < splitWord.length; i++){
//    if(word.includes(splitWord[i])){
//      letters[i] = letters[i]
//    } else{ splitWord[i] = "-"}
//    }
//  }
// return letters.join("")
// }

var letter = prompt("Please enter guessed letter.");

if (letter.includes(splitWord)){
   alert("You entered " + letter);
}
else {
   alert("Nope! Try again!");
}


//   var getWord = prompt("Guess one letter.")
//   if(word.includes(getWord){
//   alert("You entered " + getWord);
// }



 //Players take turns guessing a letter from "letters" array
   // if letter is stored in "word" array, remove from "letters", show in puzzle
   // if user selects a removed letter, display prompt

 // function attempts () {
 //     while (userattempts < 6) {
 //       var guess = prompt ("Please pick a letter:")
 //       userattempts ++;
 //         if (this.word.includes(guess)) {
 //           alert ("That's correct.");
 //         } else {
 //            alert("That's incorrect.")
 //       }
 //     }
 //   }
 //
 // //Each player gets 5 attempts
 //
 //
 //
 //
 // /* users(); */
 // pickAWord();
 // attempts ();
