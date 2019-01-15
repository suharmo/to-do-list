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
            li.innerHTML = inn
            li.setAttribute('style', 'position: relative')
            uls[i].appendChild(li);
            var x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            x.setAttribute('style', 'position: absolute; right: 0')
            li.appendChild(x);
        }

        taskInput.value = null;
    }

    // console.log(li);
}
// var nascondi = document.querySelectorAll('.nascondi');
// nascondi.addEventListener('click', dropDownList())
// function dropDownList(){
// console.log(li)
//    if(.style.diplay === "block"){
//     li.setAttribute('style','display: none')
//    }else {
//     li.setAttribute('style','display: block')
//    }
// }