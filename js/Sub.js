$(document).ready(function(){
    let foodTypeController =  true;
    let priceTypeController =  true;
    let countryTypeController =  true;
    let rateTypeController =  true;
    let delTypeController =  true;

    function changeType(){
        if(foodTypeController){
            $(".sub-type-section").css({
                display: "block"
            });
            priceTypeController =  false;
            countryTypeController =  false;
            rateTypeController =  false;
            delTypeController =  false;
            changePrice();
            changeCountry();
            changeRate();
            changeDel();
        }else{
            $(".sub-type-section").css({
                display: "none"
            })
        }//else
        foodTypeController = !foodTypeController;
    }

    function changePrice(){
        if(priceTypeController){
            $(".sub-price-section").css({
                display  : "block"
            });
            foodTypeController =  false;
            countryTypeController =  false;
            rateTypeController =  false;
            delTypeController =  false;
            changeType();
            changeCountry();
            changeRate();
            changeDel();
        }else{
            $(".sub-price-section").css({
                display  : "none"
            });
        }//else
        priceTypeController = !priceTypeController;
    }

    function changeCountry(){
        if(countryTypeController){
            $(".sub-country-section").css({
                display : "block"
            });
            foodTypeController =  false;
            priceTypeController =  false;
            rateTypeController =  false;
            delTypeController =  false;
            changeType();
            changePrice();
            changeRate();
            changeDel();
        }else{
            $(".sub-country-section").css({
                display : "none"
            });
        }//else
        countryTypeController = !countryTypeController;
    }

    function changeRate(){
        if(rateTypeController){
            $(".sub-rate-section").css({
                display : "block"
            });
            foodTypeController =  false;
            priceTypeController =  false;
            countryTypeController =  false;
            delTypeController = false;
            changeType();
            changePrice();
            changeCountry();
            changeDel();
        }else{
            $(".sub-rate-section").css({
                display : "none"
            });
        }//else
        rateTypeController = !rateTypeController;
    }

    function changeDel(){
        if(delTypeController){
            $(".sub-del-section").css({
                display : "block"
            });
            foodTypeController =  false;
            priceTypeController =  false;
            countryTypeController =  false;
            rateTypeController =  false;
            changeType();
            changePrice();
            changeCountry();
            changeRate();
        }else{
            $(".sub-del-section").css({
                display : "none"
            });
        }//else
        delTypeController = !delTypeController;
    }

    let allController = true;
    function changeAll(){
        if(allController){
            foodTypeController =  false;
            priceTypeController =  false;
            countryTypeController =  false;
            rateTypeController =  false;
            delTypeController = false;
            changeType();
            changePrice();
            changeCountry();
            changeRate();
            changeDel();
        }
        allController = !allController;
    }

    $("#all-section").click(function(){
        changeAll();
    });

    $("#type-section").click(function(){
        changeType();
    });

    $("#ham_food").click(function(){
        changeType();
    });

    $("#price-section").click(function(){
        changePrice();
    });

    $("#ham_price").click(function(){
        changePrice();
    });

    $("#country-section").click(function(){
        changeCountry();
    });

    $("#ham_continent").click(function(){
        changeCountry();
    });

    $("#rate-section").click(function(){
        changeRate();
    });

    $("#ham_rating").click(function(){
        changeRate();
    });

    $("#delivery-section").click(function(){
        changeDel();
    });

    $("#ham_del").click(function(){
        changeDel();
    });
});
