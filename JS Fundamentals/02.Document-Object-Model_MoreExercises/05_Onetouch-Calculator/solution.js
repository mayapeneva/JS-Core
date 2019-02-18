function solve() {
   let numbers = Array.from(document.getElementsByClassName("numbers"));
   let operators = Array.from(document.getElementsByClassName("operators"));
   let equal = document.getElementById("equalSign");

   numbers.forEach(n => n.addEventListener("mouseover", getNumber));
   operators.forEach(o => o.addEventListener("click", getOperator));
   equal.addEventListener("click", getResult);

   let resultElement = document.getElementById("result");
   function getNumber(e) {
      let number = e.target.textContent;
      resultElement.textContent += number;
   }

   function getOperator(e) {
      let operator = e.target.textContent;
      resultElement.textContent += operator;
   }

   function getResult() {
      let line = resultElement.textContent;
      let isLineCorrect = /^\d+[\+\-*\/]\d+=$/.test(line);
      if (isLineCorrect) {
         let numbersToCalculate = line.split("+").join("/").split("-").join("/").split("*").join("/").split("/");
         let firstNum = numbersToCalculate[0];
         let secondNum = numbersToCalculate[1].split("=").join("");
         if (line.includes("+")) {
            resultElement.textContent += firstNum + secondNum;
         }  else if (line.includes("-")) {
            resultElement.textContent += firstNum - secondNum;
         }  else if (line.includes("*")) {
            resultElement.textContent += firstNum * secondNum;
         }  else if (line.includes("/")) {
            resultElement.textContent += firstNum / secondNum;
         } 
         
         setTimeout(() => {
            resultElement.textContent = "";
         }, 5000);
      }
   }
}