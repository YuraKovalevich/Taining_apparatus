var mForm = document.getElementById("form")
let date = document.getElementById('date')
let type = document.getElementById('type')
let pulse = document.getElementById('pulse')
let temp = document.getElementById('temp')
let press = document.getElementById('press')
let sat = document.getElementById('sat')

let name = document.querySelector('#name')
let surname = document.getElementById('sec_name')


mForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if(pulse.checked == true) {
        pulse.value = true
    } else {pulse.value = false}
    if(temp.checked == true) {
        temp.value = true
    } else {temp.value = false}
    if(press.checked == true) {
        press.value = true
    } else {press.value = false}
    if(sat.checked == true) {
        sat.value = true
    } else {sat.value = false}
        let exam = {
            date: date.value,
            type: type.value,
            pulse: pulse.value,
            temp: temp.value,
            press: press.value,
            sat: sat.value
            
          };
          localStorage.setItem("data", JSON.stringify(exam));

  },
  false
);
document.querySelector(".ex").onclick = function() {
    document.location.href = "exam.html"
}
function LocalClear () {
    localStorage.removeItem('data');
    }

