'use strict';

//Declaración de variables
let good = 0;
let evil = 0;
let i = 0;
const finalResult = document.querySelector('.js-final-result');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const button = document.querySelector('.js-button');
const round = document.querySelector('.js-round');
const restartButton = document.querySelector('.js-restart-button');
const gamer = document.querySelector('.js-gamer');
const pc = document.querySelector('.js-pc');

const races = [
  2 /*sureños*/, 2 /*orcos*/, 2 /*goblins*/, 3 /*huargos*/, 5 /*trolls*/,
];

//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function gameOver() {
  if (good > evil) {
    finalResult.innerHTML = '¡Ha ganado el ejército del bien!';
  } else {
    finalResult.innerHTML = 'Oh no.. Ha ganado el ejército del mal.';
  }
}

function counter() {
  if (i < 10) {
    startGame();
    round.innerHTML = `Ronda: ${i + 1}`;
    i++;
  } else {
    button.classList.add('hide');
    restartButton.classList.remove('hide');
    gameOver();
  }
}

function compare(number, selectValue) {
  if (races[number] < selectValue) {
    result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    good++;
    gamer.innerHTML = `Jugador: ${good}`;
  } else if (races[number] > selectValue) {
    result.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    evil++;
    pc.innerHTML = `Computadora: ${evil}`;
  } else {
    result.innerHTML = 'Empate';
  }
}

function startGame() {
  const selectValue = select.value;
  const number = getRandomNumber(6);
  compare(number, selectValue);
}

function handleClick(event) {
  event.preventDefault();
  counter();
}

function restart() {
  i = 0;
  good = 0;
  evil = 0;
  round.innerHTML = '';
  result.innerHTML = '';
  pc.innerHTML = `Computadora: ${evil}`;
  gamer.innerHTML = `Jugador: ${good}`;
  finalResult.innerHTML = '';
  button.classList.remove('hide');
  restartButton.classList.add('hide');
}
function handleRestart(event) {
  event.preventDefault();
  restart();
}

//Eventos
button.addEventListener('click', handleClick);
restartButton.addEventListener('click', handleRestart);
