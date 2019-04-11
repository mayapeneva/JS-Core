let isOddOrEven = require("../02.EvenOrOdd");
let assert = require("chai").assert;

describe("IsOddOrEven", function () {
    it("Should return undefined if we pass number", function () {
       let param = 5;
       
       let actual = isOddOrEven(param);

       assert.isUndefined(actual);
    });

    it("Should return 'even' if we pass string with even length", function () {
        let param = "five";
        let expected = "even";
        
        let actual = isOddOrEven(param);
 
        assert.equal(actual, expected);
     });

     it("Should return 'odd' if we pass string with odd length", function () {
        let param = "three";
        let expected = "odd";
        
        let actual = isOddOrEven(param);
 
        assert.equal(actual, expected);
     });

     it("Should return 'even' if we pass string with 0 length", function () {
        let param = "";
        let expected = "even";
        
        let actual = isOddOrEven(param);
 
        assert.equal(actual, expected);
     })
})