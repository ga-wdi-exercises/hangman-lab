var wrong = 0;

function drawPuzzle(wordKeeper, letter){
  var sameLine = "";
  drawHangman();
  for(var i =0; i< letter.length; i++){
     sameLine += wordKeeper[i]+" ";
  }
  console.log(sameLine);
}

function getGuess(){
  return prompt("What letter will you choose").toLowerCase();
}

function mainMenu(){
  console.log("Welcome to Hangman");
  console.log("Main Menu:");
  console.log("1. Play Game");
  console.log("2. Help / How To Play");
  console.log("3. Quit");
  var choice = prompt("choose");
  choice = parseInt(choice);
  if(choice === 1){
    playGame();
  }
  else if(choice === 2){
    helpMenu();
  }
  else if(choice === 3){
    console.log("Your loss")
  }
  else{
    mainMenu();
  }

}

function helpMenu(){
  console.log("HOW TO PLAY: Choose one person to be the executioner. That person will think of a word or short phrase an mark out blanks (short lines) for each letter of each word. Separate words with either a slash, separate lines. Then another player will guess a letter. If that letter is in the word(s) the letter will show in that hash area. everywhere it would appear, an cross out that letter in the alphabet. If the letter isn't in the word then  a body part will be added to the gallows (head, body, left arm, right arm, left leg, right leg). The player will continue guessing letters until they can either solve the word (or phrase) or all 7 body parts are on the gallows");
  var goBack = prompt("type *CONTINUE* to continue");
  goBack = goBack.toUpperCase();
  if(goBack === "CONTINUE"){
    mainMenu();
  }
}

function playGame(){
  var gameOver = false;
  do{
    var wrongLetter =[];
    console.log("Game set ");
    console.log("Wrong guesses: " + wrong);
    word = prompt("What's the word you want to use to play the game?");
    word = word.toLowerCase();
    var wordPuzzle = word.split("");
    var wordKeeper = [];
    for(var i =0; i < word.length; i++){
       wordKeeper[i]= "_";
    }
      do{
        drawPuzzle(wordKeeper,word);
        checkLetter(wrongLetter, wordKeeper, getGuess(), wordPuzzle);
      }while(isGameOver(wordKeeper,word)==false);
  }while(isGameOver(wordKeeper,word)==false);
  if(isGameOver(wordKeeper,word)==true){
    isGameOver(wordKeeper,word);
  }
  if(word == wordKeeper.join("")){
    console.log("You Completed the puzzle the word is " + word);
  }
  else if(wrong == 7){
    console.log("Game Over. The man is hung. The word is " + word);
  }
}

function isGameOver(wordKeeper,word){
  return word == wordKeeper.join("") || wrong == 7;
  if(word == wordKeeper.join("")){
    console.log("You Completed the puzzle the word is " + word);
  }
  else if(wrong == 7){
    console.log("Game Over. The man is hung. The word is " + word);
  }
}


function checkLetter(wrongLetter, wordKeeper, guess, wordPuzzle){

  var count =0;
  var incorrect = 0;
  var sameLine = "";
  var sameLine2 = "";
  for (var index = 0; index < wordPuzzle.length; index ++){
		if (guess == wordPuzzle[index]){
			wordKeeper[index] = guess;
      sameLine += wordKeeper[index] + " ";
      console.log(sameLine);
      count++;

		}
	}



	if (count === 0)
	{
		console.log("Ha! That letter isn't the puzzle :O).");
		wrong ++;
  	var	wrongGuess = guess;
    wrongLetter.push(guess);
    wrongGuesses(wrongLetter, wrongGuess);
		return false;
	}
	else
	{
		console.log( "Got the letter!");
    wrongGuesses(wrongLetter, wrongGuess);
		return true;
	}
}

function wrongGuesses(wrongLetter,wrongGuess){
  console.log("Thumbs down: " + wrongLetter.join(","))

}

function drawHangman(){
  if(wrong === 0)
	 {
	  console.log("\n")
	   console.log("   +----+  ");
	   console.log("   |    |  ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("  =============");
     console.log("\n");
	 }
	 else if(wrong === 1)
	 {
	  console.log("\n");
	   console.log("   +----+  ");
	   console.log("   |    |  ");
	   console.log("   |    O   ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("  =============");
     console.log("\n");
	 }
	 else if(wrong === 2)
	 {
	  console.log("\n")
	   console.log("   +----+  ");
	   console.log("   |    |  ");
	   console.log("   |    O  ");
	   console.log("   |    |  ");
	   console.log("   |       ") ;
	   console.log("   |       ") ;
	   console.log("  =============");
     console.log("\n");
	 }
	 else if(wrong === 3)
	 {
	   console.log("\n");
	   console.log("   +----+  ");
	   console.log("   |    |  ");
	   console.log("   |    O  ");
	   console.log("   |   /|  ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("  =============");
     console.log("\n");
	 }
	 else if(wrong === 4)
	 {
	   console.log("\n")
	   console.log("   +----+  ");
	   console.log("   |    |  ");
	   console.log("   |    O  ");
	   console.log("   |   /|\\ ");
	   console.log("   |       ");
	   console.log("   |       ");
	   console.log("  =============");
     console.log("\n");
	 }
	 else if(wrong === 5)
	 {
	    console.log("\n")
	    console.log("   +----+     ");
	    console.log("   |    |     ");
	    console.log("   |    O     ");
	    console.log("   |   /|\\    ");
		  console.log("        |     ");
	    console.log("   |          ");
	    console.log("   |          ");
	    console.log("  ============");
      console.log("\n");
	 }
	 else if(wrong === 6)
	 {
		  console.log("\n");
	    console.log("   +----+     ");
	    console.log("   |    |     ");
	    console.log("   |    O     ");
	    console.log("   |   /|\\   ");
		  console.log("   |    |     ");
	    console.log("   |   /      ");
	    console.log("   |          ");
	    console.log("  ============");
      console.log("\n");

	 }
	 else if(wrong === 7)
	 {
		  console.log("\n");
	    console.log("   +----+     ");
	    console.log("   |    |     ");
	    console.log("   |    O     ");
	    console.log("   |   /|\\   ");
		  console.log("   |    |     ");
	    console.log("   |   / \\   ");
	    console.log("   |You Lose  ");
	    console.log("  ============");
      console.log("\n");
	 }

}

mainMenu();
