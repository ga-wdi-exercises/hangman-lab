# Hangman JS

## Your Task

Recreate the classic game of Hangman! Your version, however, will exist entirely in the Javascript console and/or in alert boxes.

Here's a [refresher](https://en.wikipedia.org/wiki/Hangman_(game)) on how the game works. You can approach this however you'd like. If you need help, we've included a few hints [here](https://github.com/ga-wdi-exercises/hangman-lab/blob/master/hints.md).

You can play our solution [here](http://ga-wdi-exercises.github.io/hangman-lab/). The Javascript has been "uglified" so it's unreadable.

## Helpful Resources

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

## Bonuses

#### Lvl. 1

* Allow the user to play again after win/loss without refreshing the page.

#### Lvl. 2

* Create a menu that shows up when you start and win/lose the game. In the below example, if the user inputs `1`, the game begins. If the user inputs `3`, the game closes.

```text
Welcome to Hangman!

1. Play Game
2. Help / How To Play
3. Quit
```

#### Lvl. 3

* Draw ASCII art to represent guesses remaining with an actual hangman. Some inspiration...

```text
_______
|/      |
|      (_)
|      \|/
|       |
|      / \
|
|___
```
