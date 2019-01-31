var secBtn = document.getElementById('section-btn');
var taskBtn = document.getElementById('task-btn');
var secInput = document.getElementById('input-sec');
var taskInput = document.getElementById('input-task');
var divInputSec = document.getElementById('section');
var divInputTas = document.getElementById('task');
var container = document.getElementById('container');
var selectPick = document.getElementsByTagName('select')[0];
console.dir(selectPick);

function showInputSec() {
    divInputSec.autofocus = true;
    if (divInputSec.style.display === "block") {
        divInputSec.setAttribute("style", "display: none!important");
        taskBtn.setAttribute("style", "display: block!important");
        secBtn.setAttribute("style", "display: block!important");
    } else {
        divInputSec.setAttribute("style", "display: block!important");

        taskBtn.setAttribute("style", "display: none!important");
        secBtn.setAttribute("style", "display: none!important");
    }
}

function showInputTask() {
    if (divInputTas.style.display === "block") {
        divInputTas.setAttribute("style", "display: none!important");
        secBtn.setAttribute("style", "display: block!important");
        taskBtn.setAttribute("style", "display: block!important");
    } else {
        divInputTas.setAttribute("style", "display: block!important");
        secBtn.setAttribute("style", "display: none!important");
        taskBtn.setAttribute("style", "display: none!important");
    }
}

function backD() {
    divInputSec.setAttribute("style", "display: none!important");
    divInputTas.setAttribute("style", "display: none!important");
    secBtn.setAttribute("style", "display: block!important");
    taskBtn.setAttribute("style", "display: block!important");
}
var ul;
var opt;
var uls = [];

function confirmSection() {
    var inn = secInput.value;
    console.log(inn);
    var text = inn.slice();
    text = text.split('');
    text[0] = text[0].toUpperCase();
    inn = text.join('');
    ul = document.createElement('ul');
    ul.setAttribute('style', 'background: rgba(255, 255, 255, 0.603);border: 5px solid white; border-image: url("../../img/decoration-side.png") 30 round')
    opt = document.createElement('option');
    ul.innerHTML = inn
    ul.dataset.id = inn;
    opt.value = ul.innerHTML;
    opt.innerHTML = ul.innerHTML
    ul.value = inn;
    var hr = document.createElement('hr')
    ul.appendChild(hr)
    container.appendChild(ul);
    uls.push(ul)
    console.log(uls)
    console.log(opt)
    selectPick.appendChild(opt);
    secInput.value = null;
    console.log(ul);

}

var li;
var h1;
var iconE;
var iconX;
var verify;
var btnErase;
var btnEdit;

function verifyB() {
    var parent = verify.parentElement
    if (parent.style.textDecoration == 'none') {
        parent.setAttribute('style', 'text-decoration: line-through; position:relative; display:flex')
    } else {
        parent.setAttribute('style', 'text-decoration: none!important; position:relative; display:flex')
    }
}

function erase() {
    var list = btnErase.parentElement;
    var parent = list.parentElement;
    parent.removeChild(list)
}
var input;
var valuein;
var list;
var boo = false;
function edit() {
    list = h1.parentElement;
    
    if(list.dataset.id && boo) {
        h1.innerHTML = input.value;
        console.log(input.value)
        boo = false
        
    }else if(!list.dataset.id || !h1.dataset.id){
        list.dataset.id = h1.innerHTML;
        console.log(list.dataset.id)
        h1.innerHTML = '<input type="text" id="inputEdit">';
        input = document.getElementById('inputEdit');
        input.value  = list.dataset.id  
        boo = true;     
    }
}

function confirmTask() {
    var inn = taskInput.value;
    var text = inn.slice();
    text = text.split('');
    text[0] = text[0].toUpperCase();
    inn = text.join('');
    for (i = 0; i < uls.length; i++) {

        if (selectPick.value == uls[i].dataset.id) {
            // console.dir(selectPick)
            li = document.createElement('li');
            li.setAttribute('style', 'position: relative!important')
            h1 = document.createElement('h1')
            h1.innerHTML = inn
            li.appendChild(h1)
            li.setAttribute('style', 'position: relative; display : flex')
            uls[i].appendChild(li);
            verify = document.createElement("button");
            iconY = document.createElement('i');
            iconY.classList.add('fas');
            iconY.classList.add('fa-check');
            verify.setAttribute('style', 'right: 10%; position : absolute')
            verify.appendChild(iconY)
            verify.classList.add('btn');
            verify.addEventListener('click', () => {
                verifyB()
            });
            li.appendChild(verify)
            btnErase = document.createElement('button')
            iconX = document.createElement('i');
            iconX.classList.add('fas');
            iconX.classList.add('fa-times');
            btnErase.setAttribute('style', 'right: 7%; position : absolute')
            btnErase.appendChild(iconX)
            btnErase.classList.add('btn');
            btnErase.addEventListener('click', () => {
                erase()
            });
            li.appendChild(btnErase)
            btnEdit = document.createElement('button');
            iconE = document.createElement('i');
            iconE.classList.add('fas');
            iconE.classList.add('fa-pen');
            btnEdit.setAttribute('style', 'right: 4%; position : absolute')
            btnEdit.appendChild(iconE)
            btnEdit.classList.add('btn');
            btnEdit.addEventListener('click', () => {
                edit()
            });
            li.appendChild(btnEdit)

        }

        taskInput.value = null;
    }


}