'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const roundShow = document.querySelector('.round');
const roundText = document.querySelector('.roundText');
const playerTurn0El = document.querySelector('.turn--0');
const playerTurn1El = document.querySelector('.turn--1');
const winnerBox = document.querySelector('.winner');
const Btn1 = document.querySelector('.card-1');
const Btn2 = document.querySelector('.card-2');
const Btn3 = document.querySelector('.card-3');
const Btn4 = document.querySelector('.card-4');
const Btn5 = document.querySelector('.card-5');
const Btn6 = document.querySelector('.card-6');
const Btn7 = document.querySelector('.card-7');

let scores,
  activePlayer,
  round,
  roundH = 0,
  playing,
  score1,
  score2,
  winner;

function init() {
  playing = true;
  round = 1;
  scores = [0, 0];
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  roundShow.textContent = 1;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  playerTurn0El.classList.remove('.hidden');
  playerTurn1El.classList.add('.hidden');
}

init();

function switchPlayer() {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  playerTurn0El.classList.toggle('hidden');
  playerTurn1El.classList.toggle('hidden');

  activePlayer = activePlayer === 0 ? 1 : 0;
  roundH += 1;
  if (roundH % 2 == 0 && round < 3) {
    round += 1;
    roundShow.textContent = round;
  }
  if (round == 3 && roundH == 6) {
    score1 = Math.abs(scores[0]);
    score2 = Math.abs(scores[1]);
    if (score1 > score2) winner = 'Player 1 won!';
    else if (score1 < score2) winner = 'Player 2 won!';
    else winner = `It's a tie!`;

    winnerBox.textContent = winner;

    if (!playerTurn0El.classList.contains('hidden'))
      playerTurn0El.classList.add('hidden');
    if (!playerTurn1El.classList.contains('hidden'))
      playerTurn1El.classList.add('hidden');

    roundShow.classList.add('hidden');
    roundText.classList.add('hidden');

    playing = false;
  }
}

let randomNumber;

function showGetScore() {
  if (playing) {
    randomNumber = Math.floor(Math.random() * 9) - 4;
    this.classList.remove('backside');
    this.classList.add('card-image-' + randomNumber);

    this.classList.add('stop-button');

    scores[activePlayer] += randomNumber;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    switchPlayer();
  }
}

Btn1.addEventListener('click', showGetScore);
Btn2.addEventListener('click', showGetScore);
Btn3.addEventListener('click', showGetScore);
Btn4.addEventListener('click', showGetScore);
Btn5.addEventListener('click', showGetScore);
Btn6.addEventListener('click', showGetScore);
Btn7.addEventListener('click', showGetScore);
