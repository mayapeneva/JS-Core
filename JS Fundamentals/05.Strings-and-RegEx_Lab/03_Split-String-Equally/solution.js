function solve() {
  let string = document.getElementById("str").value;
  let number = Number(document.getElementById("num").value);
  let resultElement = document.getElementById("result");

  let turns = Math.ceil(string.length/number);
  let index = 0;
  let result = [];
  for (let i = 0; i < turns; i++) {
    let item = [];
    for (let j = 0; j < number; j++) {
      item.push(string[index++])
      if (index >= string.length) {
        index = 0;
      }
    }

    result.push(item.join(""));    
  }

  resultElement.textContent = result.join(" ");
} 