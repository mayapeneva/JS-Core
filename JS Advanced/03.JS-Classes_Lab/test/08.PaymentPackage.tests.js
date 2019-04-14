let PaymentPackage = require("../08.PaymentPackage");
let assert = require("chai").assert;

describe("PaymentPackageCtor", function () {
    let name = "pen";
    let value = 2;

    it("Should be instantiated if we pass string and number", function () {
        let actual = new PaymentPackage(name, value);

        assert.exists(actual);
    });

    it("Should throw error if we pass number and string", function () {
        let actual = function () {
            new PaymentPackage(value, name); 
        };

        assert.throws(actual, "Name must be a non-empty string");
    });

    it("Should throw error if we pass string only", function () {
        let actual = function () {
            new PaymentPackage(name, null); 
        };

        assert.throws(actual, "Value must be a non-negative number");
    });

    it("Should throw error if we pass number only", function () {
        let actual = function () {
            new PaymentPackage(null, value); 
        };

        assert.throws(actual, "Name must be a non-empty string");
    });

    it("Should throw error if we don't pass params", function () {
        let actual = function () {
            new PaymentPackage(); 
        };

        assert.throws(actual, "Name must be a non-empty string");
    });
});

describe("PaymentPackageProperties", function () {
    let name = "pen";
    let value = 2;

    it("Should set correct name when instantiated with correct params", function () {
        let expected = name;

        let actual = new PaymentPackage(name, value).name; 

        assert.equal(actual, expected);
    });
    
    it("Should set correct value when instantiated with correct params", function () {
        let expected = value;

        let actual = new PaymentPackage(name, value).value; 

        assert.equal(actual, expected);
    });

    it("Should set the VAT value to 20", function () {
        let expected = 20;

        let actual = new PaymentPackage(name, value).VAT; 

        assert.equal(actual, expected);
    });

    it("Should set the active value to true", function () {
        let expected = true;

        let actual = new PaymentPackage(name, value).active; 

        assert.equal(actual, expected);
    });
    
    it("Should set name correctly if we try to change the it's value to correct string", function () {
        let pp = new PaymentPackage(name, value);         
        name = "rubber";
        pp.name = name;

        let actual = pp.name;

        assert.equal(actual, name);
    });

    it("Should throw error if try to set the name to empty string", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.name = "";
        };

        assert.throws(actual, "Name must be a non-empty string");
    });

    it("Should throw error if try to set the name to array", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.name = [];
        };

        assert.throws(actual, "Name must be a non-empty string");
    });

    it("Should set value correctly if we try to change the it's value to correct number", function () {
        let pp = new PaymentPackage(name, value);         
        value = 10;
        pp.value = value;

        let actual = pp.value;

        assert.equal(actual, value);
    });

    it("Should throw error if try to set the value to negative number", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.value = -10;
        };

        assert.throws(actual, "Value must be a non-negative number");
    });
    

    it("Should throw error if try to set the value to array", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.value = [];
        };

        assert.throws(actual, "Value must be a non-negative number");
    });

    it("Should set VAT correctly if we try to change the it's value to correct number", function () {
        let pp = new PaymentPackage(name, value);         
        let VAT = 21;
        pp.VAT = VAT;

        let actual = pp.VAT;

        assert.equal(actual, VAT);
    });

    it("Should throw error if try to set the VAT to string", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.VAT = "21";
        };

        assert.throws(actual, "VAT must be a non-negative number");
    });

    it("Should throw error if try to set the VAT to negative number", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.VAT = -21;
        };

        assert.throws(actual, "VAT must be a non-negative number");
    });

    it("Should set active correctly if we try to change the it's value to boolean", function () {
        let pp = new PaymentPackage(name, value);  
        let active = false;
        pp.active = active;

        let actual = pp.active;

        assert.equal(actual, active);
    });

    it("Should throw error if we try to set the active to string", function () {
        let pp = new PaymentPackage(name, value); 

        let actual = function () {
            pp.active = "correct";
        };

        assert.throws(actual, "Active status must be a boolean");
    });
});

describe("PaymentPackageToString", function () {
    let name = "pen";
    let value = 20;
    let pp = new PaymentPackage(name, value); 

    it("Should print correct info if active is true", function () {
        let expected = "Package: pen\n- Value (excl. VAT): 20\n- Value (VAT 20%): 24";

        let actual = pp.toString();

        assert.equal(actual, expected);
    });

    it("Should print correct info if active is false", function () {
        pp.active = false;
        let expected = "Package: pen (inactive)\n- Value (excl. VAT): 20\n- Value (VAT 20%): 24";

        let actual = pp.toString();
        
        assert.equal(actual, expected);
    });
});