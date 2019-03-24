function makeCoffee(arr) {
    let prices = {
        "coffee caffeine": 0.8,
        "coffee decaf": 0.9,
        "tea": 0.8
    };

    let totalMoney = 0;
    for (let order of Array.from(arr)) {
        let orderInfo = order.split(", ");
        let coins = parseFloat(orderInfo.shift());
        let drink = orderInfo.shift();
        
        let price = 0;
        if (drink === "coffee") {
            price = prices[drink + " " + orderInfo.shift()];
        } else {
            price = prices[drink];
        }

        if (orderInfo[0] === "milk") {
            orderInfo.shift();
            price += +(price * 0.10).toFixed(1);
        }

        if (orderInfo[0] != 0) {
            price += 0.10;
        }

        if (coins >= price) {
            let change = coins - price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            totalMoney += price;
            
        } else {
            let moneyNeeded = price - coins;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);    
}