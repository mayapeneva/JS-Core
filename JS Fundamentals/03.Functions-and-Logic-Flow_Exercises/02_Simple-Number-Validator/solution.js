function validate() {
    let input = document.querySelector("#exercise input");
    let output = document.getElementById("response");
    document.querySelector("#exercise button").addEventListener("click", clickEvent);

    function clickEvent() {
        let numbers = input.value;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        if (/\d{10}/.test(numbers)) {
            let lastNumber = Number(numbers[numbers.length - 1]);
            let result = 0;
            for (let i = 0; i < numbers.length - 1; i++) {
                result += Number(numbers[i]) * Number(weights[i]);               
            }

            let reminder = result % 11 === 10 ? 0 : result % 11;
            if (lastNumber === reminder) {
                output.textContent = "This number is Valid!";
            } else {
                output.textContent = "This number is NOT Valid!";
            }
        }
    }
}