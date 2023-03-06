
let btn = document.getElementById("addBtn");
let input = document.getElementById("textInput");
let ulList = document.getElementById("ietmList");
let removeBtn = document.getElementById("removeBtn");


btn.addEventListener("click", function(){
    let value = input.value;
    if(value == ""){
        alert("bosh qoyma")
        return;
    }

    // first approach
    //----
    let li = document.createElement("li"); // create element for html
    li.classList.add("list-group-item, hover"); // add classes to li
    li.style.cursor = "pointer"; // change cursor style
    // li.className = "list-group-item";
    li.innerText = value.trim();

    // second approach
    // let li = '<li class="list-group-item">${}</li>'


    ulList.innerHTML += li; // do not delete iner html just adds new content to it
    ulList.appendChild(li); // add li into ul

    input.value = ""; // make value empty 
})


removeBtn.addEventListener("click", function(){
    
})


