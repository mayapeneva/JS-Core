function solve() {
    let firstMatrix = JSON.parse(document.getElementById("mat1").value);
    let secondMatrix = JSON.parse(document.getElementById("mat2").value);
    let result = document.getElementById("result");

     for (let i = 0; i < firstMatrix.length; i++) {
        let p = document.createElement("p");
        let tempArr = [];
        for (let j = 0; j < secondMatrix.length; j++) {
            let tempResult = 0;
            for (let k = 0; k < firstMatrix[i].length; k++) {
                tempResult += (firstMatrix[i][k] * secondMatrix[j][k]);
            }

            tempArr.push(tempResult);
        } 
        p.textContent = tempArr.join(", ");
        result.appendChild(p);
    }
}