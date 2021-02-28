document.getElementById("beef-section").addEventListener("click", moveToBeef);
document.getElementById("chicken-section").addEventListener("click", moveToChicken);
document.getElementById("seafood-section").addEventListener("click", moveToSeafood);
document.getElementById("appetizer-section").addEventListener("click", moveToAppetizers);





function moveToBeef() {
    window.scrollTo({ top: 300, behavior: "smooth" });
    //260
}

function moveToChicken() {
    window.scrollTo({ top: 1000, behavior: "smooth" });
}

function moveToSeafood() {
    window.scrollTo({ top: 1900, behavior: "smooth" });
}

function moveToAppetizers() {
    window.scrollTo({ top: 2810, behavior: "smooth" });
}

