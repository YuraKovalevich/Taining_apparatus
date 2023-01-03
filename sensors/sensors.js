let data = JSON.parse(localStorage.getItem("data"));

const  zone1_press = document.querySelector('.zone1_press');
const  zone1_temp = document.querySelector('.zone1_temp');
const  zone1_pulse = document.querySelector('.zone1_pulse');
const  zone1_oxy = document.querySelector('.zone1_oxy');
const  zone2_press = document.querySelector('.zone2_press');
const  zone2_temp = document.querySelector('.zone2_temp');
const  zone2_pulse = document.querySelector('.zone2_pulse');
const  zone2_oxy = document.querySelector('.zone2_oxy');
let human = document.querySelector('.human');

const  press = document.querySelector('#press');
const  temp = document.querySelector('#temp');
const  pulse = document.querySelector('#pulse');
const  sat = document.querySelector('#sat');

if (data.pulse == "false"){
    pulse.style.display = 'none'
}
if (data.temp == "false"){
    temp.style.display = 'none'
}
if (data.press == "false"){
    press.style.display = 'none'
}
if (data.sat == "false"){
    sat.style.display = 'none'
}

zone1_press.ondragover = allowDrop;
zone2_press.ondragover = allowDrop;
zone1_temp.ondragover = allowDrop;
zone2_temp.ondragover = allowDrop;
zone1_pulse.ondragover = allowDrop;
zone2_pulse.ondragover = allowDrop;
zone1_oxy.ondragover = allowDrop;
zone2_oxy.ondragover = allowDrop;

function allowDrop (event) {
    event.preventDefault();
}
press.ondragstart = drag;
temp.ondragstart = drag;
pulse.ondragstart = drag;
sat.ondragstart = drag;

function drag (event) {
    event.dataTransfer.setData('id', event.target.id);
    event.path[1].style = " ";
}

zone1_press.ondrop = drop;
zone1_temp.ondrop = drop;
zone1_pulse.ondrop = drop;
zone1_oxy.ondrop = drop;
zone2_press.ondrop = drop;
zone2_temp.ondrop = drop;
zone2_pulse.ondrop = drop;
zone2_oxy.ondrop = drop;


function drop (event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));
    if (event.srcElement.parentElement.className == "human") {
        event.target.style = "background-color:rgba(0, 255, 34, 0.226)";
    }
    dataArr = [];
    const arrayVal = JSON.parse(localStorage.getItem("data1")) || [];
    for (let i = 0; i < 4; i++) {
      dataArr.push(itemId[i]);
    }
    arrayVal.push(itemId);
    localStorage.setItem("data1", JSON.stringify(arrayVal));
}













