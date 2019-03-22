function solve() {
    document.getElementsByTagName("button")[0].addEventListener("click", extract);    
    
    function extract() {
        let input = document.getElementById("input").value;
        let output = document.getElementById("output");

        let num = input.match(/[0-9]+/g)[0];             
        let sliced = Array.from(input).splice(num.length, +num);

        let splitter = sliced.pop();
        let parts = sliced.join("").split(splitter); 
        
        let regex = new RegExp(`[${parts[0]}]`, "g");
        let result = parts[1].replace(regex, "");
        
        output.innerHTML = result.replace(/[#]/g, " ");
    }
}