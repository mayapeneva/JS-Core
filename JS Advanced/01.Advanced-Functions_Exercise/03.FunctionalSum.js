let add = (function () {
    let sum = 0;
    function add (number) {
        sum += +number; 
        console.log(sum);
        
        return add;             
    }

    add.toString = function () {
        return sum;
    }

    return add;
})();

add(1)(6)(-3);
