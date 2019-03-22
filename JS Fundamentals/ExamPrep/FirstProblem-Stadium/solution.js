function solve() {
    Array.from(document.getElementsByClassName("seat")).forEach(b => b.addEventListener("click", buyTicket));
    let prices = {
        "Levski": {"A": 10, "B": 7, "C": 5},
        "Litex":  {"A": 10, "B": 7, "C": 5},
        "VIP":  {"A": 25, "B": 15, "C": 10}};

    let sectors = ["A", "B", "C"];

    let output = document.querySelector("#exercise>textarea");
    let profit = 0;
    let fans = 0;
    function buyTicket(e) {
        let button = e.target;
        let seatNumber = button.textContent;
        let sector = button.parentNode.cellIndex;
        let section = button.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        if (button.style.backgroundColor !== "") {
            output.value += ` Seat ${seatNumber} in zone ${section} sector ${sectors[sector]} is unavailable.\n`;
        } else {
            button.style.backgroundColor = "rgb(255, 0, 0)";
            profit += prices[section][sectors[sector]];            
            fans++;
            output.value += ` Seat ${seatNumber} in zone ${section} sector ${sectors[sector]} was taken.\n`;
        }
    }
       
    document.querySelector("#summary>button").addEventListener("click", summary);

    function summary() {
        document.querySelector("#summary>span").textContent = `${profit} leva, ${fans} fans.`;
    }
}