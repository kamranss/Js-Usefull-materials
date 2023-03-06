let addBtn = document.getElementById("addBtn");
let textInput  = document.getElementById("textInput");
let itemmList = document.getElementById("itemList");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function(){
    let value = textInput.value;
    if(value == ""){
        alert("bosh qoyma")
        return;

    }
    itemmList.innerHTML = ""
    for (let i = 1; i <= value; i++) {
        let li = document.createElement("li");

        let icon = document.createElement("i");
        icon.classList.add('fa-solid', 'fa-trash')
        let span = document.createElement("span")
        span.innerText = i
        li.append(span,icon);
        li.classList.add("list-group-item", "hover", "li"); // add classes to li
        li.style.cursor = "pointer"; // change cursor style
        itemmList.appendChild(li);
        icon.onclick=()=>{
            li.remove();
        } // when clicked will remove li
    }
    textInput.value = "";
})


removeBtn.addEventListener("click", function(){
    itemmList.innerHTML = "" // make innerhtml empth
})

document.getElementById("button").onclick = function(){
    let text = document.getElementById("text");
    text.classList.toggle("test")
}



