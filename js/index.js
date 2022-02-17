let missao = 'Missão estrelar JS ';
let body = document.body;
body.appendChild(document.createElement('button')).setAttribute('id', 'but');
let but = document.querySelector('#but');
but.innerHTML = 'Executar Missão' 


body.addEventListener('load', (()=>{
    console.log(`${missao} em Execução!!!`)
})());
but.addEventListener('click', ()=>{
    console.log(`${missao} realizada com sucesso !!!`)
});
