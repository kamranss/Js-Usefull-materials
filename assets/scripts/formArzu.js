const form = document.getElementById("form");
const btn = document.getElementById("submit");

btn.addEventListener('click', (e) => {

    e.preventDefault(); //to prevent form's default behaviour

    const formData = new FormData(form); //FormData object

    formData.append("username", "anyOtherGirl"); //to add the key and value
    formData.append("username", "Dream");
    formData.set("age", 27);
    formData.set("age", 42); //the difference between set and append is that set overwrites the previous data


    // const fileInput = document.getElementById("file");
    // formData.append("userpic", fileInput.files[0], "image.jpg"); // can be used when you don't have "name" for the file

    //formData.delete("name"); deletes name and value

    console.log("Printed by using -> for of");
    for (item of formData) {
        console.log(item[0], item[1]);
    }
    console.log("-----------------------------------");
    console.log("Printed by using -> entries()");
    //we can use entries() with spread. returns array of arrays (key; value);
    const entries = [...formData.entries()];
    console.log(entries);

    console.log("-----------------------------------");
    console.log("Get() is used to get the first username:");
    const username = formData.get("username"); //returns 1st username
    console.log(username);
    console.log("-----------------------------------");
    console.log("GetAll() is used to get all usernames:");
    const usernames = formData.getAll("username"); //returns all usernames in an array
    console.log(usernames);
    console.log("-----------------------------------");
    console.log("has() is used to check if 'age' value exists:");
    console.log(formData.has("age")); //returns false bc we don't have a key with entered name "age"

    console.log("-----------------------------------");
    console.log("keys() in iteration returns keys:");
    for (const key of formData.keys()) {
        console.log(key);
    }
    console.log("-----------------------------------");
    console.log("values() in iteration returns keys:");
    for (const value of formData.values()) {
        console.log(value);
    }
    console.log("-----------------------------------");
    console.log("Results after fetch():");

    fetch('http://httpbin.org/post', {
        method:"POST",
        body: formData
    })
    .then (result => result.json())
    .then (result => console.log(result));
});


