class Stringer{
    constructor(str, length){
        this.innerString  = str;
        this.innerLength = Number(length);
    }

    increase(length){
        this.innerLength += Number(length);
    }

    decrease(length){
        this.innerLength -= Number(length);
        this.innerLength = Math.max(0, this.innerLength);
    }

    toString(){
        if (this.innerLength < this.innerString.length) {
            return `${this.innerString.substr(0, this.innerLength)}...`;
        } else {
            return this.innerString;
        }
    }
}