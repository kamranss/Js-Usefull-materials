let partyPromise = true;
let giveParty = new Promise(function (resolve, reject) {
 setTimeout(() => {
 if (partyPromise) {
 resolve("I given party to friends");
 } else {
 reject("I am not given party to friends");
 }
 }, 5 * 1000);
});

// mainly used for Api request
// when is ok resolve is working  - data comes within resolve
// ehen is not ok reject is working

// Pending: You don't know you will get time or not

// Fulfilled: You gave them a party

// Rejected: You don't give a party to them

// promise.zenn 

giveParty.then(data=> console.log(data)).catch(error=>{
    console.log(error);
})


//any async method retusn promise

let result = async function(a, b){
    return a+b;
}
console.log(result); // it is promise we should use (.then) to get only desired result 