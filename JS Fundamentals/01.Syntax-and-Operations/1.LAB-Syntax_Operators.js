// 1. String Length
function stringLength(first, second, third) {
    let totalLength = first.length + second.length + third.length;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

// 2. Math Operations
function mathOperations(number1, number2, operator) {
    switch (operator){
        case"+": return number1 + number2; break;
        case"-": return number1 - number2; break;
        case"*": return number1 * number2; break;
        case"/": return number1 / number2; break;
        case"%": return number1 % number2; break;
        case"**": return number1 ** number2; break;
    }
}

// 3. Sum of Numbers
function sumOfNumbers(start, end) {
    start = Number(start);
    end = Number(end);

    let sum = 0;
    for(i=start; i<=end; i++){
        sum += i;
    }
    return sum;
}

// 4. Largest Number
function largestNumber(number1, number2, number3) {
    number1 = Number(number1);
    number2 = Number(number2);
    number3 = Number(number3);

    let result = Math.max(Math.max(number1, number2), number3);
    console.log("The largest number is " + result + ".");
}

// 5. Circle Area
function circleArea(input) {
    if(typeof(input) == "number"){
        let area = Math.PI * input * input;
        console.log(area.toFixed(2));
    }
    else   {
        console.log("We can not calculate the circle area, because we receive a " + typeof(input) + ".");
    }
}

circleArea(2)