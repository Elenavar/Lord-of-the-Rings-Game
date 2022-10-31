'use strict';

//Declaración de variables
let bien = 0;
let mal = 0;
let i = 0;
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const button = document.querySelector('.js-button');
const restartButton = document.querySelector('.js-restart-button');
const gamer = document.querySelector('.js-gamer');
const pc = document.querySelector('.js-pc');

const races = [ 2 /*sureños*/, 2 /*orcos*/, 2 /*goblins*/, 3 /*huargos*/, 5 /*trolls*/];


//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function counter(){
  if (i <= 10){
    startGame(getRandomNumber(6));
    console.log(`vuelta ${i}`);
    i++;
  }else{
    button.classList.add('hide');
    restartButton.classList.remove('hide');
  }
}
function startGame(number){
    console.log(number);
    const selectValue = select.value;
    if (races[number]< selectValue) {
        result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
        bien++;
        gamer.innerHTML = `Jugador: ${bien}`;
    } else if (races[number]> selectValue) {
        result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
        mal++;
        pc.innerHTML = `Computadora ${mal}`;
    } else {
      result.innerHTML = "Empate";
    }
}


function handleClick(event) {
  event.preventDefault();
  counter();
}

function restart(){
  i = 0;
  bien = 0;
  mal = 0;
  button.classList.remove('hide');
  restartButton.classList.add('hide');
}
function handleRestart(event){
  event.preventDefault();
  restart();
}

//Eventos
button.addEventListener('click', handleClick);
restartButton.addEventListener('click', handleRestart);
