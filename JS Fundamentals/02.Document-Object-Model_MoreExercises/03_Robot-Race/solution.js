function solve(){
   let input = document.getElementsByTagName("input");
   let span = document.querySelector("#exercise span");
   
   let softuni = document.getElementById("softuni");
   softuni.style.position = "relative";
   let google = document.getElementById("google");
   google.style.position = "relative";
   let facebook = document.getElementById("facebook");
   facebook.style.position = "relative";

   let racers = {
      "softuni": softuni,
      "google": google,
      "facebook": facebook
   };
   let totalMoves = {
      "softuni": 0,
      "google": 0,
      "facebook": 0
   };

   let winner;
   let second;
   let third;
   
   document.getElementsByTagName("button")[0].addEventListener("click", clickEvent);
   function clickEvent() {
      let robotName = input[0].value;
      let move = input[1].value.split(" ");
      let direction = move[0].toLowerCase();
      let steps = Number(move[1]);
      if (robotName === winner || robotName === second || robotName === third) {
         return;
      }
      
      let name = robotName.toLowerCase();            
      if ((name === "softuni" || name === "google"|| name === "facebook")
         && (direction === "forward" || direction === "backward")) {
         if (direction === "forward" && steps > 0 && totalMoves[name] + steps <= 80) {
            totalMoves[name] += steps;
            racers[name].style.marginLeft = totalMoves[name] + "%";
            span.textContent =  `${robotName} move ${steps} forward`;
         } else if (direction === "backward" && totalMoves[name] >= steps) {
               totalMoves[name] -= steps;
               racers[name].style.marginLeft = totalMoves[name] + "%";
               span.textContent = `${robotName} was distracted and he got behind with ${step} meters`
         } else {
               span.textContent = `${robotName} can't move so backward`;
         }
      }    

      if (totalMoves[name] === 80) {
         if (!winner) {
            winner = robotName;
            span.textContent = `${name.toUpperCase()} WIN THE RACE!`;
         } else if (!second) {
            second = robotName;
            span.textContent = `${name.toUpperCase()} FINISHED 2`;
         } else {
            third = robotName;
            span.textContent = `${name.toUpperCase()} FINISHED 3`;
         }
      }
   }
}