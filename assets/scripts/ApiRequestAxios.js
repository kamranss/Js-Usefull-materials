import axios from 'axios';
//const axios = require('axios'); // legacy way // also we should use cdn or download npm

// Make a request for a user with a given ID
axios.get('/user?ID=12345') //Api  returns promise and reject
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  async function getData(){
    let result = await axios.get('/user?ID=12345')
    console.log(result);
  }

  getData()
    // on this example we used await instead of then 
    // await and then does same thing returns desired data but await works only within async function 
    // Api  returns promise and reject
  






  // we should take cdn from github and include to our html 
  // if we use frame work we should install npm 

  //Frist it resturns promise object thats why we use then to get data



  axios.get('/user?ID=12345') //Api  returns promise and reject
  .then(res =>{
    console.log(res);
  })


  // async approach
  async function getData(){
    let result = await axios.get('/user?ID=12345')
    console.log(result);
  }


