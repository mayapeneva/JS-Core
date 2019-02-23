function validate() {
    let yearElement = document.getElementById("year");
    let monthElement = document.getElementById("month");
    let dateElement = document.getElementById("date");
    let maleElement = document.getElementById("male");
    let regionElement = document.getElementById("region");

    document.querySelector("#exercise button").addEventListener("click", getEGN);
    function getEGN() {
        let year = yearElement.value.split("")[2] + yearElement.value.split("")[3];
        
        let allMonths = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05", 
        June: "06", 
        July: "07", 
        August: "08",
        September: "09", 
        October: "10", 
        November: "11",
        December: "12"
        }
        let month = allMonths[monthElement.options[monthElement.selectedIndex].value];
        // if (Number(yearElement.value) > 2000) {
        //     month = Number(month) + 40;
        // }

        let date = dateElement.value.length === 1 ?
                    "0" + dateElement.value :
                    dateElement.value;
        
        let gender = maleElement.checked ? 2 : 1;

        let region = regionElement.value.length === 2 ? 
                    regionElement.value : 
                    regionElement.value.split("")[0] + regionElement.value.split("")[1];
        
        let numbers = year + month + date + region + gender;
        document.getElementById("egn").textContent = "Your EGN is: " + calculateEGN(numbers);

        clearAll();
    }

    function calculateEGN(numbers) {
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += Number(numbers[i]) * Number(weights[i]);       
        }

        let reminder = sum % 11 === 10 ? 0 : sum % 11;
        return numbers + reminder;        
    }

    function clearAll() {
        yearElement.value = "";
        monthElement.selectedIndex = 0;
        dateElement.value = "";
        maleElement.checked = false;
        document.getElementById("female").checked = false;
        regionElement.value = ""
    }
}