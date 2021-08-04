
const input = document.querySelector('.inputTask').value;
const addButton = document.querySelector('.addTaskButton');
const taskList = document.querySelector('.taskList');

const newLi = () =>{
    let li = document.createElement('li');
    return li;
}

const newTask = () =>{
    let li = newLi();
    let bt = createButtoRemove();
    li.appendChild(document.createTextNode(input+' '));
    li.appendChild(bt);
    taskList.appendChild(li);
}

const createButtoRemove = () =>{
    let bt = document.createElement('button');
    bt.innerText = ' Remover';
    bt.setAttribute('class', 'btRemove');
    return bt;
}

addButton.addEventListener('click', newTask);