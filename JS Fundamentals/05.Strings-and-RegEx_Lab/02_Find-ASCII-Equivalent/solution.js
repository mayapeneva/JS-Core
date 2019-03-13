function solve() {
  let input = document.getElementById("str").value;
  let resultElement = document.getElementById("result");

  let words = input.split(" ");
  let numbers = [];
  for (let word of words) {
    if (isNaN(word)) {
      let outputNumber = [];
      for (let letter of word) {
        outputNumber.push(letter.charCodeAt(0));
      }

      display(outputNumber.join(" "));
    } else {
      numbers.push(word);
    }
  }

  let lastWord = String.fromCharCode(...numbers);
  display(lastWord);

  function display(text){
    let p = document.createElement("p");
    p.textContent = text;
    resultElement.appendChild(p);
  }
}