function solve() {
  let input = JSON.parse(document.getElementById("arr").value);
  let resultElement = document.getElementById("result");

  let key = input[0];  
  let generalPattern = new RegExp(`${key}[\\s|^]+([!%$#A-Z]{8,})(?=[\\s\\.\\,]|$)`, "gim");
  let msgPattern = new RegExp("^[!%$#A-Z]{8,}$");
  for (let i = 1; i < input.length; i++) {
    let line = input[i];
    let match = "";
    while ((match = generalPattern.exec(line)) !== null) {
      let message = match[1];
      if ((match = msgPattern.exec(message)) !== null) {
        result = changeChars(message);
        line = line.replace(message, result);
      }
    }

    let p = document.createElement("p");
    p.textContent = line;
    resultElement.appendChild(p);
  }  

  function changeChars(message){
    result = [];
      for (let ch of message) {
        switch (ch) {
          case "!": result.push(1);              
            break;
          case "%": result.push(2);              
            break;
          case "#": result.push(3);              
            break;
          case "$": result.push(4);              
            break;
          default: result.push(String.fromCharCode(ch.charCodeAt(0) + 32));
            break;
        }
      }
    return result.join("");
  }
}