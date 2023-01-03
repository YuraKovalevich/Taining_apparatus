let data = JSON.parse(localStorage.getItem("data"));

let daata = document.getElementById("date");
let Type = document.getElementById("type");

daata.innerHTML = data.date
Type.innerHTML = data.type

let pulse = document.getElementById('pulse')
let temp = document.getElementById('temp')
let press = document.getElementById('press')
let sat = document.getElementById('sat')

if (data.pulse == "true") {
    pulse.innerHTML = "Пульс"
}
if (data.temp == "true") {
    temp.innerHTML = "Температура"
}
if (data.press == "true") {
    press.innerHTML = "Кровяное давление"
}
if (data.sat == "true") {
    sat.innerHTML = "Сатурация"
}
