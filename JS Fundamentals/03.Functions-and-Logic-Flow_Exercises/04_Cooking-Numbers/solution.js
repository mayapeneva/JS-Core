function solve() {
    let buttons = document.querySelectorAll("#operations button");
    Array.from(buttons).forEach(b => b.addEventListener("click", clickEvent));
    
    let output = document.getElementById("output");
    let result = 0;
    function clickEvent(e) {
        let number = document.querySelector("#exercise input");
        result = output.textContent ? Number(result) : (number.value ? Number(number.value) : 0);
        let button = e.target;
        if (button === buttons[0]) {
           result /= 2;
        } else if (button === buttons[1]){
            result = Math.sqrt(result);
        } else if (button === buttons[2]){
            result += 1;
        } else if (button === buttons[3]){
            result *= 3;
        } else if (button === buttons[4]){
            result *= 0.8;
        }

        output.innerHTML = result;
    }
}
