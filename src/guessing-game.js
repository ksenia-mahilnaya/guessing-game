class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
        
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
    
    return Math.floor((this.min + this.max)/2)+1;
    }

    lower() {
        this.setRange(this.min, Math.floor((this.min + this.max)/2));
        this.guess();
       
        
    }

    greater() {
        
        this.setRange(Math.floor((this.min + this.max)/2)+1, this.max);
        this.guess();
    }
}

module.exports = GuessingGame;
