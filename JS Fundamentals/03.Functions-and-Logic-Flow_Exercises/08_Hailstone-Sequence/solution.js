function getNext() {
    let number = Number(document.getElementById("num").value);
    let result = document.getElementById("result");
    
    let output = `${number} `;
    if (number !== 0) {
        while (number !== 1) {
            if (number % 2 === 0){
                number /= 2;
                output += `${number} `;
                console.log(output)
            } else {
                number *= 3;
                number += 1;
                output += `${number} `;
                console.log(output)
            }
        }

        result.textContent = output;
    }
}