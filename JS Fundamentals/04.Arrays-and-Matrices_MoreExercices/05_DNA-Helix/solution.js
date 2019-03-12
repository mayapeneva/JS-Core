function solve() {
  let input = Number(document.getElementById("num").value);
  let resultElement = document.getElementById("result");

  let letters = "ATCGTTAGGG".split("");
  let index = 0;
  let star = "*";
  let dash = "-";

  let turns = Math.ceil(input / 4);
  let counter = 0;
  for (let i = 0; i < turns; i++) {
    let dashesCount = 0;
    for (let j = 2; j > 0; j--) {
      displayResult(`${star.repeat(j)}${letters[index++]}${dash.repeat(dashesCount)}${letters[index++]}${star.repeat(j)}`); 
      if (index >= letters.length) {
        index = 0;
      }
      dashesCount += 2; 
      
      counter++;
      if (counter >= input) {
        break;
      }
    }

    for (let k = 0; k < 2; k++) {
      displayResult(`${star.repeat(k)}${letters[index++]}${dash.repeat(dashesCount)}${letters[index++]}${star.repeat(k)}`); 
      if (index > letters.length) {
        index = 0;
      }
      dashesCount -= 2; 
      
      counter++;
      if (counter >= input) {
        break;
      }
    }

      if (counter >= input) {
        break;
      }
  }

  function displayResult(text){
    let p = document.createElement("p");
    p.textContent = text;
    resultElement.appendChild(p);
   }
}