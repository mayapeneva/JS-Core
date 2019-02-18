function solve(){
    document.getElementsByTagName("button")[0].addEventListener("click", clickEvent);
    let database = document.getElementsByTagName("li");

    function clickEvent() {
        let input = document.querySelector("#exercise input");
        let firstLetter = input.value.split("")[0].toString().toUpperCase();
        let index = firstLetter.charCodeAt(0) - 65;
        if (index >= 0 && index <= 25) {            
            let row = database[index];
            let name = input.value.charAt(0).toUpperCase() + input.value.substr(1).toLowerCase()
            if (row.textContent) {
                row.textContent += `, ${name}`;
            } else {
                row.textContent += name;
            }

            input.value = "";
        }
    }
}
