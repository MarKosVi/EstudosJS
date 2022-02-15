//  Programação Sincrona e Assincrona
//Sincrono

let curso = 'Formação JavaScript Mestre Jedi';
console.log(`Olá Bem vindo ao curso ${curso}`);

for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log(`Esse curso e 10!!`);

//Assincrono

console.log('Inicio programação Síncrona');
// função timer programação assíncrona

setTimeout(()=>{
    console.log('Executando programação assíncrona')
}, 2000);

console.log('Terminada função Assíncrona');
