


let arr = [1,2,3,4,5]
    
function incrementArr(arr) {

    for (let i = 0; i < arr.length; i++) {
        
       arr[i] =  arr[i] +5;
    }
    return arr;

}


console.log(incrementArr(arr));


/* normal Function */
function NewArr(array){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] +4);
        
    }
    return newArr;
}


/* Call back */
function NewArr(array, cb){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(cb(array[i] +4));
        
    }
    return newArr;
}

console.log(newArr([1,2,3]), n=> n+20);


let arrDemention = [1,2,[1,2,3,4]];

console.log(arrDemention[2,1]);


// Usefull methods

//Foreach, map, filter-> new arr, reduce -> value, every->returns true/false, sum

/* foreach for arr  -> forrach accepts arrow function */
let numbers = [1,2,3,4,5,6]
/* item is evry time value next one can be index */
numbers.forEach(item=>{
    console.log(item);
})

// for each accepts two parametr value and index
numbers.forEach((item,index)=>{
    console.log(index+ "==>" +value);
})

// foreach accepts 3 paramets value, index, and array itself
numbers.forEach((item,index,numbers)=>{
    console.log(index+ "==>" +value);
})

numbers.forEach((item,index,numbers)=>{
    console.log(numbers);
})

// map is a method for walking throught array index and perform some actions
let newNumbers =  numbers.map((value,index,numbers)=>{value+5});
console.log(newNumbers);

let newNumbers2 = numbers.map((value,index,numbers)=>({val:value}));
console.log(newNumbers2);

// filter if you want to delete or take any element from existing array you can use filter arrr
// It is commonly used in node js and react
// You can create new array from existing but include your desired values
let newNumbers3 = numbers.filter(value=> value>2);

// reduce is used to get total sum of the values of the existing array but we can use it in different scenarios
// we can use prev and nex names instead of total and value  
// in this logic prev stands for previous value of the array and next is next value of the array
// reduce function can take two parameter 
//first is function second is some value and it will take this value and sum to given variable 
let sum = numbers.reduce((total, value)=> total+=value);

let sum2= numbers.reduce((prev,next)=> {prev+=nex}, 10);

let users =[
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300},
    {name:"Ayaz", salary: 300}
]

let sumSalary = users.filter(user=> user.salary>200).reduce((prev,next)=>prev.salary+=nex.salary);

// every returns true or false it checkes all elements of the array
let result = numbers.every((val,index)=> val>20);

// SUM returns true or false it checkes all elements of the array but if one of the element equals to condition it will return true else false
let result2 = numbers.sum((val,index)=> val>20);


// String and its methods

let word = "Hi my\n name \'is\' Kamran"; // it is string
let word2 = new String("kdjdkjdkjd"); // it is object

console.log(word.length);
console.log(word.toLocaleUpperCase);
console.log(word.toLocaleLowerCase);
console.log(word.trim());   // it deletes spaces from end and start
console.log(word.trimEnd());
console.log(word.trimStart());
console.log(word.indexOf("h")); // it requires char to return the index of first found char
console.log(word.indexOf("h", 5)); // it requires char and index number  to return the index of first found char after given index 
console.log(word.includes("my")); // it return true/false if the given value exist within the string
console.log(word.includes("my",8)); // it return true/false and we can assign position to it it will start search after the given position
console.log(word.concat(" salam")); // it is combaning given string to existing string
console.log(word.endsWith("h")); // returns true/false if the existing string ends with given char
console.log(word.startsWith("d")); // returns true/false if the existing string starts with given char
console.log(word.split(" ")); // splits the given string and returns massive array
console.log(word.split(" ").join(",")); // split returns array but after join returns string

console.log(word.slice(0,5)); // returns string takes string from according to given condition first param is start point second param is end but is last param is 5 it will take string from index 4 but not 5
console.log(word.substring(2)); // it is smilar to slice returns string yo can assign start point and end but also you can work without assigning end point
console.log(word.substr(2,4)); // first param indicates where you will start second param indicates how many indexies will be taken after start point

// we should focus to our search element and it is start index first check at home

let num = 5.129;

console.log(num.toFixed(1)); // it will round the numbers decimal part according to given condition like rudicing its number
console.log(word.replace("name", "ipsum")); // it is replacing the desired part of string to given value but only first detected part
console.log(word.replace(/Name/i, "Slam"));  // it finds word and replaces whether word within string is upper or lower case
console.log(word.replace(/Name/g, "Slam"));  // it finds "all words" and replaces words
console.log(word.replace(/Name/gi, "Slam"));  // it finds "all words" and replaces whether word within string is upper or lower case

const companies = [
    {
        name: "Company1",
        annualRevenue: 30000,
        createdDate: 1996,
        terminateDate: 2001
    },
    {
        name: "Company2",
        annualRevenue: 50000,
        createdDate: 1993,
        terminateDate: 2007
    },
    {
        name: "Company3",
        annualRevenue: 46000,
        createdDate: 1999,
        terminateDate: 2009
    },
    {
        name: "Company4",
        annualRevenue: 123000,
        createdDate: 1992,
        terminateDate: 2000
    },
    {
        name: "Company5",
        annualRevenue: 12500,
        createdDate: 1996,
        terminateDate: 2002
    },
    {
        name: "Company6",
        annualRevenue: 23400,
        createdDate: 1993,
        terminateDate: 2009
    },
    {
        name: "Company7",
        annualRevenue: 45000,
        createdDate: 1995,
        terminateDate: 2023
    }
]


sumSalary = companies.filter(company=> companies.name.includes("com", 0))





