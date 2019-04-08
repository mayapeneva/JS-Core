let createCalculator = require("../07.AddSubstract");
let assert = require("chai").assert;

describe("CreateCalculator", function(){
    it("Should have property add", function () {
        let calculator = createCalculator();

        assert.property(calculator, "add");
    });

    it("Should have property subtract", function () {
        let calculator = createCalculator();

        assert.property(calculator, "subtract");
    });

    it("Should have property get", function () {
        let calculator = createCalculator();

        assert.property(calculator, "get");
    });

    it("Should return 1 if we add 1", function () {
        let calculator = createCalculator();
        let expected = 1;

        calculator.add(1);
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return -1 if we add -1", function () {
        let calculator = createCalculator();
        let expected = -1;

        calculator.add(-1);
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return 1 if we add '1'", function () {
        let calculator = createCalculator();
        let expected = 1;

        calculator.add("1");
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return NaN if we add 'one'", function () {
        let calculator = createCalculator();

        calculator.add("one");
        let actual = calculator.get();

        assert.isNaN(actual);
    });

    it("Should return -1 if we substract 1", function () {
        let calculator = createCalculator();
        let expected = -1;

        calculator.subtract(1);
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return 1 if we substract -1", function () {
        let calculator = createCalculator();
        let expected = 1;

        calculator.subtract(-1);
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return -1 if we substract '1'", function () {
        let calculator = createCalculator();
        let expected = -1;

        calculator.subtract("1");
        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return NaN if we substract 'one'", function () {
        let calculator = createCalculator();

        calculator.subtract("one");
        let actual = calculator.get();

        assert.isNaN(actual);
    });

    it("Should return 0 if we use get()", function () {
        let calculator = createCalculator();
        let expected = 0;

        let actual = calculator.get();

        assert.equal(actual, expected);
    });

    it("Should return 1 if we add 2 and subtract 1", function () {
        let calculator = createCalculator();

        calculator.add(2);
        calculator.subtract(1)
        let actual = calculator.get();

        assert.equal(actual, 1);
    });
});