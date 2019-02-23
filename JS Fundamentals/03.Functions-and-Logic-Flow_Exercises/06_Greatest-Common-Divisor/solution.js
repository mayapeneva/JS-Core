function greatestCD() {
    let firstNumber = document.getElementById("num1");
    let secondNumber = document.getElementById("num2");
    let result = document.getElementById("result");
    result.textContent = getGCD(firstNumber.value, secondNumber.value);

    function getGCD(a, b) {
        if ( ! b) {
            return a;
        }
    
        return getGCD(b, a % b);
    }
}