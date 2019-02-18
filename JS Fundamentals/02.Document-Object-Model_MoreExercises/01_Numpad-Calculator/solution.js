function solve() {
    Array.from(document.querySelectorAll("tbody button")).forEach(btn => btn.addEventListener("click", clickEvent));

    let expressionElement = document.getElementById("expressionOutput");
    let resultElement = document.getElementById("resultOutput");
    function clickEvent(e) {
        let actionElement = e.target;
        if (actionElement.value === "=") {
            resultElement.textContent = calculateResult(expressionElement.textContent);
        } else if (actionElement.value == "Clear"){
            expressionElement.textContent = "";
            resultElement.textContent = "";
        } else if (isNaN(actionElement.value)) {
            expressionElement.textContent += " " + actionElement.value + " ";
        } else {
            expressionElement.textContent += actionElement.value;
        }
    }   
    
    function calculateResult(expression) {
        let result = 0;
        let number = 0;
        let sign = "";
        let expressionArray = expression.replace(/\s+/g, "").split("");
        for (let i = 0; i < expressionArray.length; i++) {
            let digit = expressionArray[i];
            if (/\d+/.test(digit)) {
                if (expressionArray[i + 1] === ".") {
                    number = Number(digit + "." + expressionArray[i + 2]);
                    i+=2;
                } else {
                    number = Number(digit);
                }

                if (sign){
                    switch (sign) {
                        case "+": result += number;                          
                            break;
                    
                        case "-": result -= number;                           
                            break;

                        case "*": result *= number;                          
                            break;

                        case "/": result /= number;                          
                            break;
                    }

                    sign = "";
                    number = 0;
                } else {
                    result += number;
                    number = 0;
                }
            } else{
               sign = digit;
            }            
        }

        return result;
    }
}