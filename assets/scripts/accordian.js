let buttons = document.querySelectorAll(".acc-button .fa-solid");

buttons.forEach(btn => btn.addEventListener("click", function(){
    let activeContent =  btn.parentNode.previousElementSibling;

    let prevAct = document.querySelector(".active");
    if(prevAct && prevAct != activeContent){
        prevAct.classList.toggle("active");
        prevAct.nextElementSibling.firstElementChild.classList.toggle("fa-chevron-down");
        prevAct.nextElementSibling.firstElementChild.classList.toggle("fa-chevron-up");
        prevAct.style.maxHeight = "0px"; 
    }

    btn.classList.toggle("fa-chevron-down");
    btn.classList.toggle("fa-chevron-up");
    activeContent.classList.toggle("active");
    if(activeContent.classList.contains("active")){
        activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
    else{
        activeContent.style.maxHeight = "0px";
    }
}))
