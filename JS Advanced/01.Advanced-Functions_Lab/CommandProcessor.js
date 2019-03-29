function processor(input) {
    let result = "";
    for (const line of input) {
       let [command, argument] = line.split(/\s/);
       switch (command) {
           case "append":
               result += argument;
               break;
       
            case "removeStart":
               result = result.substr(+argument);
               break;

            case "removeEnd":
               result = result.substr(0, result.length - +argument);
               break;

            case "print":
               console.log(result);               
               break;
       }
    }
}