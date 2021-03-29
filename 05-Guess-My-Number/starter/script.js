'use strict';
/*
console.log(document.querySelector('.message'));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no number inputted
  if (!guess) {
    displayMessage('No number!');

    //when number is the Correct number
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //adjusts highscore if new score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    //if guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high!' : 'Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');
    }
  }
  //if score = 0 print game over
  /*if (score === 0) {
    document.querySelector('.message').textContent = 'Game Over!';
  }*/

  document.querySelector('.hishscore').textContent = score;
});
//resets the whole game on the again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
