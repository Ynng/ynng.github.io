window.onload = function () {
    // alert("It's loaded!")
    document.getElementById("body").classList.remove('preload');
    var images = document.getElementsByClassName("image");
    for (var i = 0, len = images.length; i < len; i++) {
        images[i].addEventListener("click", openImageOverlay)
    }
}

function openImageOverlay() {
    document.getElementById("overlay").style.transition= ".3s cubic-bezier(0.1, 1, 0.74, 0.96)"
    document.getElementById("overlay").style.visibility="visible"
    document.getElementById("overlay").style.opacity = "1"
    document.getElementById("overlay").style.top = "0"
    document.getElementById("overlay-image").src = this.src
    document.getElementById("overlay-text").innerHTML = this.alt
    document.getElementById("body").classList.add("noscroll")
}

function closeImageOverlay() {
    document.getElementById("overlay").style.transition = ".25s cubic-bezier(0, 0, 1, 0.15)"
    document.getElementById("overlay").style.opacity = "0"
    document.getElementById("overlay").style.visibility="hidden"    
    document.getElementById("body").classList.remove("noscroll")
}
