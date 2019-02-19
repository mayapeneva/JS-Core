function solve() {
  let string = document.getElementById("string").value;
  let result = document.getElementById("result");

  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    if (char !== " ") {
      if (string.indexOf(char) < i) {        
        string = string.substr(0, i) + string.substr(i + 1);
      } 
    }
  }

  result.textContent = string;
}