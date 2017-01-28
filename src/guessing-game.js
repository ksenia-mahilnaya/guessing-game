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
    
       this.middle = Math.floor((this.min + this.max)/2);
       return this.middle;   
        
    }

    lower() {  
      
     this.setRange(this.min, this.middle + 1); 
             
    }

    greater() {     
       this.setRange(this.middle, this.max);  
     
    }
}
    

module.exports = GuessingGame;
