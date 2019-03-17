function solve() {
  let input = document.getElementById("str").value;
  let resultElement = document.getElementById("result");

  let sum = input;
  while (sum.length > 1){
    sum = sum.split("").reduce((a,b) => +a + +b).toString();
  }

  let end = input.length - sum;
  let numbers = input.slice(sum, end).split("");

  let result = [];
  while (numbers.length > 0) {
    let binary = numbers.splice(0, 8).join("");
    let decNumber = parseInt(binary, 2);
    let letter = String.fromCharCode(decNumber);
    result.push(letter);
  }

  let pattern = /[A-Za-z\s]/g;
  resultElement.textContent = result.filter(c => c.match(pattern)).join("");
}