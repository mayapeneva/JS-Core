function race(arr) {
    let race = arr.shift().split(/\s/);
    
    for (let line of arr) {
        let lineTokens = line.split(/\s/);
        let command = lineTokens[0];
        let pilot = lineTokens[1];
        switch (command) {
            case "Join": join(pilot);                 
                break;
        
            case "Crash": crash(pilot);              
                break;

            case "Pit": pit(pilot);          
                break;

            case "Overtake": overtake(pilot);            
                break;
        }
    }

    console.log(race.join(" ~ "));
    

    function join(pilot) {
        if (!race.some(p => p === pilot)) {
            race.push(pilot);
        }
    }

    function crash(pilot) {
        if (race.some(p => p === pilot)) {
            race = race.filter(p => p !== pilot)
        }
    }

    function pit(pilot) {
        if (race.some(p => p === pilot)) {
            let index = race.indexOf(pilot);
            if (index < race.length - 1) {
                race.splice(index, 1);
                race.splice(index + 1, 0, pilot);
            }
        }
    }

    function overtake(pilot) {
        if (race.some(p => p === pilot)) {
            let index = race.indexOf(pilot);
            if (index > 0) {                
            race.splice(index, 1);
            race.splice(index - 1, 0, pilot);
            }            
        }
    }
}