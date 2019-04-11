let lookupChar = require("../03.CharLookup");
let assert = require("chai").assert;

describe("LookupChar", function () {
    it("Should return undefined if we don't pass params", function () {
        let actual = lookupChar();

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass string only", function () {
        let str = "string";

        let actual = lookupChar(str, null);

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass index only", function () {
        let index = 0;

        let actual = lookupChar(null, index);

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass number insted of string and string instead of index", function () {
        let str = "string";
        let index = 0;

        let actual = lookupChar(index, str);

        assert.isUndefined(actual);
    });

    it("Should return undefined if we pass floating point number for index", function () {
        let str = "string";
        let index = 0.15;

        let actual = lookupChar(str, index);

        assert.isUndefined(actual);
    });

    it("Should return 'Incorrect index' if we pass bigger index", function () {
        let str = "string";
        let index = 6;
        let expected = "Incorrect index";

        let actual = lookupChar(str, index);

        assert.equal(actual, expected);
    });

    it("Should return 'Incorrect index' if we pass minus index", function () {
        let str = "string";
        let index = -1;
        let expected = "Incorrect index";

        let actual = lookupChar(str, index);

        assert.equal(actual, expected);
    });

    it("Should return 'Incorrect index' if we pass empty string", function () {
        let str = "";
        let index = 0;
        let expected = "Incorrect index";

        let actual = lookupChar(str, index);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if we pass correct params with 0 index", function () {
        let str = "string";
        let index = 0;
        let expect = "s"

        let actual = lookupChar(str, index);

        assert.equal(actual, expect);
    });

    it("Should return correct answer if we pass correct params with last index", function () {
        let str = "string";
        let index = 5;
        let expect = "g"

        let actual = lookupChar(str, index);

        assert.equal(actual, expect);
    });
});