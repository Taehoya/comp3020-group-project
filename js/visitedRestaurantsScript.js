
var pathName = window.location.pathname;
var pageName = pathName.split("/").pop();
var links = [];
var visitedPages = [];
if (!sessionStorage.getItem("visitedPages")) {
    sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
}

if (pageName == "restaurant.html") {
    console.log("on restaurant page")
    var pageLabels = document.getElementsByClassName("visited-items");
    visitedPages = JSON.parse(sessionStorage.getItem("visitedPages"));
    var link = "#";
    for (var i = 0; i < visitedPages.length; i++) {
        pageLabels[i].innerHTML = visitedPages[i].replace("FoodSelection", "");
        pageLabels[i].style.display = "list-item";
        links.push(pageLabels[i].innerHTML + "FoodSelection.html");


        pageLabels[i].addEventListener("click", goBackToPage)
        console.log("added " + link + " link to " + pageLabels[i].innerHTML);

    }
    for (i = 0; i < links.length; i++) {
        console.log(links[i])
    }
}

else if (pageName != "checkout.html") {
    console.log("not on restaurant or checkout page");
    pageName = pageName.replace(".html", "");
    visitedPages = JSON.parse(sessionStorage.getItem("visitedPages"));
    var duplicate = false;
    for (var i = 0; i < visitedPages.length && !duplicate; i++) {
        if (visitedPages[i] == pageName) {
            duplicate = true;
        }
    }
    if (!duplicate) {
        visitedPages.push(pageName);
    }
    sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));

}

function goBackToPage(index) {
    for (var i = 0; i < links.length; i++) {
        if (links[i].includes(this.innerHTML)) {
            window.location = links[i];
            break;
        }
    }
}
