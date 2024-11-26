//practica 2 ismael jimenez

jQuery(function(){

    $("#boton1").on("click", function (){
        if($("#imagenpozo").is(":visible"))
        {
            $("#imagenpozo").hide();

            $("#boton1").text("Mostrar pozole");
            $("#boton2").text("Mostrar pozole");
        }
        else 
            {
                $("#imagenpozo").show();
                $("#boton1").text("Ocultar pozole");
                $("#boton2").text("Ocultar pozole");
            }
        })

        $("#boton2").on("click", function (){
            if($("#imagenpozo").is(":visible"))
            {
                $("#imagenpozo").hide();
                
                $("#boton1").text("Mostrar pozole");
                $("#boton2").text("Mostrar pozole");
            }
            else 
                {
                    $("#imagenpozo").show();
                    $("#boton1").text("Ocultar pozole");
                    $("#boton2").text("Ocultar pozole");
                }
            })
    
})
 

