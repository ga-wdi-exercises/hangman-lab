var split;
var word;
var guess;
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

	guess=prompt("Please guess a letter to fill in the blank: " + split).toLowerCase();
	

	for (var i=0; i<word.length; i++){
		if(word[i]===guess){
		  split[i] = guess;
		}
    }
    if (!word.includes(guess)) {
        alert("That letter is not in the word. Try again.");
    }
    
    if (split.includes("_")){
        guessWord();
    } else {
        alert("Congratulations you've guessed the word. The word was " + word.join(""));
    }

	
};



hangmanWord = getWord();
console.log(splitWord(hangmanWord));
console.log(guessWord());