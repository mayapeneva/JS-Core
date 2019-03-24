function scan(text, command) {
    
    switch (command) {
        case "name":
            let name = getName();
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
            break;
        case "flight":
            let flight = getFlight();
            let airports = getAirpots();
            console.log(`Your flight number ${flight} is from ${airports[0]} to ${airports[1]}.`);
            break;
        case "company":
            let company = getCompany();
            console.log(`Have a nice flight with ${company}.`);
            break;
        case "all":
            let name1 = getName();
            let flight1 = getFlight();
            let airports1 = getAirpots();
            let company1 = getCompany();
            console.log(`Mr/Ms, ${name1}, your flight number ${flight1} is from ${airports1[0]} to ${airports1[1]}. Have a nice flight with ${company1}.`);
            break;
        default:
            break;
    }

    function getName() {
        let namePattern = /\s([A-Z][A-Za-z]*-[A-Z][A-Za-z]*(\.-[A-Z][A-Z[a-z]*)?)\s/g;
        let nameMatch = namePattern.exec(text);        
        return nameMatch[1].replace(/-/g, " ");
    }

    function getFlight() {
        let flightPattern = /\s([A-Z]{1,3}\d{1,5})\s/g;
        return flightPattern.exec(text)[1];
    }

    function getAirpots() {
        let airportsPattern = /\s([A-Z]{3}\/[A-Z]{3})\s/g;
        return airportsPattern.exec(text)[1].split("/");
    }
    
    function getCompany() {
        let companyPattern = /-\s([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*)\s/g;
        let companyMatch = companyPattern.exec(text);
        return companyMatch[1].replace(/\*/g, " ");
    }   
}