function sort(arr, argument) {
    switch (argument) {
        case "asc": 
            return arr.sort((a,b) => a - b);
    
        case "desc": 
            return arr.sort((a,b) => b - a);
    }
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
