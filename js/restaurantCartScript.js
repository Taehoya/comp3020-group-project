

var cartItems = document.getElementsByClassName("cart-items");


for (var i = 0; i < cartItems.length - 1; i++) {
    cartItems[i].addEventListener("mouseover", removeState.bind(this, cartItems[i]));
    cartItems[i].addEventListener("mouseout", removeStateReset.bind(this, cartItems[i]));
    cartItems[i].addEventListener("click", removeCartItem.bind(this, cartItems[i]));
}

var cartData = [];

if (localStorage.getItem("cartData")) {
    cartData = JSON.parse(localStorage.getItem("cartData"));
    populateCart();
    updateLocalCart();
}


function populateCart() {
    for (var i = 0; i < cartData.length; i++) {
        var itemInfo = cartData[i].split(",");
        var itemName = itemInfo[0];
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].innerHTML == "") {
                cartItems[i].innerHTML = itemName;
                break;
            }
        }
    }

}

function updateLocalCart() {
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].innerHTML != "") {
            cartItems[i].style.display = "list-item";
            cartItems[i].style.textAlign = "left";
        }
    }
}


function removeCartItem(currItem) {
    cartData = JSON.parse(localStorage.getItem("cartData"));
    var currItemName = currItem.innerHTML.replace("-Remove?", "");
    currItem.innerHTML = "";
    currItem.style.display = "none";
    if (cartData != null) {
        for (var i = 0; i < cartData.length; i++) {
            var itemInfo = cartData[i].split(",");
            if (itemInfo[0] == currItemName) {
                cartData.splice(i, 1);

                updateLocalCart();
                break;
            }
        }
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
}

function removeState(currItem) {

    currItem.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
    currItem.innerHTML += "-Remove?"
    currItem.style.color = "white";

}

function removeStateReset(currItem) {
    currItem.style.backgroundColor = "";
    currItem.innerHTML = currItem.innerHTML.replace("-Remove?", "");
    currItem.style.color = "black";
}