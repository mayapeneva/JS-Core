function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  let newArr = [];
  for (let index in arr) {
    if (index % 2 === 0) {
      newArr.push(arr[index]);
    }
  }
    result.textContent = newArr.join(" x ");
}