function solve() {
  let buttons = document.querySelectorAll("#exercise>button");
  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {
    let input = JSON.parse(document.querySelector("#exercise>textarea").value);
    for (let line of input) {
      let divElement = document.createElement("div");
      divElement.className = "furniture";
      
      if (line["img"]) {
        let imgP = document.createElement("img");
        imgP.setAttribute("src", line["img"]);
        divElement.appendChild(imgP);
      }
      
      let nameP = document.createElement("p");
      nameP.textContent = "Name: " + line["name"];
      divElement.appendChild(nameP);

      let priceP = document.createElement("p");
      priceP.textContent = "Price: " + line["price"];
      divElement.appendChild(priceP); 

      let decFacP = document.createElement("p");
      decFacP.textContent = "Decoration factor: " + line["decFactor"];
      divElement.appendChild(decFacP);

      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "box";
      divElement.appendChild(checkBox);

      document.getElementById("furniture-list").appendChild(divElement);
    }
  }

  let boughtFurnitureNames = [];
  let totalPrice = 0;
  let decFactors = [];
  function buy() {
    let boughtProducts = Array.from(document.getElementById("furniture-list").children);
    for (let product of boughtProducts) {
      if (product.getElementsByTagName("input")[0].checked) {
        boughtFurnitureNames.push(product.getElementsByTagName("p")[0].textContent.split(": ")[1]);
        totalPrice += Number(product.getElementsByTagName("p")[1].textContent.split(": ")[1]);
        decFactors.push(Number(product.getElementsByTagName("p")[2].textContent.split(": ")[1]));
      }
    }

    let resultElement = document.querySelectorAll("#exercise>textarea")[1];
    resultElement.textContent += `Bought furniture: ${boughtFurnitureNames.join(", ")}\n`;
    resultElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultElement.textContent += `Average decoration factor: ${decFactors.reduce((a,b) => a + b) / decFactors.length}\n`;
  }
}