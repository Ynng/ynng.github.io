window.onload = function () {
    // alert("It's loaded!")
    document.getElementById("body").classList.remove('preload');
    var images = document.getElementsByClassName("image");
    for(var i = 0, len = images.length; i<len; i++){
        images[i].addEventListener("click", openImageOverlay)
    }
}

function openImageOverlay(){
    document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    document.getElementById("overlay").style.top = "0"
    document.getElementById("overlay-text").innerHTML = document.getElementById("overlay-image").alt
    document.getElementById("body").classList.add("noscroll")
}
