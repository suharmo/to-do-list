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
    ul.setAttribute('style', 'background: rgba(255, 255, 255, 0.603);border: 5px solid white')
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

function verifyB(verify) {
    var parent = verify.parentElement
    if (parent.style.textDecoration == 'none') {
        parent.setAttribute('style', 'text-decoration: line-through; position:relative; display:flex')
    } else {
        parent.setAttribute('style', 'text-decoration: none!important; position:relative; display:flex')
    }
}

function erase(btnErase) {
    var list = btnErase.parentElement;
    var parent = list.parentElement;
    parent.removeChild(list)
    console.log(parent, list)
}
var input;
var valuein;
var boo = false;

function edit(btnEdit) {
    var list = btnEdit.parentElement;
    var h1 = list.children[0];
    console.log(h1)
    if (list.dataset.id && boo) {
        h1.innerHTML = input.value;
        console.log(input.value)
        boo = false
    } else if (list.dataset.id ) {
        
        let chil = list.children[0]
        list.dataset.id = chil.innerHTML
        chil.innerHTML = '<input type="text" id="inputEdit">';
        input = document.getElementById('inputEdit');
        input.value = list.dataset.id
        boo = true;
        console.log(chil)
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
            li.setAttribute('style', 'position: relative!important');
            li.innerHTML = `<h1></h1><button id='verify' style="right: 12%; position : absolute" class="btn" onclick="verifyB(this)"><i class="fas fa-check"></i></button><button id='erase' style="right: 8%; position : absolute" class="btn" onclick="erase(this)"><i class="fas fa-times"></i></button><button id='edit' style="right: 3%; position : absolute" class="btn" onclick="edit(this)"><i class="fas fa-pen"></i></button>`
            h1 = li.children[0]
            h1.innerHTML = inn;
            li.dataset.id = h1.innerHTML
            li.setAttribute('style', 'position: relative; display : flex')
            uls[i].appendChild(li);
        }
        taskInput.value = null;
    }


}