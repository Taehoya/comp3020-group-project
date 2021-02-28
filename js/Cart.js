$(document).ready(function(){
    let headerCartController =  true;
    $(".cart_icon").click(function(){

        if(headerCartController){
            $(".cart_menu").animate({
                height : "800px",
            });

        }else{
            $(".cart_menu").animate({
                height: "0px"
            });
        }//else

        headerCartController = !headerCartController;
    });

});