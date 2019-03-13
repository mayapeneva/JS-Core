function solve() {
  let string = document.getElementById("str1").value;
  let casing = document.getElementById("str2").value;
  let resultElement = document.getElementById("result");

  let text = [];
  if (casing !== "Camel Case" && casing !== "Pascal Case") {
    resultElement.textContent = "Error!";
  } else {
    let words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0 && casing === "Camel Case") {
        text.push(word.toLowerCase());
      } else {
        text.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
      }      
    }

    resultElement.textContent = text.join("");
  }
}