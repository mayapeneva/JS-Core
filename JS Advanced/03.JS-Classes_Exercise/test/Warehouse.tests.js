let Warehouse = require("../09.Warehouse");
let assert = require("chai").assert;

describe("Warehouse", function () {
    describe("constructor", function () {
        it("Should create instance if we pass correct number", function () {
            let capacity = 100;
    
            let actual = new Warehouse(capacity);
    
            assert.instanceOf(actual, Warehouse);
            assert.equal(actual.capacity, capacity);
        });
    
        it("Should throw error if we pass negative number", function () {
            let capacity = -100;
    
            let actual = function () {
                new Warehouse(capacity);
            };
    
            assert.throws(actual, "Invalid given warehouse space");
        });
    
        it("Should throw error if we pass 0", function () {
            let capacity = 0;
    
            let actual = function () {
                new Warehouse(capacity);
            };
    
            assert.throws(actual, "Invalid given warehouse space");
        });
    
        it("Should throw error if we pass string", function () {
            let capacity = "string";
    
            let actual = function () {
                new Warehouse(capacity);
            };
    
            assert.throws(actual, "Invalid given warehouse space");
        });
    
        it("Should create available products object when initialised", function () {
            let capacity = 100;
            let warehouse = new Warehouse(capacity);
            let type1 = "Food";
            let type2 = "Drink";
            
            let actual = warehouse.availableProducts;
    
            assert.isObject(actual);
            assert.isEmpty(actual[type1]);
            assert.isEmpty(actual[type2]);
            assert.property(actual, type1);
            assert.property(actual, type2);
        });
    });
    
    describe("addProduct", function () {
        let capacity = 100;
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(capacity);
        });

        let type = "Food";
        let product = "Banana";
        let quantity = 10;
    
        it("Adds the product when there is space", function () {
            let expected = JSON.stringify({"Banana": quantity});
    
            let actual = JSON.stringify(warehouse.addProduct(type, product, quantity));
            let actualQuantity = warehouse.availableProducts[type][product];
    
            assert.equal(actual, expected);
            assert.equal(actualQuantity, quantity);
        });
    
        it("Adds the quantity if product already exists", function () {
            warehouse.addProduct(type, product, quantity);
            warehouse.addProduct(type, product, quantity);
            let actual = warehouse.availableProducts[type][product];
    
            assert.equal(actual, (quantity * 2));
        });
    
        it("Throws error when there is not enough space", function () {
            warehouse = new Warehouse(1);
    
            let actual = function () {
                warehouse.addProduct(type, product, quantity);
            }
            
            assert.throws(actual, "There is not enough space or the warehouse is already full");
        });
    });
    
    describe("orderProducts", function () {
        let capacity = 100;
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(capacity);
        });
        
        let type = "Food";
        let product1 = "Banana";
        let product2 = "Orange";
        let product3 = "Apple";
        let quantity1 = 10;
        let quantity2 = 8;
        let quantity3 = 15;

        it("Returns null if there are no products", function () {
            let actual = warehouse.orderProducts(type);

            assert.isObject(actual);
            assert.isEmpty(actual);
        })
    
        it("Returns products sorted in desc order by quantity", function () {
            warehouse.addProduct(type, product1, quantity1);
            warehouse.addProduct(type, product2, quantity2);
            warehouse.addProduct(type, product3, quantity3);
            let expected = JSON.stringify({"Apple":15,"Banana":10,"Orange":8});
    
            let actual = JSON.stringify(warehouse.orderProducts(type));
    
            assert.equal(actual, expected);
        });

        it("Throws error if we pass invalid type", function () {
            type = "Home";
            
            let actual = function () {
                warehouse.orderProducts(type);
            };
    
            assert.throws(actual, "Cannot convert undefined or null to object");
        });
    });
    
    describe("occupiedCapacity", function () {
        let capacity = 100;
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(capacity);
        });
        
        let type = "Food";
        let product1 = "Banana";
        let product2 = "Orange";
        let product3 = "Apple";
        let quantity = 10;
    
        it("Returns 0 if there are no available products", function () {
            let expected = 0;
            
            let actual = warehouse.occupiedCapacity();
    
            assert.equal(actual, expected);
        });
    
        it("Returns correct figure if there are available products", function () {
            warehouse.addProduct(type, product1, quantity);
            warehouse.addProduct(type, product2, quantity);
            warehouse.addProduct(type, product3, quantity);
            let expected = 30;
            
            let actual = warehouse.occupiedCapacity();
    
            assert.equal(actual, expected);
        });
    });
    
    describe("revision", function () {
        let capacity = 100;
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(capacity);
        });
        
        let type1 = "Food";
        let type2 = "Drink"
        let product1 = "Banana";
        let product2 = "Orange";
        let quantity = 10;
    
        it("Returns correct string if there are no available products", function () {
            let expected = "The warehouse is empty";
            
            let actual = warehouse.revision();
    
            assert.equal(actual, expected);
        });

        it("Returns correct string if there is one available product of Food type only", function () {
            warehouse.addProduct(type1, product1, quantity);
            let expected = `Product type - [${type1}]\n- ${product1} ${quantity}\nProduct type - [${type2}]`;
            
            let actual = warehouse.revision();
    
            assert.equal(actual, expected);
        });

        it("Returns correct string if there is one available product of Drink type only", function () {
            warehouse.addProduct(type2, product1, quantity);
            let expected = `Product type - [${type1}]\nProduct type - [${type2}]\n- ${product1} ${quantity}`;
            
            let actual = warehouse.revision();
    
            assert.equal(actual, expected);
        });
    
        it("Returns correct string if there are available products of one type only", function () {
            warehouse.addProduct(type1, product1, quantity);
            warehouse.addProduct(type1, product2, quantity);
            let expected = `Product type - [${type1}]\n- ${product1} ${quantity}\n- ${product2} ${quantity}\nProduct type - [${type2}]`;
            
            let actual = warehouse.revision();
    
            assert.equal(actual, expected);
        });

        it("Returns correct string if there are available products of both types", function () {
            warehouse.addProduct(type1, product1, quantity);
            warehouse.addProduct(type2, product2, quantity);
            let expected = `Product type - [${type1}]\n- ${product1} ${quantity}\nProduct type - [${type2}]\n- ${product2} ${quantity}`;
            
            let actual = warehouse.revision();
    
            assert.equal(actual, expected);
        });
    });
    
    describe("scrapeAProduct", function () {
        let capacity = 100;
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(capacity);
        });
        
        let type = "Food";
        let product = "Banana";
        let quantity = 10;
    
        it("Throws error if product does not exist", function () {
            let expected = `${product} do not exists`;
            
            let actual = function () {
                warehouse.scrapeAProduct(product, quantity);
            };
    
            assert.throws(actual, expected);
        });
    
        it("Returns product with correct quantity if we scrape less than the available quantity", function () {
            let quantityToScrape = 5;
            warehouse.addProduct(type, product, quantity);
            let expected = JSON.stringify({"Banana": 5});
            
            let actual = JSON.stringify(warehouse.scrapeAProduct(product, quantityToScrape));
    
            assert.equal(actual, expected);
        });
    
        it("Returns product with 0 quantity if we scrape more than the available quantity", function () {
            let quantityToScrape = 15;
            warehouse.addProduct(type, product, quantity);
            let expected = 0;
            
            warehouse.scrapeAProduct(product, quantityToScrape);
            let actual = warehouse.availableProducts[type][product];
    
            assert.equal(actual, expected);
        });
    }); 
});