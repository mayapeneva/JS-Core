function carFactory(carDesc) {
    let power = 0;
    let volume = 0;
    if (carDesc.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (carDesc.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    let wheels = [];
    let wheelsSize = Math.floor(carDesc.wheelsize);
    if (wheelsSize % 2 === 0) {
        wheelsSize -= 1;
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(wheelsSize);    
    }

    let car = { model: carDesc.model,
                engine: { power,  volume },
                carriage: { type: carDesc.carriage,
                            color: carDesc.color },
                wheels };

    return car;
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
