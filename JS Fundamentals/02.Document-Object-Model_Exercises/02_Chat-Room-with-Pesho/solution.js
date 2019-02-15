function solve() {
 Array.from(document.getElementsByTagName("button")).forEach((btn) => {
    btn.addEventListener("click", clickEvent);
   });

 function clickEvent(e) {
     let chatter = e.target;

     let divElement = document.createElement("div");
     let spanElement = document.createElement("span");
     let paragraph = document.createElement("p");
     let message;
     if (chatter.name === "myBtn") {
        message = document.getElementById("myChatBox");
        if(message.value){
         spanElement.textContent = "Me";
         divElement.style.textAlign = "left";        
         paragraph.textContent = message.value;
        }

     } else if (chatter.name === "peshoBtn") {
         message = document.getElementById("peshoChatBox");
         if(message.value){
            spanElement.textContent = "Pesho";
            divElement.style.textAlign = "right";
            paragraph.textContent = message.value;
         }
     }

     if (message.value) {
      divElement.appendChild(spanElement);
      divElement.appendChild(paragraph);
 
      let chatChronology = document.getElementById("chatChronology");
      chatChronology.appendChild(divElement);
      message.value = "";
     }
 }
}