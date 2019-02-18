function solve(){
  let buttons = document.getElementsByTagName("button");
  buttons[0].addEventListener("click", check);
  buttons[1].addEventListener("click", clear);

  let inputBoxes = document.querySelectorAll("tbody input");
  let resultElement = document.querySelector("#check p");
  let table = document.getElementsByTagName("table")[0];
  
  function check() {
    for (let i = 0; i < 3; i++) {
      if (inputBoxes[i].value === inputBoxes[i + 3].value
         || inputBoxes[i].value === inputBoxes[i + 6].value
         || inputBoxes[i + 3].value === inputBoxes[i + 6].value) {
        resultElement.textContent = "NOP! You are not done yet...";
        table.style.border = "2px solid darkred";
        return;
      }
    } 

    for (let i = 0; i < 9; i+=3) {
      if (inputBoxes[i].value === inputBoxes[i + 1].value
         || inputBoxes[i].value === inputBoxes[i + 2].value
         || inputBoxes[i + 1].value === inputBoxes[i + 2].value) {
        resultElement.textContent = "NOP! You are not done yet...";
        table.style.border = "2px solid darkred";
        return;
      }  
    }

    resultElement.textContent = "You solve it! Congratulations!";
    table.style.border = "2px solid green";
  }

  function clear() {
    inputBoxes.forEach((b) => b.value = "");
    resultElement.textContent = "";
    table.style.border = "none";
  }
}

