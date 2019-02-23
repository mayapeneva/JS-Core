function solve() {
   let number = Number(document.getElementById("num").value);
   let result = document.getElementById("result");

   for (let i = 1; i < number; i++) {
      if (number % i === 0) {
         result.textContent += (i + " ");
      }   
   }

   result.textContent += (number)
}