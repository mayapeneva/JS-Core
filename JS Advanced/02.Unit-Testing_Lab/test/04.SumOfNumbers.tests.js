const assert = require("chai").assert;
const sum = require("../04.SumOfNumbers");

describe("SumOfNumbers", function(){
    it("Should sum all numbers in an array", function () {
        let arr = [1, 2, 3, 4, 5];
        let expected = 15;

        let actual = sum(arr);

        assert.equal(actual, expected);
    });
    it("Should return 0 if array empty", function () {
        let arr = [];
        let expected = 0;

        let actual = sum(arr);

        assert.equal(actual, expected);
    });
    it("Should return NaN if the array contains a NaN", function () {
        let arr = [1, "two", 3, 4, 5];

        let actual = sum(arr);

        assert.isNaN(actual);
    });
});