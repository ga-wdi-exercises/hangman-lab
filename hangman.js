console.log("welcome to hangman");
var word = prompt("Enter a word.");
console.log("word:" + word);
var dashWord = "-";
for (i = 1; i <word.length; i ++) {
  dashWord += "-";
}
// var dashWord = "-----";

alert("Word: " + dashWord + " Guess a letter");

// {
//   var str = ("word:");
//   var newstr = str.replace ("----");
//   function replacer (match, "word:", offset,string){
//     return ["word:"]
//   };
//
// console.log ("word:" + newstr);
//}
