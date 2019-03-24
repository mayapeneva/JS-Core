function manage(arr) {
    let machine = {};

    for (let line of arr) {
        let lineTokens = line.split(", ");
        
        let command = lineTokens.shift();           
        switch (command) {
            case "IN": inCommand(lineTokens);                       
                break;
        
            case "OUT": outCommand(lineTokens);         
                break;
            
            case "REPORT": reportCommand();         
                break;
            
            case "INSPECTION": inspectionCommand();          
                break;
        }
    }

    function inCommand([coffeeBrand, coffeeName, expireDate, quantity]) {
        if (machine.hasOwnProperty(coffeeBrand)) {
            if (machine[coffeeBrand].hasOwnProperty(coffeeName)) {
                if (expireDate > machine[coffeeBrand][coffeeName].expireDate) {
                    machine[coffeeBrand][coffeeName] = {
                        "expireDate": expireDate,
                        "quantity": +quantity
                    }
                } else if (expireDate == machine[coffeeBrand][coffeeName].expireDate) {
                    machine[coffeeBrand][coffeeName].quantity += +quantity;
                }
            } else {
                machine[coffeeBrand][coffeeName] = {
                    "expireDate": expireDate,
                    "quantity": +quantity
                };
            }
        } else {
            machine[coffeeBrand] = {};
            machine[coffeeBrand][coffeeName] = {
                "expireDate": expireDate,
                "quantity": +quantity
            };
        } 
    }

    function outCommand([coffeeBrand, coffeeName, expireDate, quantity]) {
        if (machine.hasOwnProperty(coffeeBrand)) {
            if (machine[coffeeBrand].hasOwnProperty(coffeeName)) {
                if (machine[coffeeBrand][coffeeName].expireDate > expireDate
                    && machine[coffeeBrand][coffeeName].quantity >= +quantity) {
                        machine[coffeeBrand][coffeeName].quantity -= +quantity;
                }
            }
        }
    }

    function reportCommand() {
        console.log(">>>>> REPORT! <<<<<");
        for (let brand of Object.keys(machine)) {
            console.log(`Brand: ${brand}:`);
            for (let name of Object.keys(machine[brand])) {
                console.log(`-> ${name} -> ${machine[brand][name].expireDate} -> ${machine[brand][name].quantity}.`);                
            }
        }
    }

    function inspectionCommand() {
        console.log(">>>>> INSPECTION! <<<<<");
        let brands = Object.keys(machine).sort((a,b) => a.localeCompare(b));
        for (let brand of brands) {
            console.log(`Brand: ${brand}:`);

            let names = Object.keys(machine[brand]).sort((a,b) => machine[brand][b].quantity - machine[brand][a].quantity);
            for (let name of names) {
                console.log(`-> ${name} -> ${machine[brand][name].expireDate} -> ${machine[brand][name].quantity}.`);                
            }
        }
    }
}