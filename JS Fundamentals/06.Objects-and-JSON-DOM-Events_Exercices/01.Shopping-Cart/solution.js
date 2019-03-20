function solve() {
    Array.from(document.querySelectorAll("#exercise>.product>button"))
                .forEach(b => b.addEventListener("click", addProduct));
    let resultElement = document.querySelector("#exercise>textarea");

    let products = [];
    function addProduct(e) {
        let productInput = e.target.parentNode.querySelectorAll("p");
        let product = {};
        product.name = productInput[0].textContent;
        product.price = Number(productInput[1].textContent.split(/:\s/)[1]);
        products.push(product);

        resultElement.textContent += "Added " + product.name + " for " + product.price.toFixed(2) + " to the cart."
        resultElement.textContent += "\n";
    }

    document.querySelector("#exercise>button").addEventListener("click", buy); 
    
    function buy() {
        let allProducts = products.map(p => p.name).filter((el, idx, arr) => {
            if (arr.indexOf(el) === idx) {
                return el;
            }
        });
        let totalPrice = products.map(p => p.price).reduce((a,b) => a + b);
        resultElement.textContent += "You bought: " + allProducts.join(", ") + " for " + totalPrice.toFixed(2);
        resultElement.textContent += "\n";
    }
}