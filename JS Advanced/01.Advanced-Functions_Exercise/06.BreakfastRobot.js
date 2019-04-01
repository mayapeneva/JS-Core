let manager = (function () {
    let recipies = {
        apple: {
            carbohydrate: 1, 
            flavour: 2
        },
        coke: {
             carbohydrate: 10, 
             flavour: 20
         },
         burger: {
             carbohydrate: 5, 
             fat: 7,
             flavour: 3
         },
         omelet: {
             protein: 5, 
             fat: 1,
             flavour: 1
         },
         cheverme: {
             protein: 10,
             carbohydrate: 10, 
             fat: 10, 
             flavour: 10
         }
    }; 
 
    let stock = {
         protein: 0,
         carbohydrate: 0, 
         fat: 0, 
         flavour: 0
    }
 
     return function (input) {
         let args = input.split(" ");
         switch (args[0]) {
             case "restock": 
                 stock[args[1]] += Number(args[2]);                
                 return "Success";
         
             case "prepare": 
                 let recipe = args[1];
                 let quantity = Number(args[2]);
                 for (let elem of Object.keys(recipies[recipe])) {
                     if(stock[elem] < (recipies[recipe][elem] * quantity)) {
                         return `Error: not enough ${elem} in stock`;
                     }
                 }
         
                 for (let elem of Object.keys(recipies[recipe])) {
                     stock[elem] -= recipies[recipe][elem] * quantity;
                 }
         
                 return "Success"
 
             case "report": 
                 return Object.keys(stock).map( k => `${k}=${stock[k]}`).join(" ");
         }
     };
 })();