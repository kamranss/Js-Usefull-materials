$(document).ready(function(){


}) // We should write all jquery inside this function 

// we should first connect cdn and write this function and we can write all code inside this function either vanila js or jquery

$(function(){

$("ul li a").text("alma"); // get DOM element set inner text
$("ul li a").html ("<span> armud </span>"); // get element and set inner html


$("input").val("banan"); // set value to element

$("ul li").click(function(){
    alert("salam")
})  // for each for elements 


$("ul li").click(function(){
    $(this).remove(); // remove element simple version 
}) // -- this approach is not optimal

$(document).on("click", "ul li", function(){
    $(this).remove(); // remove element alternative version  
}) // it can delete elements which have been added after exacution of this function  - it is optimal version than previous one

let li = $("<li>") // create DOM tag
li.text("apeelsin"); // add text
$("ul").append(li) // append new element to existing element.


$("button").click(function(){
    $("p").hide(); // add display none
    $("p").show(); // delete display none make it appear
    $("p").hide(2000, function(){alert("salam")}); // add display none -- also takes two parameter speed and function
    $("p").hide("slow", function(){alert("salam")}); // add display none -- also takes two parameter speed and function // you can use default "fast" or "slow" parameters
    $("p").show(2000, function(){alert("salam")}); // delete display none make it appear -- also takes two parameter speed and function
    $("p").toggle(); // same as js if exist delete if not exist add (class)
    $("p").fadeIn(); // display appear -- -- also takes two parameter speed and function
    $("p").fadeOut(); // display remove also -- -- takes two parameter speed and function
    $("p").fadeToggle(3000); // it is same as other toggle but it has spesific efferc like slow motion because we can add speed also we can add some function 
    $("p").fadeTo(3000,0.5, function(){alert("salam")}); // takes three parameter -- first  speed, second opocity or other property, the animation will last until to reached the respective property, last one call back function
    $("p").slideDown(3000,0.5) // we can use it for accordion
    $("p").slideUp("slow",function(){}) // we can use it for accordion
    $("p").slideToggle(3000,function(){}) // we can use it for accordion
    $("p").animate({left: '250px', top: '100px', opacity: '0.7'},2000,function(){}) // it is same as css keyframe color property is not supported we should use some plug in -- -- takes three param - object, speed, call back func

    $("p").stop() // stops animation

    $("p").css("color", "red").slideUp(2000).slideDown(2000) // chaining logic within one line one can write several methods
    $("p").css({"color": "red", "opacity": "0.6"}).slideUp(2000).slideDown(2000) // useing several css properties within same object
})

$(document).on("keyup", "input", function(){
    console.log($(this).val());
})


// faidIn faidOut fadeTo FadeToggle



















})