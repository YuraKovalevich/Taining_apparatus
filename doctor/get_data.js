let data = JSON.parse(localStorage.getItem("data"));

let Name = document.getElementById("name");
let Surname = document.getElementById("sec_name");

for (let i = 0; i < data.length; i++) {
  Name.innerHTML = data[i].name;
  Surname.innerHTML = data[i].surname;
}
