function getArgsInfo() {
    let types = {};
    for (const input of arguments) {
        let type = typeof(input)
        console.log(`${type}: ${input}`); 

        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }
        types[type]++;
    }

    let sortedTypes = Object.keys(types).sort((a,b) => types[b] - types[a]);
    for (const key of sortedTypes) {
        console.log(`${key} = ${types[key]}`);
        
    }
}