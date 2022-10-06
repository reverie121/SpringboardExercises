class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;;
    }

    toString(make, model, year) {
        let strung = `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
        return strung;
    }
}

Vehicle.prototype.honk = function() {
    let youTurkey = 'Beep.';
    return youTurkey;
};

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        const gas = 'VTOOM!!!';
        return gas;
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) return 'Only vehicles are allowed in here!';
        if (this.vehicles.length >= this.capacity) return 'Sorry, we\'re full';
        this.vehicles.push(vehicle);
    }
}

// other ways to get class name besides instanceof:
// The name property: 'instance.constructor.name' === 'Class.name'
// isPrototypeOf() function: 'Class.prototype.isPrototypeOf(potentialInstance)' will return a boolean