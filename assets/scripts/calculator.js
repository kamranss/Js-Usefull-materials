let SumBtn = document.getElementById("SumBtn");
let SubBtn = document.getElementById("SubBtn");
let MultBtn = document.getElementById("MultBtn");
let DivBtn = document.getElementById("DivBtn");

let p = document.getElementById("p");
let itemmList = document.getElementById("itemList");



let buttons = document.querySelectorAll(".btn");
buttons.forEach(btn=>{
  btn.onclick = function(){
    let textInput1  = document.getElementById("textInput1");
    let textInput2  = document.getElementById("textInput2");
    let operator = btn.getAttribute("data-id");

    if(textInput1.value == "" || textInput2.value == ""){
        alert("bosh qoyma")
        return;
    }

    function style(){
        p.classList.add("hover"); // add classes to li
        p.style.cursor = "pointer"; // change cursor style  
        p.onclick=()=>{
        p.remove();
        };
        textInput1.value = "";
        textInput2.value = "";
    }

    // itemmList.innerHTML = "";
    switch (operator) {
      case "+":
        p.innerText = parseInt(textInput1.value)+parseInt(textInput2.value);
        style();
        break;
      case "-":
        p.innerText = parseInt(textInput1.value)-parseInt(textInput2.value);
        style();
        break;
      case "*":
        p.innerText = parseInt(textInput1.value)*parseInt(textInput2.value);
        style();
        break;
      case "/":
        p.innerText = parseInt(textInput1.value)/parseInt(textInput2.value);
        style();
        break;
        
      default:
        break;
    }

  }
})

// SumBtn.addEventListener("click", function(){
// })

// SubBtn.addEventListener("click", function(){
//     let value1 = parseInt(textInput1.value);
//     let value2 = parseInt(textInput2.value);
    
//     if(value1 == "" || value2 == ""){
//         alert("bosh qoyma")
//         return;
        
//     }
//     let sumofValues = value1-value2;
//     console.log(sumofValues);
//     // itemmList.innerHTML = "";
//     p.innerText = sumofValues;
//     p.classList.add("hover"); // add classes to li
//     p.style.cursor = "pointer"; // change cursor style  
//     p.onclick=()=>{
//     p.remove();
//     textInput1.value = "";
//     textInput1.value = "";
//     } 
// })
// MultBtn.addEventListener("click", function(){
//     let value1 = parseInt(textInput1.value);
//     let value2 = parseInt(textInput2.value);
    
//     if(value1 == "" || value2 == ""){
//         alert("bosh qoyma")
//         return;
        
//     }
//     let sumofValues = value1-value2;
//     console.log(sumofValues);
//     // itemmList.innerHTML = "";
//     p.innerText = sumofValues;
//     p.classList.add("hover"); // add classes to li
//     p.style.cursor = "pointer"; // change cursor style  
//     p.onclick=()=>{
//     p.remove();
//     textInput1.value = "";
//     textInput1.value = "";
//     } 
// })
// DivBtn.addEventListener("click", function(){
//     let value1 = parseInt(textInput1.value);
//     let value2 = parseInt(textInput2.value);
    
//     if(value1 == "" || value2 == ""){
//         alert("bosh qoyma")
//         return;
        
//     }
//     let sumofValues = value1/value2;
//     console.log(sumofValues);
//     // itemmList.innerHTML = "";
//     p.innerText = sumofValues;
//     p.classList.add("hover"); // add classes to li
//     p.style.cursor = "pointer"; // change cursor style  
//     p.onclick=()=>{
//     p.remove();
//     textInput1.value = "";
//     textInput1.value = "";
//     } 
// })


