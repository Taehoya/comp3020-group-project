$(document).ready(function(){


    let addressesController =  true;
    $(".address_btn").click(function(){
        if(addressesController){
            $(".addresses_timeSelection").animate({
                height : "250px"
            });
            $(".stop").css({
                // position: "fixed",
                // top : "0",
                // left : "0",
                // bottom : "0",
                // right : "0",
                // zIndex : "-1",
                // backgroundColor : "rgba(255,255,255,0.7)"
                display : "block",
                // width: $(window).width(),
                // height : $(window).height(),
                // backgroundColor : "orange"

            });
        }else{
            $(".addresses_timeSelection").animate({
                height: "0"
            });

            $(".stop").css({
                // position: "fixed",
                // top : "0",
                // left : "0",
                // bottom : "0",
                // right : "0",
                // zIndex : "-1",
                // backgroundColor : "rgba(255,255,255,0.7)"
                display : "none"
            });
        }//else
        addressesController = !addressesController;
    });

   $(".stop").click(function(){
       if(!addressesController){

           $(".addresses_timeSelection").animate({
               height: "0"
           });

           $(".stop").css({
               // position: "fixed",
               // top : "0",
               // left : "0",
               // bottom : "0",
               // right : "0",
               // zIndex : "-1",
               // backgroundColor : "rgba(255,255,255,0.7)"
               display : "none"
           });
       }
       addressesController = !addressesController;
   })


    $(".moving--wrapper").css({
        width : $(".cuisine_wrapper").width()*3,
        height : $(".cuisine_wrapper").height(),
        position : "relative",
        top : 0,
        left : 0
    });

    let movingControllerIndex = 0;
    let movingController = true;
    let wrapperSize = $(".cuisine_wrapper").width();
    let currIndex;

    $(".nav_wrapper>li").each(function(index) {
        $(this).attr("data-index", index);
    }).click(function(){
        currIndex = $(this).attr("data-index");
        $(".moving--wrapper").animate({
            left : wrapperSize*(-currIndex)
        });
        console.log("moving is %d\n",movingControllerIndex);

        currIndex = parseInt(currIndex);
        movingControllerIndex = currIndex;
        console.log("curr is %d\n",currIndex);
        $("#color_wrapper>li").each(function(index){
            if(index === movingControllerIndex){
                $("#color_wrapper>li").eq(index).removeClass("black");
                $("#color_wrapper>li").eq(index).addClass("red");
            }else{
                $("#color_wrapper>li").eq(index).removeClass("red");
                $("#color_wrapper>li").eq(index).addClass("black");
            }
        });


    });

    $(".moving--wrapper>li").each(function(index){
        $(this).attr("data-index",index);
    });


    $("#controller").click(function(){
        movingControllerIndex++;
        if(movingControllerIndex > 4){
            movingControllerIndex = 0;
        }
        $(".moving--wrapper").stop().animate({
            left : wrapperSize*(-movingControllerIndex)
        });


        $("#color_wrapper>li").each(function(index){
            if(index === movingControllerIndex){
                $("#color_wrapper>li").eq(index).removeClass("black");
                $("#color_wrapper>li").eq(index).addClass("red");
            }else{
                $("#color_wrapper>li").eq(index).removeClass("red");
                $("#color_wrapper>li").eq(index).addClass("black");
            }
        });
    });

    let s = setInterval(function(){
        $("#controller").trigger("click");
    },8000);

});//end of ready