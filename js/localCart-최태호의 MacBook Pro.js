

var cartItems = document.getElementsByClassName("cart-items");
var foodItems = document.getElementsByClassName("food-item-container");
var localCartTotal = document.getElementById("local-cart-total");
document.getElementById("checkout-btn").addEventListener("click", function () { window.location = "#" });
var cartTotal = 0.00;


for (var i = 0; i < foodItems.length; i++) {
    foodItems[i].addEventListener("click", addToCart.bind(this, foodItems[i]));
}

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
        console.log(cartData[i]);
        var itemInfo = cartData[i].split(",");
        var itemName = itemInfo[0];
        var itemPrice = itemInfo[1].replace("Price: $", "");
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].innerHTML == "" || cartItems[i].innerHTML == "Your Cart is Empty") {
                cartItems[i].innerHTML = itemName;
                cartTotal += parseFloat(itemPrice).toFixed(2) * 1;
                break;
            }
            else if (i == (cartItems.length - 1)) {
                alert("Sorry, Your cart is full");
            }
        }
    }

}

function updateLocalCart() {
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].innerHTML != "" && cartItems[i].innerHTML != "Your Cart is Empty") {
            cartItems[i].style.display = "list-item";
            cartItems[i].style.textAlign = "left";
        }
    }
    localCartTotal.innerHTML = "Total: $" + (cartTotal.toFixed(2) * 1);
}

function addToCart(currItem) {
    cartData = JSON.parse(localStorage.getItem("cartData"));
    var itemNameContainer = currItem.getElementsByClassName("name-container");
    var itemName = itemNameContainer[0].getElementsByTagName("h2");
    var itemPriceContainer = currItem.getElementsByClassName("price-container");
    var itemPrice = itemPriceContainer[0].getElementsByTagName("h2");
    if (cartData == null) {
        cartData = [];
    }
    if (cartData.length < 7) {
        cartData.push(itemName[0].innerHTML + "," + itemPrice[0].innerHTML);
    }
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].innerHTML == "" || cartItems[i].innerHTML == "Your Cart is Empty") {
            cartItems[i].innerHTML = itemName[0].innerHTML;
            cartTotal += parseFloat(itemPrice[0].innerHTML.replace("Price: $", "")).toFixed(2) * 1;
            break;
        }
        else if (i == (cartItems.length - 1)) {
            alert("Sorry, Your cart is full");
        }
    }
    updateLocalCart();
    localStorage.setItem("cartData", JSON.stringify(cartData));
    printCartData();
}

function printCartData() {
    console.log("cart length: " + cartData.length)
    cartData = JSON.parse(localStorage.getItem("cartData"));
    for (var i = 0; i < cartData.length; i++) {
        console.log(cartData[i]);
    }
}

function removeCartItem(currItem) {
    cartData = JSON.parse(localStorage.getItem("cartData"));
    var currItemName = currItem.innerHTML.replace("-Remove?", "");
    currItem.innerHTML = "";
    var visibleCount = 0;
    var localCartItems = document.getElementsByClassName("cart-items");
    for (var i = 0; i < localCartItems.length - 1; i++) {
        if (getComputedStyle(localCartItems[i]).display != "none") {
            visibleCount++;
        }
    }

    if (visibleCount > 1) {
        currItem.style.display = "none";
    }
    else {
        currItem.display = "list-item";
        currItem.innerHTML = "Your Cart is Empty";
        currItem.style.textAlign = "center";
    }
    if (cartData != null) {
        for (var i = 0; i < cartData.length; i++) {
            var itemInfo = cartData[i].split(",");
            console.log("removing: " + itemInfo[0]);
            console.log("current item: " + currItemName);
            if (itemInfo[0] == currItemName) {
                cartData.splice(i, 1);
                //console.log(itemInfo[1])
                cartTotal -= parseFloat(itemInfo[1].replace("Price: $", "")).toFixed(2) * 1;
                updateLocalCart();
                break;
            }
        }
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
}

function removeState(currItem) {
    if (currItem.innerHTML != "Your Cart is Empty") {
        currItem.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
        currItem.innerHTML += "-Remove?"
        currItem.style.color = "white";
    }

    // setTimeout(function () {
    //     currItem.style.backgroundColor = "";
    // }, 200)
}

function removeStateReset(currItem) {
    currItem.style.backgroundColor = "";
    currItem.innerHTML = currItem.innerHTML.replace("-Remove?", "");
    currItem.style.color = "black";
}
// localStorage.clear();

