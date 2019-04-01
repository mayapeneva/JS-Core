let solution = (function () {
    let add = ([x1, y1], [x2, y2]) => {
        return [(x1 + x2), (y1 + y2)];
    }

    let multiply = ([x, y], a) =>  {
        return [(x * a), (y * a)];
    }

    let length = ([x, y]) => {
        return Math.sqrt((x ** 2) + (y ** 2));
    }

    let dot = ([x1, y1], [x2, y2]) => {
        return (x1 * x2) + (y1 * y2);
    }

    let cross = ([x1, y1], [x2, y2]) => {
        return (x1 * y2) - (x2 * y1);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();