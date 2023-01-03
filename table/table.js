let data = JSON.parse(localStorage.getItem("data"));

let length = data.length;
let Name = document.getElementById("name");
let Surname = document.getElementById("sec_name");
let Age = document.getElementById("age");
let Sex = document.getElementById("sex");
for (let i = 0; i < length; i++) {
  let li = document.createElement("li");
  li.textContent = data[i].name;
  Name.appendChild(li);
}
for (let i = 0; i < length; i++) {
  let li = document.createElement("li");
  li.textContent = data[i].surname;
  Surname.appendChild(li);
}
for (let i = 0; i < length; i++) {
  let li = document.createElement("li");
  li.textContent = data[i].age;
  Age.appendChild(li);
}
for (let i = 0; i < length; i++) {
  let li = document.createElement("li");
  li.textContent = data[i].sex;
  Sex.appendChild(li);
}
function clean () {
localStorage.removeItem('data');
location.reload()
}