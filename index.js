window.onload = function () {
    // alert("It's loaded!")
    document.getElementById("body").classList.remove('preload');
    var images = document.getElementsByClassName("image");
    for (var i = 0, len = images.length; i < len; i++) {
        images[i].addEventListener("click", openImageOverlay)
    }
}

function openImageOverlay() {
    document.getElementById("overlay").style.transition= ".75s cubic-bezier(0.08, 0.82, 0.17, 1)"
    document.getElementById("overlay").style.top = "0"
    document.getElementById("overlay-image").src = this.src
    document.getElementById("overlay-text").innerHTML = this.alt
    document.getElementById("body").classList.add("noscroll")
}

function closeImageOverlay() {
    document.getElementById("overlay").style.transition = ".5s cubic-bezier(0.08, 0.82, 0.17, 1)"
    document.getElementById("overlay").style.top = "100vh"
    document.getElementById("body").classList.remove("noscroll")
}