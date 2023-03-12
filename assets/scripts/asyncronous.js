function content_style(content){
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.opacity = 1;}, 300);
}


console.log('1');

// setTimeout is not js function it is web API function and it while performing this function brauzer takes this code
// and waits the amount of time which specified within the function in this case it is 2 second
setTimeout(()=> {
    console.log('2');
},2000);  // 2000 ml second == 2 seconds


console.log('3');