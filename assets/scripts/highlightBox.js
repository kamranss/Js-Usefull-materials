let button = document.querySelectorAll(".btn");
let clickedBox;
button.forEach(btn=>{
    btn.addEventListener("click", function(){
        clickedBox?clickedBox.style.backroundColor = "transparent":"";
        let dataId = this.getAttribute("data-id");
        document.getElementById(dataId).style.backgroundColor = dataId;
        clickedBox = document.getElementById(dataId);
        console.log(clickedBox);
    
    })
})