function solve() {
  let firstNumber = Number(document.getElementById("firstNumber").value);
  let secondNumber = Number(document.getElementById("secondNumber").value);
  let firstString = document.getElementById("firstString").value;
  let secondString = document.getElementById("secondString").value;
  let thirdString = document.getElementById("thirdString").value;

  let result = document.getElementById("result");

  for (let i = firstNumber; i <= secondNumber; i++) {
    let p = document.createElement("p");
    p.textContent += i;

    if (i % 3 === 0 && i % 5 === 0) {
      p.textContent += ` ${firstString}-${secondString}-${thirdString}`;
    } else if (i % 3 === 0) {
      p.textContent += " " + secondString;
    } else if (i % 5 === 0) {
      p.textContent += " " + thirdString;
    } 

    result.appendChild(p);
  }
}