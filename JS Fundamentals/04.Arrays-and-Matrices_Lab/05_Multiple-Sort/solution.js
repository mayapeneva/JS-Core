function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  let firstDiv = document.createElement("div");
  firstDiv.textContent = arr.sort((a, b) => a - b).join(", ");
  result.appendChild(firstDiv);

  let secondDiv = document.createElement("div");
  secondDiv.textContent = arr.sort().join(", ");
  result.appendChild(secondDiv);
}