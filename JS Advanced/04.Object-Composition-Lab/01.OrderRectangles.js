function order(input) {
    let result = [];
    for (const arr of input) {
        let [width, height] = arr;

        let area = function () {
            return parseInt(width) * parseInt(height);
        };

        let compareTo = function (other) {
            if (this.area > other) {
                return 1;
            } else if (this.area === other){
                return 0;
            } else {
                return -1;
            }
        }();

        result.push({
            width,
            height,
            area,
            compareTo
        });
    }

    return result.sort((a,b) => b.area() - a.area() || b.width - a.width);
}

console.log(order([[10,5], [3,20], [5,12]]));
