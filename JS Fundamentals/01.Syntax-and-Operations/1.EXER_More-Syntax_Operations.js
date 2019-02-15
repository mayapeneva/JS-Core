// 1. Daily Calorie Intake
function calorieIntake(arr, factor) {
    let sex = arr[0];
    let weight = Number(arr[1]);
    let height = Number(arr[2]);
    let age = Number(arr[3]);

    let calories = 0;
    if (sex === "m"){
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }
    else {
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }

    if (factor == 0) {
        calories *= 1.2;
    }
    else if(factor > 0 && factor <= 2){
        calories *= 1.375;
    }
    else if (factor > 2 && factor <=5){
        calories *= 1.55;
    }
    else if (factor > 5 && factor <= 7) {
        calories *= 1.725;
    }
    else{
        calories *= 1.90;
    }

    console.log(Math.round(calories))
}

// 2. Common Numbers {
function commonNumbers(arr1, arr2, arr3) {
    let commonElements = [];
    for (let item of arr1) {
        if (arr2.includes(item) && arr3.includes(item)) {
            commonElements.push(item);
        }
    }

    function getMedian(numbers) {
        let med = 0, numsLen = numbers.length;
        numbers.sort();

        if (numsLen % 2 === 0) {
            med = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else {
            med = numbers[(numsLen - 1) / 2];
        }

        return med;
    }

    console.log(`The common elements are ${commonElements.sort().join(", ")}.`);
    let sum = commonElements.reduce((a, b) => a + b) / commonElements.length;
    console.log(`Average: ${sum}.`);
    console.log(`Median: ${getMedian(commonElements)}.`);
}

// 3. Humanized Number
function humanizeNumbers(text) {
    let tokens = text.split('. ').join(',').split(', ').join(',').split(' ').join(',').split(',');
    for (let item of tokens){
        if (item % 1 === 0){
            console.log(ordinal_suffix_of(item))
        }
    }

    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
}

// 4. Perfect Number
function perfectNumber(arr) {
    let result = [];
    for (let num of arr) {
        num = Number(num);
        let sum = 0;
        for (let i = 1; i < num; i++){
            if (!(num % i)) {
                sum += i;
            }
        }

        if (sum === num) {
            result.push(num);
        }
    }

    console.log(result.join(", "));
}

// 5. Convert to Coins
function convertToCoins(num, coins) {
    num = Number(num);
    coins.sort((function(a, b){return b-a}));
    let result = [];
    for (let coin of coins){
        coin = Number(coin);
        let count = Math.floor(num / coin);
        for (i=0; i<count; i++) {
            result.push(coin);
        }

        num = num % coin;
    }

    console.log(result.join(", "))
}

convertToCoins(46, [10, 25, 5, 1, 2] )