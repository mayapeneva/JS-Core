class Vacation {
    constructor (organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;            
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];            
        } 
        
        if (this.kids[grade].some(k => k.name === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        } 
        
        this.kids[grade].push({name, budget});
        return `[${this.toStringPerGrade(grade)}]`;
    }

    removeChild(name, grade) {
       if (this.kids[grade] && this.kids[grade].some(k => k.name === name)) {
            this.kids[grade] = this.kids[grade].filter(k => k.name !== name);
            return `[ ${this.toStringPerGrade(grade)} ]`;
       } 
       
       return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if (this.kids.length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = [];  
        let kidsCount = this.getNumberOfChildren();
        result.push(`${this.organizer} will take ${kidsCount} children on trip to ${this.destination}\n`);
                  
        let sortedKeys = Object.keys(this.kids).sort((a,b) => a - b);
        for (const grade of sortedKeys) {
            let number = 1;
            result.push(`Grade: ${grade}\n`);
            for (const kid of this.kids[grade]) {
                result.push(`${number++}. ${kid.name}-${kid.budget}\n`);                
            }

            result.push("\n");
        }

        return result.join("");
    }

    toStringPerGrade(grade) {
        let result = [];
        for (const kid of this.kids[grade]) {
            result.push(`'${kid.name}-${kid.budget}'`);                
        }

        return result.join(",");
    }

    getNumberOfChildren() {
        let count = 0;
        for (const grade in this.kids) {
            count += this.kids[grade].length;
        }

        return count;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());

