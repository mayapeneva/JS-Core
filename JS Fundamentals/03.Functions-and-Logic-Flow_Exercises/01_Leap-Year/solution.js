function leapYear() {
    let input = document.querySelector("#exercise input");
    document.querySelector("#exercise button").addEventListener("click", clickEvent);

    function clickEvent() {
        let year = Number(input.value);
        let yearElement = document.getElementById("year");
        let h = yearElement.getElementsByTagName("h2")[0];
        let div = yearElement.getElementsByTagName("div")[0];
        if (year % 4 == 0) {
            h.textContent = "Leap Year";
        } else {
            h.textContent = "Not Leap Year";
        }

        div.textContent = year;
        input.value = "";
    }
}