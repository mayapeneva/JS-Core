function solve() {
    let input = JSON.parse(document.getElementById("arr").value);
    let resultElement = document.getElementById("result");
    let firstPlayerCards = input[0];
    let secondPlayerCards = input[1];
  
    for (let i = 0; i < 20; i++) {
        if (firstPlayerCards.length < 1 || secondPlayerCards.length < 1) {
            break;
        }
  
        let firstPlayerCard = firstPlayerCards.shift();
        let firstCard = firstPlayerCard;
        if (firstPlayerCard === "J") {
          firstCard = 11;
        } else if (firstPlayerCard === "Q"){
          firstCard = 12;
        } else if (firstPlayerCard === "K"){
          firstCard = 13;
        } else if (firstPlayerCard === "A"){
          firstCard = 14;
        }
        
        let secondPlayerCard = secondPlayerCards.shift();
        let secondCard = secondPlayerCard;
        if (secondPlayerCard === "J") {
          secondCard = 11;
        } else if (secondPlayerCard === "Q"){
          secondCard = 12;
        } else if (secondPlayerCard === "K"){
          secondCard = 13;
        } else if (secondPlayerCard === "A"){
          secondCard = 14;
        }
  
        if (firstCard > secondCard) {
            firstPlayerCards.push(firstPlayerCard);
            firstPlayerCards.push(secondPlayerCard);
        } else {
            secondPlayerCards.push(firstPlayerCard);
            secondPlayerCards.push(secondPlayerCard);
        }
    }
  
    let firstP = document.createElement("p");
    firstP.textContent = `First -> ${firstPlayerCards.join(", ")}`;
    resultElement.appendChild(firstP);
  
    let secondP = document.createElement("p");
    secondP.textContent = `Second -> ${secondPlayerCards.join(", ")}`;
    resultElement.appendChild(secondP);
  }