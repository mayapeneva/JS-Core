function solve() {
  let startingNumber = Number(document.getElementById("num1").value);
  let multiplier = Number(document.getElementById("num2").value);
  let result = document.getElementById("result");

  if (startingNumber > multiplier) {
    result.textContent = "Try with other numbers.";
  } else {
    for (let i = startingNumber; i <= multiplier; i++) {
      let p = document.createElement("p");
      p.textContent = `${i} * ${multiplier} = ${i*multiplier}`;
      result.appendChild(p);
    }
  }
}