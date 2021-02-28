var topBtn = document.getElementById("top_icon").addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


var subTop = document.getElementById("ham_sub").addEventListener("click", scrollToSug);

function scrollToSug() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

