$(document).ready(function(){



    // $(document).on("keyup", "input", function(){
    //     console.log($(this).val());
    // })
    
    // let arr  = $("#text").val().split("-");



    $("#button").click(function(){
        let city  = $("#text").val()
        let key = "25971e265d6f41f0981132643231903"
        console.log(city);

        $.ajax({
            url: `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`,
            method: "get",
            success: function(data){
                console.log(data);

                temp = temp == 1? data.current.temp_c:data.current.temp_f
                let response = data;
                $("#city").text(`Name: ${response.location.name}`)
                $("#temprature").text(`temprature: ${response.current.temp_c}`)
                $("#humidity").text(`Humidity: ${response.current.humidity}`)
                $("#cloud").text(`Cloude: ${response.current.cloud}`)
            },
            error: function(data) {
                console.log(data);
            
            },
            
        })

    
        
    })
   

    


})

// we should include cdn in our Html
