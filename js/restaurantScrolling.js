//main menu buttons
document.getElementById("all-section").addEventListener("click", moveToAll);
document.getElementById("type-section").addEventListener("click", moveToTypes);
document.getElementById("price-section").addEventListener("click", moveToPrice);
document.getElementById("country-section").addEventListener("click", moveToCountry);
document.getElementById("rate-section").addEventListener("click", moveToRating);
document.getElementById("delivery-section").addEventListener("click", moveToDelivery);
//ham menu buttons
var hamMenuBtns = document.getElementsByClassName("ham_sub_menu");
hamMenuBtns[1].addEventListener("click", moveToAll);
hamMenuBtns[2].addEventListener("click", moveToTypes);
hamMenuBtns[3].addEventListener("click", moveToPrice);
hamMenuBtns[4].addEventListener("click", moveToCountry);
hamMenuBtns[5].addEventListener("click", moveToRating);
hamMenuBtns[6].addEventListener("click", moveToDelivery);
//sub menu buttons
//sub type
document.getElementById("sub-type-first").addEventListener("click", firstType);
document.getElementById("sub-type-second").addEventListener("click", secondType);
document.getElementById("sub-type-third").addEventListener("click", thirdType);
document.getElementById("sub-type-fourth").addEventListener("click", fourthType);
document.getElementById("sub-type-fifth").addEventListener("click", fifthType);
//sub price
document.getElementById("sub-price-first").addEventListener("click", firstPrice);
document.getElementById("sub-price-second").addEventListener("click", secondPrice);
document.getElementById("sub-price-third").addEventListener("click", thirdPrice);
document.getElementById("sub-price-fourth").addEventListener("click", fourthPrice);
//sub country
document.getElementById("sub-country-first").addEventListener("click", firstCountry);
document.getElementById("sub-country-second").addEventListener("click", secondCountry);
//sub rate
document.getElementById("sub-rate-first").addEventListener("click", firstRate);
document.getElementById("sub-rate-second").addEventListener("click", secondRate);
document.getElementById("sub-rate-third").addEventListener("click", thirdRate);
document.getElementById("sub-rate-fourth").addEventListener("click", fourthRate);
//sub delivery
document.getElementById("sub-delivery-first").addEventListener("click", firstDelivery);
document.getElementById("sub-delivery-second").addEventListener("click", secondDelivery);
document.getElementById("sub-delivery-third").addEventListener("click", thirdDelivery);
document.getElementById("sub-delivery-fourth").addEventListener("click", fourthDelivery);
document.getElementById("sub-delivery-fifth").addEventListener("click", fifthDelivery);
//main menu scrolling
function moveToAll() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
function moveToTypes() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
function moveToPrice() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
function moveToCountry() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
function moveToRating() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
function moveToDelivery() {
    window.scrollTo({ top: 550, behavior: "smooth" });
}
//sub menu scrolling
//sub types
function firstType() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}
function secondType() {
    window.scrollTo({ top: 1280, behavior: "smooth" });
}
function thirdType() {
    window.scrollTo({ top: 1960, behavior: "smooth" });
}
function fourthType() {
    window.scrollTo({ top: 2215, behavior: "smooth" });
}
function fifthType() {
    window.scrollTo({ top: 2680, behavior: "smooth" });
}
//sub prices
function firstPrice() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}
function secondPrice() {
    window.scrollTo({ top: 2120, behavior: "smooth" });
}
function thirdPrice() {
    window.scrollTo({ top: 2800, behavior: "smooth" });
}
function fourthPrice() {
    window.scrollTo({ top: 3055, behavior: "smooth" });
}
//sub country
function firstCountry() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}
function secondCountry() {
    window.scrollTo({ top: 1070, behavior: "smooth" });
}
//sub rating
function firstRate() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}
function secondRate() {
    window.scrollTo({ top: 860, behavior: "smooth" });
}
function thirdRate() {
    window.scrollTo({ top: 1540, behavior: "smooth" });
}
function fourthRate() {
    window.scrollTo({ top: 2005, behavior: "smooth" });
}
//sub delivery
function firstDelivery() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}
function secondDelivery() {
    window.scrollTo({ top: 860, behavior: "smooth" });
}
function thirdDelivery() {
    window.scrollTo({ top: 1540, behavior: "smooth" });
}
function fourthDelivery() {
    window.scrollTo({ top: 2005, behavior: "smooth" });
}
function fifthDelivery() {
    window.scrollTo({ top: 2680, behavior: "smooth" });
}