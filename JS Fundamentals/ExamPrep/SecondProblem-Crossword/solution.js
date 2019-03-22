function solve() {
   let buttons = document.getElementsByTagName("button");
   buttons[0].addEventListener("click", filter);
   buttons[1].addEventListener("click", sort);
   buttons[2].addEventListener("click", rotate);
   buttons[3].addEventListener("click", getPosition);

   let output = document.querySelector("#output>p");
   
   function filter() {
      let input = getInput();      
      let command = getElement("filterSecondaryCmd");
      let position = getElement("filterPosition");
      
      switch (command) {
         case "uppercase": filterChar(/[A-Z]/);
            break;      
         case "lowercase": filterChar(/[a-z]/);
            break;
         case "nums": filterChar(/\d/);
            break;
      }

      function filterChar(regex) {
         output.innerHTML += input.filter(ch => regex.exec(ch))[position - 1];
      }
   }

   function sort() {
      let input = getInput();
      let command = getElement("sortSecondaryCmd");      
      let position = getElement("sortPosition");
      console.log(command);
      
      let result = [];
      switch (command) {
         case "A":
            result = input.sort((a, b) => a.localeCompare(b));               
            break;
       
         case "Z":
            result = input.sort((a, b) => b.localeCompare(a));
            break;
      }

      output.innerHTML += result[position - 1];
   }

   function rotate() {
      let input = getInput();
      let command = getElement("rotateSecondaryCmd");
      let position = getElement("rotatePosition");

      let rotations = command % input.length;
      for (let i = 0; i < rotations; i++) {
         input.unshift(input.pop());              
      }

      output.innerHTML += input[position - 1];
   }

   function getPosition() {
      let input = getInput();
      let position = getElement("getPosition");

      output.innerHTML += input[position - 1];
   }


   function getInput() {
      return Array.from(document.getElementById("input").value);
   }

   function getElement(id) {
      return document.getElementById(id).value;
   }
}