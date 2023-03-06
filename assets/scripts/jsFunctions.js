// SELECTORS

let div = document.getElementById("test");

div.innerText = "<h1> P515 </h1>" // finds specificly html element 

// we can get classes of the HTML -> not one several class -> returns html colloction
let boxes = document.getElementsByClassName("box") 
console.log(boxes.length);

//it gets all tags according to provided tag names and return collection  -> not used to much
let div2 = document.getElementsByTagName("div"); 

// return the first element -> we should indicate sign of the class id and etc -> it refers css
let div3 = document.querySelector(".box") 


// it takes all elements under the given parameter it can be class id or tag
let div4 = document.querySelectorAll(".box") 

// modify DOM element
div4.forEach((value, index)=>{
    value.innerText = index+1;
})


let div5 = document.getElementById("test");

div5.style.backgroundColor = "grey";
div5.style.width = "200px";
div5.style.border = "solid, 2pxs"

// change class of the element if element have five class it deletes all classes and adds new one
div5.className = "d"; 


// it not delets old classes just adds new ones to the element
div5.classList.add("c");
div5.classList.add("e");

// it removes the existing class from the element
div5.classList.remove("e");


// returns true/false whether class exist within the element or not
let exist = div5.classList.contains("c");

// old version
// function MakeAlerts(){

//     alert("salam")
// };

let btn = document.getElementById("btn");

btn.onclick = ()=>{
    alert("salam");
}

// it is overriding the existing method
btn.onclick = ()=>{
    alert("sagol");
}

// another approach 
btn.addEventListener("click", function(){
    alert("lorem");
})

