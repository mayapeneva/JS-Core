let mathEnforcer = require("../04.MathEnforcer");
let assert = require("chai").assert;

describe("AddFive", function () {
    it("Should return undefined if we pass a string", function () {
        let param = "string";

        let actual = mathEnforcer.addFive(param);

        assert.isUndefined(actual);
    });

    it("Should return correct answer if we pass positive number", function () {
        let param = 5;
        let expected = 10;

        let actual = mathEnforcer.addFive(param);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass negative number", function () {
        let param = -5;
        let expected = 0;

        let actual = mathEnforcer.addFive(param);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass floating point number", function () {
        let param = 0.25;
        let expected = 5.25;

        let actual = mathEnforcer.addFive(param);

        assert.equal(actual, expected);
    });
});

describe("SubtractTen", function () {
    it("Should return undefined if we pass a string", function () {
        let param = "string";

        let actual = mathEnforcer.subtractTen(param);

        assert.isUndefined(actual);
    });

    it("Should return correct answer if we pass positive number", function () {
        let param = 10;
        let expected = 0;

        let actual = mathEnforcer.subtractTen(param);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass negative number", function () {
        let param = -10;
        let expected = -20;

        let actual = mathEnforcer.subtractTen(param);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass floating point number", function () {
        let param = -10.25;
        let expected = -20.25;

        let actual = mathEnforcer.subtractTen(param);

        assert.equal(actual, expected);
    });
});

describe("Sum", function () {
    it("Should return undefined if we pass a string as first param", function () {
        let param1 = "string";
        let param2 = 2;

        let actual = mathEnforcer.sum(param1, param2);

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass a string as second param", function () {
        let param1 = 1;
        let param2 = "string";

        let actual = mathEnforcer.sum(param1, param2);

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass two strings", function () {
        let param = "string";

        let actual = mathEnforcer.sum(param, param);

        assert.isUndefined(actual);
    });

    it("Should return correct answer if we pass two positive numbers", function () {
        let param1 = 1;
        let param2 = 2;
        let expected = 3;

        let actual = mathEnforcer.sum(param1, param2);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass negative numbers", function () {
        let param1 = -1;
        let param2 = -2;
        let expected = -3;

        let actual = mathEnforcer.sum(param1, param2);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass floating point numbers", function () {
        let param1 = 1.25;
        let param2 = 2.75;
        let expected = 4;

        let actual = mathEnforcer.sum(param1, param2);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass negative floating point numbers", function () {
        let param1 = -1.25;
        let param2 = -2.75;
        let expected = -4;

        let actual = mathEnforcer.sum(param1, param2);

        assert.equal(actual, expected);
    });
});