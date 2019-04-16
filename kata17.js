let prompt = require('prompt-sync')();

const randomNumberGuesser = function() {
  const randomNumber = Math.floor(Math.random()*100);
  let previousGuesses = [];
  let currentGuess = newGuess();
  let gameOver = false;

  // Game will continue until game is ended
  while (!gameOver) {
    console.log('> ' + currentGuess);
    // Check if answer is correct
    if (currentGuess == randomNumber) {
      console.log('You got it! You took ' + previousGuesses.length + ' attempts!');
      gameOver = true;
      break;
    }
    // Check if input is a number
    if (currentGuess %1 == 0) {
      // check if input has been entered previously
      if (previousGuesses.length > 0) {
        for (i = 0; i < previousGuesses.length; i++) {
          if (currentGuess == previousGuesses[i]) {
            console.log('Already Guessed!');
          }
        }
      }
      previousGuesses.push(currentGuess);
      if (currentGuess > randomNumber) {
        console.log('Too High!');
      } else console.log('Too Low!');
    } else {
      console.log('Not a number! Try again!');
    }
    currentGuess = newGuess();
  }
  return (console.log('Thanks for playing!'));
};

// Prompt user for a number
const newGuess = function() {
  return (prompt('Guess a number:'));
};

// Start Game
randomNumberGuesser();
