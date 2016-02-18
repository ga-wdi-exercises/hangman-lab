var split;
var word;
// get user word 
var getWord=function(){
	word=prompt("Choose a word.").toLowerCase();
	splitWord();
	return word;
};

var splitWord=function(){
	split=word.split("");
	
	for (i=0; i<split.length; i++){
		split[i] = "_";
		return split;
	}
};



getWord();
console.log(split);