function decodeHTML(input) {
    let regex = /^<(\w+)>(.*)?<\/\1>$/;
    let result = [];
    for (let line of input) {
        let match = regex.exec(line);
        if (match) {
            result.push(match[2].replace(/<(\w+)>/g, "").replace(/<(\/\w+)>/g, ""));
        }
    }

    console.log(result.join(" "));
    
}