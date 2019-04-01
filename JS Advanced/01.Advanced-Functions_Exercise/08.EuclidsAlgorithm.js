function eAlgorithm(firstNumber, secondNumber) {
    if (!secondNumber) {
        return Math.abs(firstNumber);
        
    } 
    
    return eAlgorithm(secondNumber, firstNumber % secondNumber);
}

console.log(eAlgorithm(252, 105));
