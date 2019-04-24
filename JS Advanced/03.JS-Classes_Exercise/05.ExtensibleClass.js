let Extensible = (function () {
    let _id = 0;
    return class Extensible {    
        constructor() {
            this.id = _id++;
        }
    
        extend(template){
            for (let prop in template) {
                Object.getPrototypeOf(this)[prop] = template[prop];
            }
        }
    }
})();