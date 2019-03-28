function decrypt(input) {
    let creatures = {};
    for (let line of input) {        
        if (line === "Stop!") {
            break;
        }
        
        let pattern =/^([a-z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)$/;
        let match = line.match(pattern);
        if (match) {
            let geneName = Array.from(match[1]).filter(c => /[a-z]/.exec(c)).join("");  
            let length = Number(match[2]);
            if (geneName.length === length) {
                let organismName = match[4];
                let genesCount = Number(match[3]);
                if (!creatures.hasOwnProperty(organismName)) {
                    creatures[organismName] = 0;
                }

                creatures[organismName] += genesCount;
            }  
        }      
    }

    let sortedNames = Object.keys(creatures).sort((a,b) => creatures[b] - creatures[a]);
        for (const name of sortedNames) {
            console.log(`${name} has genome size of ${creatures[name]}`);        
        }
}