function solve() {
   let profiles = Array.from(document.querySelectorAll(".profile button")).forEach((btn) => {
      btn.addEventListener("click", clickEvent)
   });
   
   function clickEvent(e) {
      let profileData = e.target.parentNode.children;
      let lockеd = profileData[2];
      if (!lockеd.checked) {
         let personalData = profileData[9];
         let button = e.target;
         if (button.textContent === "Show more") {
            personalData.style.display = 'block';
            button.textContent = "Hide it";
         } else {
            personalData.style.display = 'none';
            button.textContent = "Show more";
         }
      }
   }
} 