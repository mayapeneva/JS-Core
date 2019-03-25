function filterTable(matrix, command) {
    let commandTokens = command.split(" ");
    let commandName = commandTokens[0];
    let header = commandTokens[1];    
    let index = matrix[0].indexOf(header);
    
    let result = [];
    switch (commandName) {
        case "hide": hide();           
            break;
    
        case "sort": sort();
            break;

        case "filter": filter();         
            break;
    }

    result.map(r => r.join(" | ")).forEach(r => console.log(r));

    function hide() {   
        matrix.map(r => r.slice(0, index).concat(r.slice(index + 1, r.length)))
            .forEach(r => result.push(r));
    }

    function sort() {
        result.push(matrix.shift());
        let columnToBeSorted = {};
        for (let i = 0; i < matrix.length; i++) {
            columnToBeSorted[matrix[i][index]] = i;
        }

        let keys = Object.keys(columnToBeSorted).sort((a,b) => a.localeCompare(b));
        for (let key of keys) {
            result.push(matrix[columnToBeSorted[key]])
        }
    }

    function filter() {
        result.push(matrix.shift());
        let filterParam = commandTokens[2];
        matrix.filter(r => r[index] == filterParam)
            .forEach(r => result.push(r));
    }
}