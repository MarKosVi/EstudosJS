let missao = 'Missão estrelar JS em execução!!!';
let button = document.querySelector('.i');

function eventOnClick(){
    alert('Button Clicado')
};

function eventLoad(){
    alert('Evento onload disparado')
};

button.addEventListener('click', eventOnClick);
window.addEventListener('load', eventLoad);