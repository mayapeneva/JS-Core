function aggregate(input) {
    let sum = input.reduce((a,b) => a + b);
    console.log(sum);   
    
    let min = input.reduce((a,b) => Math.min(a, b));
    console.log(min);

    let max = input.reduce((a,b) => Math.max(a, b));
    console.log(max);
    
    let product = input.reduce((a,b) => a * b);
    console.log(product);
    
    let joined = input.reduce((a,b) => a.toString() + b.toString());
    console.log(joined);   
}