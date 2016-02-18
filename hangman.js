function playHangman(){
  console.log("welcome to hangman");
  words = ['javascript','ruby','rails','jquery','programming'];
  dashedWords = ['- - - - - - - - - -','- - - -','- - - - -','- - - - - -','- - - - - - - - - - -'];
  guesses = [];
  incorrectGuesses = 0;
function randomizeIndex(){
    randomIndex = Math.floor(Math.random()*5);
  }
randomizeIndex();
}
function randomWord(){
  word = words[randomIndex];
  dashedWord = dashedWords[randomIndex];
  dashedArray = dashedWord.split(" ");
  console.log(dashedArray);
  }
function guessLetter(){
  word.split("");
  letterGuessed = prompt('guess a letter');
  if (word.includes(letterGuessed)==true){
    for (var i=0;i<word.length;i++){
      if (word[i] == letterGuessed) {
        dashedArray[i] = letterGuessed
      }
    }
  }
}
