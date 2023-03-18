let dragelemnts = document.querySelectorAll(".blocknew")
let dropelements = document.querySelectorAll(".box")

dragelemnts.forEach(dragelemnt=>{
    dragelemnt.ondragstart = function(e){
        
        e.dataTransfer.setData("id", this.id) // set id to event   
    }
    
})

dropelements.forEach(box => {
    box.ondragover = function(e){
        e.preventDefault();
    }

    box.ondrop = function(e){
        let id = e.dataTransfer.getData("id"); // get id from event
        let dropedElement = document.getElementById(id);
        // dropedElement.classList.add("block")
        box.append(dropedElement);
        console.log(box);
        console.log(dropedElement);
    }
})