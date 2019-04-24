class  Kitchen{
    constructor(budget){
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory =[];
    }

    loadProducts(arr){
        for (let line of arr) {
            let productTokens = line.split(" ");
            let name = productTokens[0];
            let quantity = Number(productTokens[1]);
            let price = Number(productTokens[2]);

            if (this.budget >= price) { 
                if (this.productsInStock.hasOwnProperty(name)) {
                    this.productsInStock[name] += quantity;
                } else {
                    this.productsInStock[name] = quantity;
                }
                
                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join("\n");
    }

    addToMenu(mealName, neededProducts, price){
        if (this.menu.hasOwnProperty(mealName)) {
            return `The ${mealName} is already in our menu, try something different.`
        } else {
            this.menu[mealName] = {
                "products": neededProducts, 
                "price": Number(price)
            };

            return`Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu(){
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";            
        } else {
            let result = Object.keys(this.menu).map(m => `${m} - $ ${this.menu[m].price}`).join("\n");
            return result + '\n';        
        }
    }

    makeTheOrder(mealName){
        if (!this.menu.hasOwnProperty(mealName)) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        } 
        
        for (let product of this.menu[mealName].products) {
            let [name, quantity] = product.split(" ");
            if (!this.productsInStock.hasOwnProperty(name)
                || this.productsInStock[name] < quantity) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }
        }

        for (let product of this.menu[mealName].products) {
            let [name, quantity] = product.split(" ");
            this.productsInStock[name] -= quantity;
        }

        this.budget += this.menu[mealName].price;

        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${this.menu[mealName].price}.`;
    };    
}

let kitchen = new Kitchen(1000);
console.log(kitchen.showTheMenu());
console.log(kitchen.loadProducts(["Banana 10 5", "Strawberries 50 30", "Honey 5 50", "Banana 5 5"]));
console.log(kitchen.addToMenu('Banana cake', ['Banana 83'], 7));
console.log(kitchen.addToMenu('Honey cake', ['Honey 5;', 'Strawberries 10'], 12));
console.log(kitchen.addToMenu('Banana cake', ['Banana 5'], 7));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Steak'));
console.log(kitchen.makeTheOrder('Banana cake'));
console.log(kitchen.makeTheOrder('Honey cake'));