let remove_btn = document.getElementById("remove_sidebar");
remove_btn.onclick = function(){
    this.parentNode.classList.add("close"); 
}


let open_sidebar = document.getElementById("open_sidebar")

open_sidebar.onclick = function(){
    this.previousElementSibling.classList.remove("close");
}