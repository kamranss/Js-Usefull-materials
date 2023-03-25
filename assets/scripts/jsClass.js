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

let num3 = 0?? "lorem" // it checks whether 0 is null or undefined and if not num3 will be equal to 0 if yes will be equal to "lorem"
let num4 = 2|| false // checks whether 2 is trusy or falsy
let num5 = [] || 2 // [] it returns trusy and the num5 value will be massive []