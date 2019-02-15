
 function register() {
   let userNameElement = document.getElementById("username").value;
   let emailElement = document.getElementById("email").value;
   let regex = new RegExp(/(.+)@(.+).(com|bg)/gm);;
   let passwordElement = document.getElementById("password").value;
   
   if (userNameElement && regex.exec(emailElement) !== null && passwordElement) { 
      let result = document.getElementById("result");

      let heading = document.createElement("h1");
      heading.textContent = "Successful Registration!";
      result.appendChild(heading);

      let userNameNode = document.createTextNode(`Username: ${userNameElement}`);
      let emailNode = document.createTextNode(`Email: ${emailElement}`);
      let passLength = passwordElement.length;
      let passwordNode = document.createTextNode(`Password: ${"*".repeat(passLength)}`);

      result.appendChild(userNameNode);
      result.appendChild(document.createElement("br"));
      result.appendChild(emailNode);
      result.appendChild(document.createElement("br"));
      result.appendChild(passwordNode);
        
      setTimeout(function(){result.innerHTML = ""}, 5000);
   }
 }
