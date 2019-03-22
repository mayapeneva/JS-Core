function solve() {
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", addTruck);
    buttons[1].addEventListener("click", addTires);
    buttons[2].addEventListener("click", goToWork);
    buttons[3].addEventListener("click", endShift);
    
    let tiresAndTrucksSection = document.querySelectorAll("#exercise>section")[1];
    let tiresDiv = tiresAndTrucksSection.getElementsByTagName("div")[0];
    let trucksDiv = tiresAndTrucksSection.getElementsByTagName("div")[1];

    let trucks = {};
    let backupTires = [];

    function addTruck() {
        let plateNumber = document.getElementById("newTruckPlateNumber").value;
        let tires = document.getElementById("newTruckTiresCondition").value.split(/\s+/);

        if (!trucks[plateNumber]) {
            trucks[plateNumber] = {
                "tires": tires,
                "distance": 0
            };
            trucksDiv.appendChild(createElement("div", "truck", plateNumber));
        }
    }
    
    function addTires(e) {
        let newTires = document.getElementById("newTiresCondition").value.split(/\s+/);
        backupTires.push(newTires);

        tiresDiv.appendChild(createElement("div", "tireSet", newTires.join(" ")));
    }
    
    function goToWork(e) {
        let plate = document.getElementById("workPlateNumber").value;
        let distance = Number(document.getElementById("distance").value);
        
        if (trucks.hasOwnProperty(plate)) {
            if (ifTiresGoodToDrive(trucks[plate].tires, distance)) {
                trucks[plate].tires = wearOutTires(trucks[plate].tires, distance);
                trucks[plate].distance += distance;
            } else if (backupTires.length > 0) {                
                trucks[plate].tires = backupTires.shift();                
                let tireSetToRemove = document.getElementsByClassName("tireSet")[0];
                tireSetToRemove.parentNode.remove(Child(tireSetToRemove));
                
                if (ifTiresGoodToDrive(trucks[plate].tires, distance)) {  
                    trucks[plate].tires = wearOutTires(trucks[plate], distance);
                    trucks[plate].distance += distance;                    
                } 
            }
        }
    }
    
    function endShift(e) {
        let output = document.getElementsByTagName("textarea")[0];
        for (let key of Object.keys(trucks)) {
            output.value += `Truck ${key} has traveled ${trucks[key].distance}.\n`
        }

        output.value += `You have ${backupTires.length} sets of tires left.\n`
    }

    function createElement(type, className, text) {
        let elem = document.createElement(type);
        elem.className = className;
        elem.textContent = text;

        return elem;
    }

    function ifTiresGoodToDrive(tires, distance) {
        return tires.every(t => t >= (distance/1000));
    }

    function wearOutTires(tires, distance) {
        let wornTires = [];
        Array.from(tires).forEach(t => wornTires.push(t - (distance/1000)));
        return wornTires;
    }
}