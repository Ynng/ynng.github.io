window.onload = function () {
    // alert("It's loaded!")
    document.getElementById("body").classList.remove('preload');
    var images = document.getElementsByClassName("image");
    for (var i = 0, len = images.length; i < len; i++) {
        images[i].addEventListener("click", openImageOverlay)
    }
}

function openImageOverlay() {
    document.getElementById("overlay").style.transition= ".5s cubic-bezier(0.4, 1.4, 0.74, 0.96)"
    document.getElementById("overlay").style.top = "0"
    document.getElementById("overlay-image").src = this.src
    document.getElementById("overlay-text").innerHTML = this.alt
    document.getElementById("body").classList.add("noscroll")
    setTimeout(function () { 
        document.getElementById("overlay").style.backgroundColor = "rgb(45, 43, 51,0.8)" 
        }, 350);

}

function closeImageOverlay() {
    document.getElementById("overlay").style.transition = ".4s cubic-bezier(1,-0.4, 1, 0.65)"
    document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0)"
    document.getElementById("overlay").style.top = "120vh"
    document.getElementById("body").classList.remove("noscroll")
}
