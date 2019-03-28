function makeKompot(input) {
    let cherry = "cherry";
    let peach = "peach";
    let plum = "plum";

    let weights = {
        cherry: 0.009, 
        peach: 0.140,
        plum: 0.020        
    };

    let neededFruits = {
        cherry: 25,
        peach: 2.5,
        plum: 10
    }

    let kompots = {
        cherry: 0, 
        peach: 0,
        plum: 0
    };
    
    let rakia = 0;

    for (let line of input) {
        let fruitInfo = line.split(/\s+/);
        let fruit = fruitInfo[0];
        let weight = Number(fruitInfo[1]);

        if (kompots.hasOwnProperty(fruit)) {
            kompots[fruit] += weight;
        } else {
            rakia += weight;
        }
    }

    let cherries = Math.floor((kompots[cherry] / weights[cherry]) / neededFruits[cherry]);
    console.log(`Cherry kompots: ${cherries}`);

    let peaches = Math.floor((kompots[peach] / weights[peach]) / neededFruits[peach]);
    console.log(`Peach kompots: ${peaches}`);

    let plums = Math.floor((kompots[plum] / weights[plum]) / neededFruits[plum]);
    console.log(`Plum kompots: ${plums}`);

    console.log(`Rakiya liters: ${(rakia * 0.2).toFixed(2)}`);
}