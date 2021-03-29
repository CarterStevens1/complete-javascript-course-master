'use strict';
//element selectors;
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.getElementById('score--0');
const score1el = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore, activePlayer, playing, score;

//switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

const PlayerWinner = function () {
  playing = false;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};
//starting conditions of the game

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score = [0, 0];

  score0el.textContent = 0;
  score1el.textContent = 0;
  current0el.textContent = 0;
  current1el.textContent = 0;
  diceEl.classList.add('hidden');

  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
  player0el.classList.remove('player--winner');
  player0el.classList.remove('player--winner');
};

init();

//rolling dice functionality
btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for rolled 1: if true, switch to next else add numbers
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //swtich to next player
      switchPlayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    // add current score to active players score
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check if player score is >= 100
    //finish game
    if (score[activePlayer] >= 100) {
      PlayerWinner();
    }
    //switch to next player
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
