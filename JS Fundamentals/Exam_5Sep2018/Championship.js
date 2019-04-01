function calculate(input) {
    let teams = {};
    let teamPoints = {};
    for (let line of input) {
        let lineTokens = line.split(" -> ")
        let teamName = lineTokens[0];        
        if (!teams.hasOwnProperty(teamName)) {
            teams[teamName] = [];
            teamPoints[teamName] = 0;            
        }

        let pilotName = lineTokens[1];
        let points = Number(lineTokens[2]);
        if (teams[teamName].some(p => p.name === pilotName)) {
            teams[teamName].filter(p => p.name === pilotName)[0].points += points;
        } else {
            let pilot = {};
            pilot.name = pilotName;        
            pilot.points = points;
            teams[teamName].push(pilot);
        }
        
        teamPoints[teamName] += points;
    }

    let sortedTeamNames = Object.keys(teamPoints).sort((a,b) => teamPoints[b] - teamPoints[a]);
    for (let i = 0; i < 3; i++) {
        let tName = sortedTeamNames[i];
        console.log(`${tName}: ${teamPoints[tName]}`);
        for (const pilotEntry of teams[tName].sort((a,b) => b.points - a.points)) {
            console.log(`-- ${pilotEntry.name} -> ${pilotEntry.points}`);            
        }        
    }
}