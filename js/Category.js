$(document).ready(function(){
    let category1Controller =  true;
    let category2Controller =  true;
    let category3Controller =  true;
    let category4Controller =  true;
    let category5Controller =  true;
    let category6Controller =  true;

    function changeCategory1(){
        if(category1Controller) {
            $(".all_section").css({
                display: "block"
            });
            category2Controller = false;
            category3Controller = false;
            category4Controller = false;
            category5Controller = false;
            category6Controller = false;
            cancelCategory2();
            cancelCategory3();
            cancelCategory4();
            cancelCategory5();
            cancelCategory6();
        }
        category1Controller = !category1Controller;
    }

    function cancelCategory1(){
        if(!category1Controller){
            $(".all_section").css({
                display: "none"
            });
        }//if
        category1Controller = true;
    }

    function changeCategory2(){
        if(category2Controller) {
            $(".food_type_selection").css({
                display: "block"
            });
            category1Controller = false;
            category3Controller = false;
            category4Controller = false;
            category5Controller = false;
            category6Controller = false;
            cancelCategory1();
            cancelCategory3();
            cancelCategory4();
            cancelCategory5();
            cancelCategory6();
        }
        category2Controller = !category2Controller;
    }

    function cancelCategory2(){
        if(!category2Controller){
            $(".food_type_selection").css({
                display  : "none"
            });
        }
        category2Controller = true;
    }

    function changeCategory3(){
        if(category3Controller) {
            $(".price_selection").css({
                display: "block"
            });
            category1Controller = false;
            category2Controller = false;
            category4Controller = false;
            category5Controller = false;
            category6Controller = false;
            cancelCategory1();
            cancelCategory2();
            cancelCategory4();
            cancelCategory5();
            cancelCategory6();
        }
        category3Controller = !category3Controller;
    }

    function cancelCategory3(){
        if(!category3Controller) {
            $(".price_selection").css({
                display: "none"
            });
        }
        category3Controller = true;
    }

    function changeCategory4(){
    if(category4Controller) {
            $(".country_selection").css({
                display: "block"
            });
            category1Controller = false;
            category2Controller = false;
            category3Controller = false;
            category5Controller = false;
            category6Controller = false;
            cancelCategory1();
            cancelCategory2();
            cancelCategory3();
            cancelCategory5();
            cancelCategory6();
        }
        category4Controller = !category4Controller;
    }

    function cancelCategory4(){
        if(!category4Controller){
            $(".country_selection").css({
                display : "none"
            });
        }
        category4Controller = true;
    }

    function changeCategory5(){
        if(category5Controller) {
            $(".rate_selection").css({
                display: "block"
            });
            category1Controller = false;
            category2Controller = false;
            category3Controller = false;
            category4Controller = false;
            category6Controller = false;
            cancelCategory1();
            cancelCategory2();
            cancelCategory3();
            cancelCategory4();
            cancelCategory6();
        }
        category5Controller = !category5Controller;
    }

    function cancelCategory5(){
        if(!category5Controller){
            $(".rate_selection").css({
                display : "none"
            });
        }//if
        category5Controller = true;
    }

    function changeCategory6() {
        if (category6Controller) {
            $(".del_selection").css({
                display: "block"
            });
            category1Controller = false;
            category2Controller = false;
            category3Controller = false;
            category4Controller = false;
            category5Controller = false;
            cancelCategory1();
            cancelCategory2();
            cancelCategory3();
            cancelCategory4();
            cancelCategory5();
        }
        category6Controller = !category6Controller;
    }

    function cancelCategory6(){
        if(!category6Controller){
            $(".del_selection").css({
                display: "none"
            });
        }//if
        category6Controller = true;
    }


    let clickController =  true;
    function hamControl(){
        if(clickController){
            $(".ham-Menu").animate({
                height : "330px",
            });

        }else{
            $(".ham-Menu").animate({
                height: "0px"
            });
        }//else

        clickController = !clickController;
    }



    $("#click-btn").click(function(){
        $("#click-btn").toggleClass('active');
        hamControl();
    });

    $("#ham_sub").click(function(){
        hamControl();
    });

    $("#ham_title").click(function (){

    });

    $("#all-section").click(function(){
        changeCategory1();
    });

    $("#ham_all").click(function(){
        changeCategory1();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

    $("#type-section").click(function(){
        changeCategory2();
    });

    $("#ham_food").click(function(){
        changeCategory2();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

    $("#price-section").click(function(){
        changeCategory3();
    });

    $("#ham_price").click(function(){
        changeCategory3();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

    $("#country-section").click(function(){
        changeCategory4();
    });

    $("#ham_continent").click(function(){
        changeCategory4();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

    $("#rate-section").click(function(){
        changeCategory5();
    });

    $("#ham_rating").click(function(){
        changeCategory5();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

    $("#delivery-section").click(function(){
        changeCategory6();
    });

    $("#ham_del").click(function(){
        changeCategory6();
        hamControl();
        $("#click-btn").toggleClass('active');
    });

});


