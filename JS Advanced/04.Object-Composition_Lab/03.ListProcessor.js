function processor(input) {
    let list = [];
    {
        for (const command of input) {
            let commandTokens = command.split(" ");
            switch (commandTokens[0]) {
                case "add": 
                    list.push(commandTokens[1]);                   
                    break;

                case "remove": 
                    while (list.indexOf(commandTokens[1]) >= 0) {
                        list.splice(list.indexOf(commandTokens[1]), 1); 
                    }                
                    break;

                case "print":                    
                    console.log(list.join(","));
            }
        }
    }
}