function solve() {
  let degrees = Number(document.getElementById("num1").value);
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");

  if (type.toLowerCase() === "celsius") {
    result.textContent = Math.round(degrees * 9 / 5 + 32);
  } else if (type.toLowerCase() === "fahrenheit") {
    result.textContent = Math.round((degrees -32) * 5 / 9);
  } else {
    result.textContent = "Error!";
  }
}