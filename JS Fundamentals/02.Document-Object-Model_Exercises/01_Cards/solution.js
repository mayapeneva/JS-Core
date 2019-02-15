function solve() {
    Array.from(document.querySelectorAll("#exercise img")).forEach((img) => {
      img.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {
      let card = e.target;
      card.src = "./images/whiteCard.jpg";
      card.removeEventListener('click', clickEvent);

      let parent = card.parentNode;

      let results = document.getElementById("result").children;
      let player1Result = results[0]
      let player2Result = results[2];
      if(parent.id === "player1Div"){
        player1Result.textContent = card.name;
      } else if (parent.id == "player2Div") {
         player2Result.textContent = card.name;
      }

      let winner;
      let looser;
      if (player1Result.textContent && player2Result.textContent) {
        if(player1Result.textContent > player2Result.textContent ){
          winner = document.querySelector(`#player1Div img[name="${player1Result.textContent}"]`);
          looser = document.querySelector(`#player2Div img[name="${player2Result.textContent}"]`);
        } else{
          winner = document.querySelector(`#player2Div img[name="${player2Result.textContent}"]`);
          looser = document.querySelector(`#player1Div img[name="${player1Result.textContent}"]`);
        }

        winner.style.border = "2px solid green";
        looser.style.border = "2px solid darkred";
        
        let history = document.getElementById("history");
        history.textContent += `[${player1Result.textContent} vs ${player2Result.textContent}] `;

        player1Result.textContent = "";
        player2Result.textContent = "";
      }
      
    }
  } 