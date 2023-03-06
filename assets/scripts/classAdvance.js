// task use class methods and do some calculation
class Calculation {
    
   
    
    constructor(num){
        this.number = num;

    }

    plus(num){
       this.number += num
       return this; // it is returning object 
    }
    minus(num){
        this.number -= num
        return this;
    }
    multiple(num){
        this.number *= num
        return this;
    }
    divide(num){
        this.number /= num
        return this.number;
    }
}



let num = 50;

num = new Calculation(num).plus(10).minus(21).multiple(2).divide(2)


console.log(num);