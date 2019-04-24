class SortedList{
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(number){
        this.numbers.push(Number(number));
        this.numbers.sort((a,b) => a-b);
        this.size++;
    }

    remove(index){
        index = Number(index);
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.size--;
        }        
    }

    get(index){
        index = Number(index);
        if (index >= 0 && index < this.numbers.length) {
            return this.numbers[index];
        }
    }
}