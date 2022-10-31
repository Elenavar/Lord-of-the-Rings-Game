'use strict';

//Declaración de variables
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const button = document.querySelector('.js-button');


const races = [
  {
    name: "sureños",
    number: 2,
  },
  {
    name: "orcos",
    number: 2,
  },
  {
    name: "goblins",
    number: 2,
  },
  {
    name: "huargos",
    number: 3,
  },
  {
    name: "trolls",
    number: 5,
  },
];

//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function startGame(number){
    console.log(number);
    const selectValue = select.value;
    if (races[number].number < selectValue) {
        result.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
      } else if (races[number].number > selectValue) {
        result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
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

