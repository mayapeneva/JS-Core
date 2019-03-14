function solve() {
  let input = JSON.parse(document.getElementById("arr").value);
  let resultElement = document.getElementById("result");

  let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d{1} \d{3} \d{3}|\+359-\d{1}-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
  for (let line of input) {
    let match = pattern.exec(line);
    if (match) {
      display(`Name: ${match[1]}`);
      display(`Phone Number: ${match[2]}`);
      display(`Email: ${match[3]}`);
    } else {
      display("Invalid data");
    }

    display("- - -")
  }

  function display(text){
    let p = document.createElement("p");
    p.textContent = text;
    resultElement.appendChild(p);
  }
}