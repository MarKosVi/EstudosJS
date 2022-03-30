let nameBootInput = document.getElementById('nameBoot');
let formItem = document.getElementById('formBoot');
let estados = [{valor:'CE', estado: 'Ceará'}, {valor:'SP', estado: 'São Paulo'}, {valor:'RJ', estado: 'Rio de Janeiro'}];


let upInput = (opt) => {
    opt.addEventListener('change',()=>{
        let valueInput
        valueInput = opt.value
        console.log(valueInput)
    });
};

 let listSelect = document.createElement('Select');
 listSelect.classList.add('custom-select', 'mt-4');
 listSelect.setAttribute('name', 'estadoSelectBoot');
 listSelect.setAttribute('id', 'estadoSelectBoot');
 formItem.appendChild(listSelect);
 listSelect.appendChild(document.createElement('option'));
 listSelect.children[0].setAttribute('selected', '');
 listSelect.children[0].innerHTML = 'Selecione seu Estado';
 estados.forEach((estado, i)=>{
    let listOP = document.createElement('option');
    listOP.setAttribute('value', estado.valor);
    listOP.innerHTML = estado.estado;
    listSelect.appendChild(listOP);
 });

 //Listening inputs
 upInput(listSelect);
 upInput(nameBootInput);