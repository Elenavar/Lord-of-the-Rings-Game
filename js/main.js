'use strict';

//Declaración de variables
const select = document.querySelector('js-select');
const result = document.querySelector('js-result');
const btn = document.querySelector('js-btn');

const races = [
    {
        name: 'sureños',
        number: 2
    },{
        name: 'orcos',
        number: 2
    },{
        name: 'goblins',
        number: 2
    },{
        name: 'huargos',
        number: 3
    },{
        name: 'trolls',
        number: 5
    }
]

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// function randomRace(){
//     const number = getRandomNumber(6);
//     if races[number].number < 
// }





function handleClick(event){
    event.preventDefault();
    result.innerHTML = 'Comienza la batalla'
    const selectValue = select.value;
    const number = getRandomNumber(6);
    if (races[number].number < selectValue){
        result.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    }else if (races[number].number > selectValue){
        result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    }else{
        result.innerHTML = 'Empate';
    }
}



//Eventos
btn.addEventListener('click', handleClick);