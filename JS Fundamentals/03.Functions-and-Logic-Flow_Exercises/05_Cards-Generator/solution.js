function solve() {
    document.querySelector("#exercise button").addEventListener("click", clickEvent);

    function clickEvent() {
        let from = document.getElementById("from");
        let to = document.getElementById("to");
        let suitsElement = document.querySelector("#exercise select");
        let suit = suitsElement.options[suitsElement.selectedIndex].value.split(" ")[1];

        let output = document.getElementById("cards");
        let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let startIndex = cards.indexOf(from.value);
        let endIndex = cards.indexOf(to.value);
        for (let i = startIndex; i <= endIndex; i++) {
            output.appendChild(createDiv(cards[i], suit));
        }
    }

    function createDiv(card, suit) {
        let div = document.createElement("div");
        div.className = "card";
        for (let j = 0; j < 3; j++) {
            let p = document.createElement("p");
            if (j === 1) {
                p.textContent = card;
                p.style.textAlign = "center";
            } else {
                p.textContent = suit;
                if (j === 0) {
                    p.style.textAlign = "left";
                } else {
                    p.style.textAlign = "right";
                }                
            }

            div.appendChild(p); 
        } 
        return div;   
    }
}