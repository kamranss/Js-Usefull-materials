
// Generate Gradient
let GeneratedGradient = document.querySelector("h3");

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
let Body = document.getElementById("Body")
 

 function setGradient(){
    Body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    GeneratedGradient.innerText =  Body.style.background +";";
 }

color1.addEventListener("input",setGradient);

color2.addEventListener("input", setGradient);