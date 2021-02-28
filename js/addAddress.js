if (sessionStorage.getItem("addressInfoInner")) {
    document.getElementById("addresses").innerHTML = sessionStorage.getItem("addressInfoInner");
}

const addressForm = document.getElementById("addressForm");
addressForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form has been sumbitted");
});


function addAddress(streetNum, streetName) {
    document.getElementById("addressForm").style.display = "none";
    var div = document.createElement('ul');
    div.className = 'addresses_wrap_box';
    div.innerHTML = `                    
    <li class = "imgCon_1">
    </li>
    <li class = "addresses">` + streetNum + ` ` + streetName + ` Winnipeg, MB</li>
    <li class = "radio">  </li>
        `
    document.getElementById("addresses").insertBefore(div, document.getElementById("addresses").childNodes[0]);
    sessionStorage.setItem("addressInfoInner", document.getElementById("addresses").innerHTML);
    console.log(sessionStorage.getItem("addressInfoInner"));
}

function toggleAddressForm(){
    var x = document.getElementById("addressForm");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

