
let contentstl = document.getElementById("content");

function content_style(content){
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.opacity = 1;}, 300);
}

let buttons = Array.from(document.querySelectorAll(".btn"));
let h3 = document.getElementById("h3_content");
let p = document.getElementById("p_content");

const content = {
    'london': 'London is the capital city of England.',
    'Paris': 'Paris is the capital of France.',
    'Tokyo': 'Tokyo is the capital of Japan.'
};

const content_Key_and_Values = Object.keys(content);


buttons.forEach(btn=>{
    btn.addEventListener("click", function(){
        // clickedBox?clickedBox.
        let buttons_data_id = btn.getAttribute("data-id")

        switch (buttons_data_id) {
            case "london":
                // contentstl.style.opacity = 0;
                h3.innerText = content_Key_and_Values[0];
                p.innerText = content[content_Key_and_Values[0]];
                content_style(contentstl);
                // contentstl.style.opacity = 1;
                break;
            case "paris":
                h3.innerText = content_Key_and_Values[1];
                p.innerText = content[content_Key_and_Values[1]];
                content_style(contentstl);
                break;
            case "tokyo":
                h3.innerText = content_Key_and_Values[2];
                p.innerText = content[content_Key_and_Values[2]];
                content_style(contentstl);
            
            default:
                break;
        }
        // content_style();
    })
})

