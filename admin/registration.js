var mForm = document.getElementById("form");
mForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var elems = this.elements,
      dataArr = [];
    const arrayVal = JSON.parse(localStorage.getItem("data")) || [];
    for (var i = 0; i < elems.length; i++) {
      dataArr.push(elems[i].value);
    }
    let human = {
      name: dataArr[0],
      surname: dataArr[1],
      age: dataArr[2],
      sex: dataArr[3],
    };
    arrayVal.push(human);
    localStorage.setItem("data", JSON.stringify(arrayVal));
    mForm.reset()
  },
  false
);
