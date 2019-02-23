function binarySearch() {
    let arrElement = document.getElementById("arr").value;
    let arr = arrElement.split(/,\s/);
    let number = Number(document.getElementById("num").value);
    
    let result = document.getElementById("result");
    let index = getNumberIndex(arr, number, 0, arr.length - 1);
    result.textContent = index === -1 
        ? `${number} is not in the array`
        : `Found ${number} at index ${index}`;
    
    function getNumberIndex(arr, number, startIndex, endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        if (Number(arr[midIndex]) === Number(number)) {
            return midIndex;
        }

        if (startIndex >= endIndex) {
            return -1;
        }

        return number < arr[midIndex]
            ? getNumberIndex(arr, number, startIndex, midIndex - 1)
            : getNumberIndex(arr, number, midIndex + 1, endIndex);      
    }
}