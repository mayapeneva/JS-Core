function getInfo(input) {
    let result = {};    
    let towns = Array.from(new Set(input.map(x => x.town)));
    for (let town of towns) {
        let inputByTown = input.filter(x => x.town === town);
        result[town] = {};
        result[town].profit = inputByTown.map(x => Number(x.price)).reduce((a,b) => a + b);
        result[town].vignettesCount = inputByTown.length;
        result[town].model = Array.from(new Set(inputByTown.map(x => x.model)));
    }
    
    let mostProfTown = Object.keys(result)
                .sort((a,b) => result[b].profit - result[a].profit 
                | result[b].vignettesCount - result[a].vignettesCount
                | a.localeCompare(b))[0];
    console.log(`${mostProfTown} is most profitable - ${result[mostProfTown].profit} BGN`);

    let modelResult = {};
    let inputByMostProfTown = input.filter(x => x.town === mostProfTown);
    let models = result[mostProfTown].model;
    for (let model of models) {
        let resultByModel = inputByMostProfTown.filter(x => x.model === model);                                
        modelResult[model] = {};
        modelResult[model].modelCount = resultByModel.length;
        modelResult[model].vignettesPrice = resultByModel.map(x => Number(x.price)).reduce((a,b) => a + b);
    }

    let mostDrivenModel = Object.keys(modelResult)
                .sort((a,b) => modelResult[b].modelCount - modelResult[a].modelCount
                | modelResult[b].vignettesPrice - modelResult[a].vignettesPrice
                | a.localeCompare(b))[0];
    console.log(`Most driven model: ${mostDrivenModel}`);
    
    let townResult = {};
    let inputByModel = input.filter(x => x.model === mostDrivenModel);
    let townsByModel =  Array.from(new Set(inputByModel.map(x => x.town)));
    for (let townByModel of townsByModel) {
        let resultByModelByTown = inputByModel.filter(x => x.town === townByModel);
        
        townResult[townByModel] = resultByModelByTown.map(x => x.regNumber);        
    }

    let sortedtownsByModel = townsByModel.sort((a,b) => a.localeCompare(b));
    for (let townName of sortedtownsByModel) {        
        let regNumbers = townResult[townName].sort((a,b) => a.localeCompare(b))
        console.log(`${townName}: ${regNumbers.join(", ")}`);
    }
}

getInfo([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 5},
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ])