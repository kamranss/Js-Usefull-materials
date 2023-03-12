
/*****************************
 * easy way to check object elements
 * Optional channing operator
 */
let Kamran = {
    komputer: {
        name: 'Asus',
        size: 15.6,
        weight: '2',
        age: ''
    
    }
}


let weight = Kamran?.komputer?.weight
console.log(weight);





/******************
 * Nullish Coalescing Operator
 */
 // accesing to the object element if true it will be assigned to the new variable if not  the "no power" string will be assigned 
let power = Kamran?.komputer?.power || 'no power'  // here it checks the result is false or not
console.log(power);

// here we access element if element and if element empty we will assign empty string to the new variable
let age = Kamran?.komputer?.age ?? 'no age'  // it check null or undifined

console.log(age);