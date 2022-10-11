const display = document.getElementById("display");
let valInp = 0;

if (parseInt(document.getElementById("inputVal").value, 10) > 0) {
  document.getElementById("plus").onclick = function counter_add() {
    const number = display.innerText;
    display.innerText =
      parseInt(document.getElementById("inputVal").value, 10) + 1;

    if (number < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
  };
} else {
  document.getElementById("plus").onclick = function counter_add() {
    const number = display.innerText;
    display.innerText = parseInt(number, 10) + 1;
    if (number < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
  };
}

if (parseInt(document.getElementById("inputVal").value, 10) > 0) {
  document.getElementById("minus").onclick = function counter_minus() {
    let valInp = parseInt(document.getElementById("inputVal").value, 10);
    const number = display.innerText;
    display.innerText = parseInt(number, 10) - valInp;
    if (number < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
  };
} else {
  document.getElementById("minus").onclick = function counter_minus() {
    const number = display.innerText;
    display.innerText = parseInt(number, 10) - 1;
    if (number < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "black";
    }
  };
}
