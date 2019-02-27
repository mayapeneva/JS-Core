function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  let newArr = arr.map(word => word.split("").reverse().join("")).map(word => word[0].toUpperCase() + word.toString().substring(1));
  result.textContent = newArr.join(" ");
}