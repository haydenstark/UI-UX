function change() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    if (img2.style.display == "none") {
        img1.style.opacity = 0;
        img1.style.display = "none";
        img2.style.opacity = 1;
        img2.style.display = "";
    }
    else {
        img1.style.opacity = 1;
        img1.style.display = "";
        img2.style.opacity = 0;
        img2.style.display = "none";
    }
}