// 1. I like JavaScript
function greeting(name) {
    console.log(`Hello ${name}, do you like JavaScript?`)
}

// 2. Even Numbers 1 to N
function evenNumbers(end) {
    end = Number(end);
    for (let i=1; i<=end; i++){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// 3. Fruit
function buyFruit(fruit, weightInGr, pricePerKg) {
    weight = (weightInGr/1000);

    let money = (weight * pricePerKg).toFixed(2);
    console.log(`I need ${money} leva to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

// 4. Fitness Rates
function goToFitness(day, service, time) {
    let money;
    switch (service) {
        case"Fitness":
            if (day == "Saturday" || day == "Sunday") {
                money = 8.00;
            } else{
                if (time <= 15.00) {
                    money = 5.00;
                } else{
                    money = 7.50;
                }
            }; break;
        case"Sauna":
            if (day == "Saturday" || day == "Sunday") {
                money = 7.00;
            } else{
                if (time <= 15.00) {
                    money = 4.00;
                } else{
                    money = 6.50;
                }
            }; break;
        case"Instructor":
            if (day == "Saturday" || day == "Sunday") {
                money = 15.00;
            } else{
                if (time <= 15.00) {
                    money = 10.00;
                } else{
                    money = 12.50;
                }
            }; break;
    }

    console.log(money);
}

// 5. Greatest Common Divisor
function divide(number1, number2) {
    while (number1 !== 0 && number2 !== 0)
    {
        if (number1 > number2)
            number1 %= number2;
        else
            number2 %= number1;
    }

    return number1 === 0 ? number2 : number1;
}

// 6. Same numbers
function sameDigits(number) {
    function sumAllDigits(){
        let sum = 0;
        number = Number(number);
        while (number) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }

        return sum;
    }

    number = number.toString();
    let digit = Number(number[0]);
    let result = true;
    for(let i=0; i<number.length; i++){
        num = Number(number[i]);
        if (digit !== num) {
            result = false;
            break;
        }
    }

    console.log(result);
    console.log(sumAllDigits(number))
}

// 7. Time to Walk
function timeToWalk(stepsToUni, footprintLength, speed) {
    let distanceInMeters = stepsToUni * footprintLength;
    let walkingTimeInHours = (distanceInMeters / 1000) / speed;
    let totalTimeInMin = (walkingTimeInHours * 60) + Math.floor(distanceInMeters / 500)
    let totalTimeInSec = Math.ceil(totalTimeInMin * 60);
    let date = new Date(null);
    date.setSeconds(totalTimeInSec);
    console.log(date.toISOString().substr(11, 8))
}

// 8. Flight Timetable
function flightTimetable(arr) {
    let type = arr[0];
    let town = arr[1];
    let time = arr[2];
    let flightNum = arr[3];
    let gateNum = arr[4];

    console.log(`${type}: Destination - ${town}, Flight - ${flightNum}, Time - ${time}, Gate - ${gateNum}`);
}

// 9. Calorie Object
function calorie(arr) {
    let result = {};
    for (let i=0; i<arr.length-1; i+=2){
        let food = arr[i];
        let calories = Number(arr[i+1]);
        result[food]=calories;
    }

    console.log(result);
}

//10. Coffee Machine
function coffeeMachine(arr) {
    let prices = {
        "coffee caffeine": 0.80,
        "coffee decaf": 0.90,
        "tea": 0.80};
    let totalMoney = 0;

    for (let order of arr) {
        let orderItems = order.split(", ");
        let money = Number(orderItems[0])
        let drink = orderItems[1];
        let price = 0;
        if (drink === "coffee") {
            price = prices[drink + " " + orderItems[2]];
            orderItems.splice(2, 1);
;        } else{
            price = prices[drink];
        }

        if (orderItems[2] === "milk") {
            price += 0.10;
            orderItems.splice(2, 1);
        }

        if (orderItems[2] != 0){
            price += 0.10;
        }

        if (money < price) {
            let moneyNeeded = price - money;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        } else {
            let change = money - price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalMoney += price;
        }
    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}