'use strict';

//Declaración de variables
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const button = document.querySelector('.js-button');
const restartButton = document.querySelector('.js-restart-button');
const gamer= document.querySelector('.gamerScore');
const pc = document.querySelector('.pcScore');


const races = [ 2 /*sureños*/, 2 /*orcos*/, 2 /*goblins*/, 3 /*huargos*/, 5 /*trolls*/];
  // {
  //   name: "sureños",
  //   force: 2,
  // },
  // {
  //   name: "orcos",
  //   force: 2,
  // },
  // {
  //   name: "goblins",
  //   force: 2,
  // },
  // {
  //   name: "huargos",
  //   force: 3,
  // },
  // {
  //   name: "trolls",
  //   force: 5,
  // },


//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function startGame(number){
    console.log(number);
    const selectValue = select.value;
    let bien = 0;
    let mal = 0;
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
  startGame(getRandomNumber(6));
}

//Eventos
button.addEventListener('click', handleClick);
