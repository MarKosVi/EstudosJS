
const section = document.querySelector('.container');
const h1 = document.createElement('h1');
const div = document.createElement('div');
div.classList.add('row');
const input = document.createElement('input');
const Add = document.createElement('button');
Add.appendChild(document.createTextNode('Adicionar'));
const taskList = document.createElement('div');
const li = document.createElement('li');
const ul = document.createElement('ul');

h1.appendChild(document.createTextNode('Lista de tarefas'));
section.appendChild(h1);
section.appendChild(div);
div.appendChild(input);
div.appendChild(Add);
section.appendChild(taskList);
taskList.appendChild(li);

function criaLi() {
    let ul = document.createElement('ul');
    return ul;
}

function criaButton(text) {
    const bt = document.createElement('button');
    bt.appendChild(document.createTextNode(text));
    bt.classList.add('rowButtons');
    return bt;
}

Add.addEventListener('click', ()=>{
    let ul = criaLi();
    let remove = criaButton('Remover');
    ul.innerText = input.value;
    ul.appendChild(remove);
    li.appendChild(ul);
    
});

let remove = document.querySelector('.rowButtons');
remove.addEventListener('click', ()=>{
    ul.removeChild(li);
});
