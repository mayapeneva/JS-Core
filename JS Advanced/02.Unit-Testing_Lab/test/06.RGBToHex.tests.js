let rgbToHexColor = require("../06.RGBToHex");
let assert = require("chai").assert;

describe("RGBToHexColor", function(){
    it("Should return correct answer if all colors are valid", function () {
        let red = 215;
        let green = 240;
        let blue = 250;
        let expected = "#D7F0FA";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return undefined if red is string", function () {
        let red = "two";
        let green = 240;
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if green is string", function () {
        let red = 215;
        let green = "two";
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if blue is string", function () {
        let red = 215;
        let green = 240;
        let blue = "two";

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if red is bigger than 255", function () {
        let red = 300;
        let green = 240;
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if green is bigger than 255", function () {
        let red = 215;
        let green = 300;
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if blue is bigger than 255", function () {
        let red = 215;
        let green = 240;
        let blue = 300;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if red is smaller than 0", function () {
        let red = -2;
        let green = 240;
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if green is smaller than 0", function () {
        let red = 215;
        let green = -2;
        let blue = 250;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return undefined if blue is smaller than 0", function () {
        let red = 215;
        let green = 240;
        let blue = -2;

        let actual = rgbToHexColor(red, green, blue);

        assert.isUndefined(actual);
    });

    it("Should return correct answer if red is 0", function () {
        let red = 0;
        let green = 240;
        let blue = 250;
        let expected = "#00F0FA";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if green is 0", function () {
        let red = 215;
        let green = 0;
        let blue = 250;
        let expected = "#D700FA";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if blue is 0", function () {
        let red = 215;
        let green = 240;
        let blue = 0;
        let expected = "#D7F000";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if red is 255", function () {
        let red = 255;
        let green = 240;
        let blue = 250;
        let expected = "#FFF0FA";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if green is 255", function () {
        let red = 215;
        let green = 255;
        let blue = 250;
        let expected = "#D7FFFA";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });

    it("Should return correct answer if blue is 255", function () {
        let red = 215;
        let green = 240;
        let blue = 255;
        let expected = "#D7F0FF";

        let actual = rgbToHexColor(red, green, blue);

        assert.equal(actual, expected);
    });
});