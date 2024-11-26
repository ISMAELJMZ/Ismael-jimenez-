// esta instruccion lp que hace es decir que todos los elemntos h1 van a esta ocultos
$("h1").hide();

$(function(){
    $("p").css({"background-color": "blue"});
    $("#segundo").css({"background-color":"green"});

    /*$("#button1").click(function(){
        alert("dont touch me");
    });*/

    $("#button1").click(function(){
        $("#segundo").hide();
    });

    $("#button2").click(function(){
        $("#segundo").show();
    });
    
});