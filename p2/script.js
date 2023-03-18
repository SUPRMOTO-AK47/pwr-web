window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.style.color = "#fff";
    } else {
        header.style.color = "#000";
    }
}
