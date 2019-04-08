const assert = require("chai").assert;
const isSymmetric = require("../05.CheckForSymmetry");

describe("IsSymmetric", function(){
    it("Should return true if arr is symetric", function () {
        let arr = [1, 2, 3, 2, 1];

        let actual = isSymmetric(arr);

        assert.isTrue(actual);
    });

    it("Should return false if arr includes string", function () {
        let arr = [1, 2, 3, 4, "five"];

        let actual = isSymmetric(arr);

        assert.isFalse(actual);
    });
    
    it("Should return false if arr is not symetric", function () {
        let arr = [1, 2, 3, 4, 2, 1];

        let actual = isSymmetric(arr);

        assert.isFalse(actual);
    });

    it("Should return false if arg is symetrical string", function () {
        let arg = 'ono';

        let actual = isSymmetric(arg);

        assert.isFalse(actual);
    });

    it("Should return true if array has one param only", function () {
        let arr = [1];

        let actual = isSymmetric(arr);

        assert.isTrue(actual);
    });

    it("Should return true if array is empty", function () {
        let arr = [];

        let actual = isSymmetric(arr);

        assert.isTrue(actual);
    });

    it("Should return false if no arg provided", function () {
        let actual = isSymmetric();

        assert.isFalse(actual);
    });
});