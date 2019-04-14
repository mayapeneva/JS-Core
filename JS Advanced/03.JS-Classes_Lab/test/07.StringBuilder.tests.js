let StringBuilder = require("../07.StringBuilder");
let assert = require("chai").assert;

describe("StringBuilderConstr", function () {
    let param = "string";
   it("Should be instantiated with passed string", function () {
       let actual = new StringBuilder(param);

       assert.exists(actual);
   });

   it("Should be instantiated without passing a string", function () {
        actual = new StringBuilder();

        assert.exists(actual);
    });

    it("Should keep the passed string when instantiated", function () {
        let sb = new StringBuilder(param);
        let exected = "string";

        actual = sb.toString();
 
        assert.equal(actual, exected);
    });
 
    it("Should have empty stringArray if instantiated without passing a string", function () {
        let sb = new StringBuilder();

        actual = sb._stringArray;
 
        assert.isArray(actual);
        assert.lengthOf(actual, 0)
     });
});

describe("Append", function () {
    it("Should append the passed string if SB was instantiated with string", function () {
        let initialParam = "string";
        let sb = new StringBuilder(initialParam);
        let param2 = "_one";
        sb.append(param2)
        let expected = "string_one"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should append the passed string if SB was instantiated without string", function () {
        let sb = new StringBuilder();
        let param = "one";
        sb.append(param)
        let expected = "one"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });
});

describe("Prepend", function () {
    it("Should prepend the passed string if SB was instantiated with string", function () {
        let initialParam = "string";
        let sb = new StringBuilder(initialParam);
        let param2 = "one_";
        sb.prepend(param2)
        let expected = "one_string"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should prepend the passed string if SB was instantiated without string", function () {
        let sb = new StringBuilder();
        let param = "one";
        sb.prepend(param)
        let expected = "one"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });
});

describe("InsertAt", function () {
    it("Should insert the passed string if SB was instantiated with string", function () {
        let initialParam = "string";
        let sb = new StringBuilder(initialParam);
        let param2 = "one";
        let index = 3;
        sb.insertAt(param2, index)
        let expected = "stroneing"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should insert the passed string if SB was instantiated without string", function () {
        let sb = new StringBuilder();
        let param = "one";
        let index = 3;
        sb.insertAt(param, index)
        let expected = "one"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });
});

 describe("Remove", function () {
    let initialParam = "string";

    it("Should remove elements from the specified index and with the specified length", function () {
        let sb = new StringBuilder(initialParam);
        let index = 1;
        let length = 2
        sb.remove(index, length)
        let expected = "sing"
 
        let actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should remove elements if we pass minus index", function () {
        let sb = new StringBuilder(initialParam);
        index = -1;
        length = 1
        sb.remove(index, length)
        expected = "strin"
 
        actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should not remove elements if we pass too big index", function () {
        let sb = new StringBuilder(initialParam);
        index = 20;
        length = 1
        sb.remove(index, length)
        expected = "string"
 
        actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });

    it("Should not remove elements if we pass 0 length", function () {
        let sb = new StringBuilder(initialParam);
        index = 0;
        length = 0
        sb.remove(index, length)
        expected = "string"
 
        actual = sb._stringArray.join("");
 
        assert.equal(actual, expected);
    });
});

describe("ToString", function () {
    it("Should return empty string if we pass empty string to ctor", function () {
        let param = "";
        let sb = new StringBuilder(param);
        let expected = "";

        let actual = sb.toString();
 
        assert.equal(actual, expected);
    });

    it("Should return the right string after all operations", function () {
        let sb = new StringBuilder();
        sb.append("tring");
        sb.prepend("s");
        sb.insertAt("one", 3);
        sb.remove(3, 3);
        let expected = "string";

        let actual = sb.toString();
 
        assert.equal(actual, expected);
    });
});

describe("VRFYParam", function () {
    it("Should throw error if param passed to ctor is a number", function () {
        let param = 1;
 
        assert.throws(function () { new StringBuilder(param)}, TypeError, "Argument must be string");
    });

    it("Should throw error if param passed to ctor is a arr", function () {
        let param = ["string"];
 
        assert.throws(function () { new StringBuilder(param)}, TypeError, "Argument must be string");
    });

    it("Should throw error if param passed to append is number", function () {
        let param = "1";
        let sb = new StringBuilder(param);
        let addParam = 1
 
        assert.throws(function () { sb.append(addParam) }, TypeError, "Argument must be string");
    });
});

describe("Prototypes", function () {
    it("All functions should be attached to prototype and be functions", function () {
        assert.isFunction(StringBuilder.prototype.append);
        assert.isFunction(StringBuilder.prototype.prepend);
        assert.isFunction(StringBuilder.prototype.insertAt);
        assert.isFunction(StringBuilder.prototype.remove);
        assert.isFunction(StringBuilder.prototype.toString);
    });
});