let data = JSON.parse(localStorage.getItem("data1"));

let Pulse = document.getElementById("Graphic_p");
let Temp = document.getElementById("Graphic_t");
let Press = document.getElementById("Graphic_pr");
let Sat = document.getElementById("Graphic_s");

let Sens_info = {
  pulse: false,
  temp: false,
  press: false,
  sat: false,
};
if (data == null){
  Pulse.style.display = "none";
  Temp.style.display = "none";
  Press.style.display = "none";
  Sat.style.display = "none";
}

for (let i = 0; i < 4; i++) {
  if (data[i] == "pulse") {
    Sens_info.pulse = true;
  }
  if (data[i] == "temp") {
    Sens_info.temp = true;
  }
  if (data[i] == "press") {
    Sens_info.press = true;
  }
  if (data[i] == "sat") {
    Sens_info.sat = true;
  }
}

if (Sens_info.pulse == false) {
  Pulse.style.display = "none";
}
if (Sens_info.temp == false) {
  Temp.style.display = "none";
}
if (Sens_info.press == false) {
  Press.style.display = "none";
}
if (Sens_info.sat == false) {
  Sat.style.display = "none";
}

function Storage_clear() {
  localStorage.removeItem('data1');
  }