fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))



// it resturn promise object  and we should use then
//without then we will not be able to take data


// one then returns response object in order to read responce we should use responce.json ( and it returns it to promise again)

.then(response => response.json())
.then(json => console.log(json))

// in the end it restuns json object