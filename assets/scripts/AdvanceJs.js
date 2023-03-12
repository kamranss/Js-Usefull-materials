// Closure
const firstFunction = ()=> {
    const salam = "salam";
    const secondFunction = ()=> {
        const name = "Kamran";
        alert(salam);
    }
    return secondFunction();
}

const newFunc = firstFunction();

console.log(newFunc);;

//Currying  // creating static method which will return output dinamicly according to provided param

const  multiply = (a,b) => a*b;
const curryingMultiple = (a)=>(b)=> a*b;

const multibleBy10 = curryingMultiple(10);

multibleBy10(5);


// Compose 

const  compose = (a,b) => (c) => a(b(c));

const sum = (num) => num+4;

compose(sum, sum)(5);





// Deterministic -> pure function

//flat function for array

const array1 = [1,2,3,3,4,5,7,[8,9,0,2,[2]]]

array1.flat();
console.log(array1);

// convert array to object - fromentiries

UserProfiles = [['kamran', 23], ['elman', 24], ['arif', 34]]

Object.fromEntries(UserProfiles);
console.log(UserProfiles);

