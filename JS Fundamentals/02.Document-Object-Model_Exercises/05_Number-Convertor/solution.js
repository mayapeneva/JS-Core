function solve() {
    let selectMenuTo = document.getElementById("selectMenuTo");

    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    selectMenuTo.appendChild(binaryOption);

    let hexOption = document.createElement("option");
    hexOption.value = "hexadecimal";
    hexOption.textContent = "Hexadecimal";
    selectMenuTo.appendChild(hexOption);

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", clickEvent);

    function clickEvent() {
        let number = document.getElementById("input").value;
        let unitToConvertInto = document.getElementById('selectMenuTo').value;
        let result = document.getElementById("result");
        if (unitToConvertInto === "binary") {
            result.value = (+number).toString(2);
        } else if (unitToConvertInto === "hexadecimal") {
            result.value = (+number).toString(16).toUpperCase();
        }
    }
}