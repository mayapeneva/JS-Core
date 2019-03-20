function solve() {
  let buttons = document.getElementsByTagName("button");
  buttons[0].addEventListener("click", load);
  buttons[1].addEventListener("click", buy);
  buttons[2].addEventListener("click", endDay);
  
  let logTextarea = document.getElementsByTagName("textarea")[2];

  let products = [];
  let profit = 0;
  function load() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    for (const product of input) {
      if (products.some(p => p.name === product.name)) {
        let product = products.filter(p => p.name === product.name)[0];
        product.quantity += product.quantity;
        product.price = product.price;
      } else {
        products.push(product);
      }

      logTextarea.value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`
    }
  }

  function buy() {
    let productToBuy = JSON.parse(document.getElementsByTagName("textarea")[1].value);
    if (products.some(p => p.name === productToBuy.name
        && p.quantity >= productToBuy.quantity)) {
        let product = products.filter(p => p.name === productToBuy.name)[0];
        product.quantity -= productToBuy.quantity;
        let cost = productToBuy.quantity * product.price;
        profit += cost;

        logTextarea.value += `${productToBuy.quantity} ${productToBuy.name} sold for ${cost}.\n`
    } else {
      logTextarea.value += `Cannot complete order.\n`
    }
  }

  function endDay() {
    logTextarea.value += `Profit: ${profit.toFixed(2)}.`;
    buttons[0].removeEventListener("click", load);
    buttons[1].removeEventListener("click", buy);
    buttons[2].removeEventListener("click", endDay);
  }
}