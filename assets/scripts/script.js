const companies = [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989  },
];


const ages = [33,12,20,15,17,45,65,73,2,89,65,32,36,29,73,61,57,66,54,53];


// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);   
// }

// companies.forEach(function(Company){
//     console.log(Company);
// })

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i]>20) {
//         canDrink.push(ages[i]); 
//     }
// }

// let canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true
//     }
// })

let canDrink = ages.filter(age => age>=21);


console.log(canDrink);



// const retailCompanies = companies.filter(function(company){
//     if (company.category === "Retail") {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category==="Retail");
const eightiesCompanies = companies.filter(company => company.start>1980 && company.end <1990)
const lastedTenYearsCompanies = companies.filter(company =>(company.end - company.start >= 10))
const companyNames = companies.map(company => company.name);
// const test = companies.map(company => '${company.name} [${company.start} - ${company.end}]')

// using two map one after one another within same line
const mathSquareAges = ages.map(age => Math.sqrt(age)).map(age=> age*2).map(age => age/5);  
const sortCompanies = companies.sort((prev,next)=> (prev.start > next.start)? 1 :-1);
const sortAges = ages.sort((a,b) => a-b); // ascending order----- for descending order we should subtract prev from next

const sumAges = ages.reduce((total, age)=> total+age, 0);
const sumCompanyLifeSycle = companies.reduce((total, company) => total + (company.end - company.start), 0);

const usingAllMethods = ages.map(age => age*2)
.filter(age => age>= 25)
.sort((prev,next) => prev-next)
.reduce((total, age) => total + age, 0);

console.log(usingAllMethods);
console.log(sumCompanyLifeSycle);
console.log(sumAges);
console.log(sortAges);
console.log(sortCompanies);
console.log(mathSquareAges);
// console.log(test);
console.log(companyNames);
console.log(lastedTenYearsCompanies);
console.log(eightiesCompanies);
console.log(retailCompanies);







//foreach
//map
//filter
//reduce
//sort
