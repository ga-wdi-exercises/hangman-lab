var split;
var word;
var guess;
var numberOfGuess=0;
// get user word 
var getWord=function(){
	word=prompt("Choose a word.").toLowerCase();
	return word;
};

var splitWord=function(wordToSplit){ 
	split=wordToSplit.split("");
	word=word.split("");
	
	console.log("split:", split);
	
	for (var i=0; i<split.length; i++){
		split[i] = "_";
	}
	
	return split;
};

var guessWord=function(){
	
	while(numberOfGuess<word.length){
		guess=prompt("Please guess a letter to fill in the blank: " + split).toLowerCase();
		numberOfGuess++;
		alert(numberOfGuess)
		
		for (var i=0; i<word.length; i++){
			if(word[i]===guess){
			  split[i] = guess;
			}	
		}

		if (!word.includes(guess)) {
		    alert("That letter is not in the word. Try again.");
		    
		}

		if (split.includes("_")){
		    // guessWord();
		} else {
		    alert("Congratulations you've guessed the word. The word was " + word.join(""));
		    alert(numberOfGuess)
		    break;
		}


		if (numberOfGuess>5){
			alert("You've run out of guesses. Game Over!");


		} // close while loop
	}	
}; // close guessWord function



hangmanWord = getWord();
console.log(splitWord(hangmanWord));
console.log(guessWord());