function solve() {
   let input = JSON.parse(document.getElementById("arr").value);
   let resultElement = document.getElementById("result");

   let desiredSize = Number(input.shift());
   for (let crystal of input) {
       displayResult(`Processing chunk ${crystal} microns`);

       let crystalSize = Number(crystal);
       let operationCounter = 0;
       while (crystalSize / 4 >= desiredSize - 1) {
           crystalSize /= 4;
           operationCounter++;
       }
       if (operationCounter > 0) {
            displayResult(`Cut x${operationCounter}`);
            operationCounter = 0;
            crystalSize = transporting(crystalSize);
       }       

        while (crystalSize * 0.8 >= desiredSize - 1) {
        crystalSize *= 0.8;
        operationCounter++;
        }
        if (operationCounter > 0) {
            displayResult(`Lap x${operationCounter}`);
            operationCounter = 0;
            crystalSize = transporting(crystalSize);
        }        

        while (crystalSize - 20 >= desiredSize - 1) {
        crystalSize -= 20;
        operationCounter++;
        }
        if (operationCounter > 0) {
            displayResult(`Grind x${operationCounter}`);
            operationCounter = 0;
            crystalSize = transporting(crystalSize);
        }

        while (crystalSize - 2 >= desiredSize - 1) {
        crystalSize -= 2;
        operationCounter++;
        }
        if (operationCounter > 0) {
            displayResult(`Etch x${operationCounter}`);
            operationCounter = 0;
            crystalSize = transporting(crystalSize);
        }

        if (crystalSize < desiredSize) {
            crystalSize += 1;
            displayResult(`X-ray x1`);
        }        

        displayResult(`Finished crystal ${crystalSize} microns`);
   }

   function displayResult(text){
    let p = document.createElement("p");
    p.textContent = text;
    resultElement.appendChild(p);
   }

   function transporting(crystalSize) {
       displayResult("Transporting and washing");
       return Math.floor(crystalSize);
   }
}