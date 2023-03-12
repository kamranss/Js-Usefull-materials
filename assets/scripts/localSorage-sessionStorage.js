//session - deletes data after closing brauzer - temporary Storage
//local storage - local do not delete we should delete them manually 

let a = 5;
localStorage.setItem("num",a); // it will be stored as string in local storage

localStorage.setItem("num", 10); // sets item inside local storage - you can access this item any time

localStorage.getItem("num"); // returns stored value 

localStorage.clear(); // will delete everything from local storage

localStorage.removeItem("num"); // asks key and removes exact key and value from LS

let numbers = [1,2,3,4];

localStorage.setItem("arrNumbers", numbers);

localStorage.getItem("arrNumbers"); // returns string we should converst this to arr again

let numbers2= [1,2,3,4,5];

localStorage.setItem("arrNumbers2",JSON.stringify(numbers2)); // in local storage we will visualy see array but it is not array scopes also part of the string element

let newNumbers2 = JSON.parse(localStorage.getItem("arrNumbers2")); //returns array again

let user = {
    name: "Kamran",
    surname: "Suleyman",
    Age: 30
}

localStorage.setItem("user", JSON.stringify(user)); // store object

let userObject = JSON.parse(localStorage.getItem("user")); // return object






