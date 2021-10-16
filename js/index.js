console.log('linha 1');
//throw new Error('Ocorreu um erro na aplicação!');
console.log('linha 3');

try {
    console.log(soma(10, new Array(10)));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

}finally{
    console.log('Sempre será executado');
}

function soma(a, b) {
    return a.exec(20);
}