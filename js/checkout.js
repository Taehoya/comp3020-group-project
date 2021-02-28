var lastRemovedItem;
var lastRemovedItemParent;

var html = '<input type="button" value="Undo" onclick="undoRemove()">';
var removedInnerHTML;
var goBackHTML =
    `<div class="goBack">
    <p>Go back to restaurant selection</p>
    <a href="../html/restaurant.html"></a>
</div>
`

var itemListOldState;

//pretend data is grabbed from session storage
var names = [];
var prices = [];
var quantities = [];

//comment out if session storage test
//var cartData = ["coffee,Price: $2.99", "tea,Price: $2.99", "beef,Price: $2.99", "chicken,Price: $2.99", "coffee2,Price: $2.99", "pork,Price: $2.99", "fries,Price: $2.99",
//"coffee,Price: $2.99", "tea,Price: $2.99", "beef,Price: $2.99", "chicken,Price: $2.99", "coffee2,Price: $2.99", "pork,Price: $2.99"];

//comment out if local test
var cartData= [];
if (localStorage.getItem("cartData")) {
    cartData = JSON.parse(localStorage.getItem("cartData"));
}

if (sessionStorage.getItem("paymentInfoInner")) {
    document.getElementById("paymentInfo").innerHTML = sessionStorage.getItem("paymentInfoInner");
}


for (var i = 0; i < cartData.length; i++) {
    var itemInfo = cartData[i].split(",");
    var itemName = itemInfo[0];
    var itemPrice = itemInfo[1].replace("$", "");
    names.push(itemName);
    prices.push(parseFloat(itemPrice));
    quantities.push(1);
}

//default prices
var subTotal = 0;
var deliveryFee = 3.50;

//"import" the items from seesion storage

if (cartData.length == 0) {
    document.getElementById("itemListContainer").innerHTML = goBackHTML;
    document.getElementById("grandTotal").innerHTML = "Grand Total: $" + subTotal.toFixed(2);
}

populateList();

function populateList(){
    var numItems = prices.length;
    var index;

    for (index = 0; index < numItems; index++){
        subTotal += prices[index] * quantities[index];
        const div = document.createElement('div');
        div.className = 'itemContainer';
        div.setAttribute("id", "item" + index);
        div.setAttribute("data-index", index);
        div.setAttribute("data-price", prices[index]);
        div.setAttribute("data-quantity", quantities[index]);
        div.innerHTML = `                    
            <div class="itemTitle">
                <h1>` + names[index] + `</h1>
            </div>
            <div class = "deleteItem">
                <div class="remove" onclick="removeItem(this)"></div>
            </div> 
            <div class="itemPrice">
                <p>Price: $` + prices[index] + `</p>
            </div>
            `
        document.getElementById("itemListContainer").insertBefore(div, document.getElementById("itemListContainer").childNodes[0]);
    }
    refreshTotal();
}

function lowerItemAmount(element){
    var item = element.parentNode.parentNode;
    var itemIndex = item.getAttribute("data-index");
    var quantity = item.getAttribute("data-quantity");
    if (quantity == 1){
        //do nothing cannot decrease anymore
        //put in warning or instruct to delete item
    }
    else{
        //decrease amount by 1
        quantity--;
        item.setAttribute("data-quantity", quantity);
        element.parentNode.getElementsByTagName('p')[0].innerHTML = quantity;
        quantities[itemIndex] = quantity;
        refreshTotal();
    }
}

function raiseItemAmount(element){
    var item = element.parentNode.parentNode;
    var itemIndex = item.getAttribute("data-index");
    var quantity = item.getAttribute("data-quantity");
    quantity++;
    item.setAttribute("data-quantity", quantity);
    element.parentNode.getElementsByTagName('p')[0].innerHTML = quantity;
    //update quantity array
    quantities[itemIndex] = quantity;
    refreshTotal();

}

function undoRemove(){
    document.getElementById("itemListContainer").innerHTML = itemListOldState;
}


