class Rat{
    constructor(name){
        this.name = name;
        this.united = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.united.push(otherRat);
        }
    }

    getRats(){
        return this.united;
    }

    toString(){
        return `${this.name}\n${this.united.map(u => `##${u.toString()}`).join("")}`;
    }
}