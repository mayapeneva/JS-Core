function sum() {
    return result = {
        selector1: "",
        selector2: "",
        resultSelector: "",

        init: function (selector1, selector2, resultSelector) {
            this.selector1 = selector1;
            this.selector2 = selector2;
            this.resultSelector = resultSelector;
        },

        add: function () {            
            let num1 = parseFloat(document.querySelector(this.selector1).value);
            let num2 = parseFloat(document.querySelector(this.selector2).value);
            result = document.querySelector(this.resultSelector).value = num1 + num2;
        },

        subtract: function () {
            let num1 = parseFloat(document.querySelector(this.selector1).value);
            let num2 = parseFloat(document.querySelector(this.selector2).value);
            result = document.querySelector(this.resultSelector).value = num1 - num2;
        }
    };
}