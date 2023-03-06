let dragelemnts = document.querySelectorAll(".image")
let dropelements = document.querySelectorAll(".block")

dragelemnts.forEach(dragelemnt=>{
    dragelemnt.ondragstart = function(e){
        e.dataTransfer.setData("id", this.id) // set id to event
    }
    
})

dropelements.forEach(div => {
    div.ondragover = function(e){
        e.preventDefault();
    }

    div.ondrop = function(e){
        let id = e.dataTransfer.getData("id"); // get id from event
        let delm = document.getElementById(id);
        div.append(delm);
    }
})

