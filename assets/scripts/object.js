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


let givenDate = 1993;
let givenDate2 = 2050;
let givenRevenue = 40000;
let sumRevenue = companies.filter(company => (company.name.startsWith("Com")) &&
    (company.createdDate > givenDate) &&
    (company.terminateDate < givenDate2) &&
    (company.annualRevenue > givenRevenue)).reduce((prev, next) => prev += next.annualRevenue,o);


      console.log(sumRevenue);