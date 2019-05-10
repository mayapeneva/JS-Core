function solve(input) {
    let makeCarProducer = function () {
        let cars = {};
        function create(name) {
            cars[name] = {};
        };
    
        function inherits(name, parentName) {
            cars[name] = Object.create(cars[parentName]);
        };
    
        function set(name, key, value) {
            cars[name][key] = value;
        };
    
        function print(name) {
            let result = [];
            for (const key in cars[name]) {
                result.push(`${key}:${cars[name][key]}`);
            }       

            console.log(result.join(", "));
        };
    
        return {
            create, 
            inherits,
            set,
            print
        };
    };

    let carProducer = makeCarProducer();
    for (const line of input) {
         let [command, ...args] = line.split(" ");
         if (command === "create" && args.length === 1) {
             carProducer.create(args[0]);
         } else if (command === "create"){
             carProducer.inherits(args[0], args[2]);
         } else if (command === "set") {
             carProducer.set(args[0], args[1], args[2]);
         } else if (command === "print") {
             carProducer.print(args[0]);
         }
    }
}