# Hangman JS

## Your Task

Recreate the classic game of Hangman! Your version, however, will exist entirely in the Javascript console.

You might find it helpful to instantiate the following values in your game. Keep in mind, however, this is not the only way to build it out.
* `word`: a string that stores the word to be guessed, inputted by user.
* `guesses`: an array that contains the letters guessed by the user.
* `incorrectGuesses`: a number that represents the number of incorrect guesses made.

Your game show exhibit the following functionality...
* When the game starts, your are prompted to enter a word.
* After every turn, the word should be displayed to the user. Unguessed letters should be represented by a `-`, while correctly guessed characters should be represented by the actual character.
* When the player correctly guesses a letter, the corresponding `-`'s should be replaced with the actual letter.
* When the player incorrectly guesses a letter, `incorrectGuesses` should be incremented by 1.
* When the player guesses the entire word, the game ends.
* When `incorrectGuesses` reaches a max value (to be determined by you), the game ends.

### Helpful Resources

Here are some links to some methods that may help you. They are not required. You can complete this exercise without using any -- well, most -- of these.

[`.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)  
  * **tl;dr:** Convert string into array of characters.

[`.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  * **tl;dr:** Convert array to string.

[`.prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)  
  * **tl;dr:** Asking for user input.

[`.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)  
  * **tl;dr:** Replace characters with other characters.

[`.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  
  * **tl;dr:** Check if array contains a value.

[`.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)  
  * **tl;dr:** Find all elements in array that match a condition.

[`.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)  
  * **tl;dr:** Check if characters in a string match a regular expression.  

  ```js
  "abc".match(/a/) // => ["a"]
  "abc".match(/d/) // => null
  ```

### Bonus (Lvl. 1)

* Allow the user to play again after win/loss without refreshing the page.

### Bonus (Lvl. 2)

* Create a menu that shows up when you start and win/lose the game. [Inspiration](https://gieseanw.files.wordpress.com/2010/03/hangman_banner.jpg?w=900&h=424). See below for a sample menu...

```text
Welcome to Hangman!

1. Play Game
2. Help / How To Play
3. Quit
```

### Bonus (Lvl. 3)

* Draw ASCII art to represent guesses remaining with an actual hangman.
