// Objects 

//create object using literal approach
const user = {
    name: "Azer",
    age: 20,,
    fullinfo:function(){
        return '${this.name} + ${this.age}'
    }
}

// returns list which consist of list keys
console.log(Object.keys(user));
// returns list which consist of list values
console.log(Object.values(user));
// divides list into several list whihc will consist of key and values as indexes
console.log(Object.entries(user));
// delete list property (key and value)
delete user.name;

// implements same logic --> creates new property for the list askes 3 parameters -> object name, key, value and permission( writable: true/false->allow modification)
Object.defineProperty(user, "address", {value: "BAki", writable:false})
user.address = "Baki"


// forbids any changes to the object
Object.freeze(user)

//create object using constructor approach
function Person(name = "lorem",surname = "Ipsum",age = 24){
    this.name = name;
    this.surname = surname;
    this.age = age;
}
const person = new Person();


// inherit
function Student(name, surname){
    this.name = name;
    this.surname = surname;
}

const student = new Student("Akif", "Abasov")
function Group(groupName, groupSize){
    this.groupName = groupName;
    this.groupSize = groupSize;
}

Student.prototype = new Group("P515", 24)  // it will assign defalut value to newly added properties and whenever we will create new object their group keys will be default -> we should change

Object.setPrototypeOf(stu, new Group("134",23)) // assigne different value to each object

const user2 ={
    name: "dkdkjd",
    age: 34
}

const details = {
    info: "lorem ipsum"
}
const user4 = user3;
user4.age = 20;

const user3 = Object.assign({},user2)
const user5 = Object.assign({address: "Baki"}, user2)
const user6 = Object.assign(details, user2)
user3.age = 20
console.log(user2);

let user7 = JSON.stringify(user); // convert objext to json string
user8 = JSON.parse(user7); // convert json to object


let user8 = JSON.parse(JSON.stringify(user)); // copy object first covert it to json then convert it to ogject again



//CRUD
let group = {
    name: "P523",
    groupSize: 2,
    student:[],
    addStudent:function(student){

    },
    deleteStudent: function(id){

    },
    updateStudent: function(id, student){

    },
    getAllStudent: function (){
        for (const stu of group.student) {
            
        }
    }
}
const stu1 ={
    id: 1,
    name: "Aytac",
    surname: "ghdhdkd",
    age: 20
}
const stu2 ={
    id: 2,
    name: "Aytac",
    surname: "ghdhdkd",
    age: 20
}
const stu3 ={
    id: 3,
    name: "Aytac",
    surname: "ghdhdkd",
    age: 20
}


group.addStudent(stu1);

//Class

class Group{
    constructor(groupName, groupSize){
        this.groupName = groupName,
        this.groupSize = groupSize
    }
    groupInfo(){
        console.log("getInfo");
    }

    getName = () =>{
        console.log("getName");
    }

}


class Student extends Group{
    constructor(name, surname, groupName, groupSize){
        super(this.groupName, this.groupSize) // super refers to origin class like to Group class it is same as C# in C3 this key word is base
        this.name = name,
        this.surname = surname
    }

    get(){

    }
    set(){

    }
}

const student6 = new Student("p4564", 20, "dkdhdk", "dkhkd");



