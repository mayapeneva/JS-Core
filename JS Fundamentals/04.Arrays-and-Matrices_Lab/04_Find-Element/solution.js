function solve() {
  let number = document.getElementById("num").value;
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i].toString();
    if (arrElement.includes(number)) {
      resultArr.push(`true -> ${arrElement.indexOf(number)}`);
    } else {
      resultArr.push(`false -> ${arrElement.indexOf(number)}`);
    }
  }

  result.textContent = resultArr.join(",");
}