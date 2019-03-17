function solve() {
  let key = document.getElementById("str").value;
  let input = document.getElementById("text").value;
  let resultElement = document.getElementById("result")
  
  let msgPattern = new RegExp(`${key}(.+?)${key}`);
  let northPattern = new RegExp("north[\\s\\S]*?(\\d{2})[^,]*?,[^,]*?(\\d{6})", "gi");
  let eastPattern = new RegExp("east[\\s\\S]*?(\\d{2})[^,]*?,[^,]*?(\\d{6})", "gi");
  
  let north = "";
  let east = "";
  let match = "";
  while ((match = northPattern.exec(input)) !== null) { 
    north = `${match[1]}.${match[2]} N`;    
  }
  display(north);

  while ((match = eastPattern.exec(input)) !== null) {
    east = `${match[1]}.${match[2]} E`;
    console.log(east)
  }
  display(east);
  
  let message = input.match(msgPattern);
  display(`Message: ${message[1]}`);

  function display(text) {
    let p = document.createElement("p");
    p.textContent = text;
    resultElement.appendChild(p);
  }
}