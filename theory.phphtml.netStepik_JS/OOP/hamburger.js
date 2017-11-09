class Hamburger {
    constructor(size, topping) {
        this.size = size;
        this.topping = topping;
        this.withSpicies = false;
        this.withMayo = false;
    }

    getPrice() {
        let total = 0;
        total += this._sizeToCalc(this.size).price;
        total += this._toppingsToCalc(this.topping).price;
        if(true === this.withSpicies){
            total += this._spiciesToCalc(this.withSpicies).price;
        }
        if(true === this.withMayo){
            total += this._mayoToCalc(this.withMayo).price;
        }

        return total;
    }

    getCalories() {
        let total = 0;
        total += this._sizeToCalc(this.size).cal;
        total += this._toppingsToCalc(this.topping).cal;
        if(true === this.withSpicies){
            total += this._spiciesToCalc(this.withSpicies).cal;
        }
        if(true === this.withMayo){
            total += this._mayoToCalc(this.withMayo).cal;
        }

        return total;
    }

    addSpicies() {
        this.withSpicies = true;
    }

    addMayo() {
        this.withMayo = true;
    }

    _mayoToCalc() {
        return {
            price: 20,
            cal: 5
        }
    }

    _spiciesToCalc() {
        return {
            price: 15,
            cal: 0
        }
    }

    _sizeToCalc(size) {
        let data = {
            'small': {
                price: 50,
                cal: 20
            },
            'big': {
                price: 100,
                cal: 40
            }
        };
        return data[size];
    }

    _toppingsToCalc(topping) {
        let data = {
            'cheese': {
                price: 10,
                cal: 20
            },
            'salad': {
                price: 20,
                cal: 5
            },
            'potato': {
                price: 20,
                cal: 10
            },
        };
        return data[topping];
    }


}

var hamb1 = new Hamburger('small', 'cheese');
hamb1.addSpicies();
hamb1.addMayo();
console.log(hamb1.getPrice());
console.log(hamb1.getCalories());




