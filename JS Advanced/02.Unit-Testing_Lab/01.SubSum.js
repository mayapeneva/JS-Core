function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)
        || arr.some(n => isNaN(n))) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let arrToSum = arr.slice(startIndex, endIndex + 1).map(Number);
    return arrToSum.reduce((a,b) => a + b);
}