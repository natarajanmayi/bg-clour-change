const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

const wrap = document.getElementById("wrap");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", changeColor);

function changeColor() {
  let hexCode = "#";
  for (let i = 1; i <= 6; i++) {
    hexCode = hexCode + randomHexValue();
  }

  wrap.style.backgroundColor = hexCode;
  colorText.innerText = hexCode;
}

function randomHexValue() {
  let randomHex = Math.floor(Math.random() * 16);
  return hex[randomHex];
}

let name = "nehaz";
name = "arun";
console.log(name);