function removeItem(element) {
    var parent = element.parentNode; //gets itemQuantity div
    var grandparent = parent.parentNode;    //gets current itemContainer div
    lastRemovedItem = grandparent; //save current itemContainer globally
    removedInnerHTML = grandparent.innerHTML;   //save html inside the itemContainer
    var itemIndex = grandparent.getAttribute("data-index"); //get index to update quantity
    quantities[itemIndex] = 0;
    lastRemovedItemParent = grandparent.parentNode; //gets the itemListContainer
    itemListOldState = lastRemovedItemParent.innerHTML; //store the old state of the item list in case of undo
    grandparent.parentNode.removeChild(grandparent);
    refreshTotal();
    updateCart();
    if (isEmpty()){
        document.getElementById("itemListContainer").innerHTML = goBackHTML;
        document.getElementById("grandTotal").innerHTML = "Grand Total: $" + subTotal.toFixed(2);
    }
    //document.getElementById("leftColumn").innerHTML = html;
}


function refreshTotal() {
    var newSubTotal = 0;
    for(i = 0; i < prices.length; i++){
        newSubTotal += prices[i] * quantities[i];
    }
    subTotal = newSubTotal;
    document.getElementById("subTotal").innerHTML = "Subtotal: $" + subTotal.toFixed(2);
    document.getElementById("grandTotal").innerHTML = "Grand Total: $" + (subTotal + deliveryFee).toFixed(2);
}

function updateCart(){
    var newCartData = [];
    var newPrices = [];
    var newNames = [];
    var newQuantities = [];
    var tempString = "";
    for(i = 0; i < quantities.length; i++){
        if (quantities[i] != 0){
            newQuantities.push(1);
            newNames.push(names[i]);
            newPrices.push(prices[i]);
            tempString = names[i] + `,$` + prices[i];
            newCartData.push(tempString);
        }
    }
    localStorage.setItem("cartData", JSON.stringify(newCartData));
}

function isEmpty(){
    var result = true;
    for(i = 0; i < quantities.length; i++){
        if (quantities[i] == 1){
            result = false;
            break;
        }
    }
    return result;
}


function clearTotals() {
    document.getElementById("grandTotal").innerHTML = "Grand Total: $" + (subTotal + deliveryFee).toFixed(2);
}

function checkout(element){
    resetCart();
    document.getElementById("itemListContainer").innerHTML = `<p class="thankYou">Your order has been placed.</p>` + goBackHTML;
    (element.parentNode).removeChild(element);
}

function resetCart(){
    var empty = [];
    localStorage.setItem("cartData", JSON.stringify(empty));
}

function startOver(element){
    resetCart();
    document.getElementById("itemListContainer").innerHTML = `<p class="thankYou">Your cart has been reset. Go back to the restaurants page and start over.</p>` + goBackHTML;
}


function addCard() {
    var state = document.getElementById("cardForm");
    if (state.style.display == "none"){
        document.getElementById("cardForm").style.display = "block";
        document.getElementById("cancelC").style.display = "block";
        document.getElementById("addC").style.display = "none";
    }
    else {
        document.getElementById("cardForm").style.display = "none";
        document.getElementById("cancelC").style.display = "none";
        document.getElementById("addC").style.display = "block";

    }
}


function addNewCard(name, number, ccv) {
    var numString = number.toString();
    addCard();
    if (sessionStorage.getItem("n")) {
        var n = parseInt(sessionStorage.getItem("n"));
    }
    else {
        sessionStorage.setItem("n", JSON.stringify(4));
        var n = 4;
    }
    var div = document.createElement('label');
    div.className = 'creditCards';
    div.setAttribute("for", "card" + n);
    div.setAttribute("id", "cc" + n);
    div.innerHTML = `                    
            <input type="radio" name="cards" id="card` + n + `">
            <img src="../images/Credit/creditcard.png" alt="card"` + n + `>
            <div>
                <p class="cardName">` + name  +  `<br>Ending: ` + numString.slice(12) + `</p>
            </div>
        `
    document.getElementById("paymentInfo").insertBefore(div, document.getElementById("paymentInfo").childNodes[1].nextSibling);
    sessionStorage.setItem("paymentInfoInner", document.getElementById("paymentInfo").innerHTML);
    n++;
    console.log(n);
    sessionStorage.setItem("n", JSON.stringify(n));
}

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form has been sumbitted");
});