'use strict';

$(function () {
    $(".image").click(function () {
        $("#overlay").css({
            "transition": ".75s cubic-bezier(0.08, 0.82, 0.17, 1)",
            "top": "0"
        });
        $("#overlay-image").attr("src", this.src);
        $("#overlay-text").html(this.alt);
        $("body").addClass("noscroll");
    });

    $(".large.label").click(function () {
        $(this).addClass("selected");
        $("." + this.id).each(function(){
            $(this).removeClass("hidden");
            $(this).css("height",this.scrollHeight);
        })

        $(".large.label").not("#" + this.id).each(function () {
            $(this).removeClass("selected");
            $("." + this.id).each(function(){
                $(this).addClass("hidden");
                $(this).css("height","0");
            });
        });
    });
});

$(document).ready(function () {
    $("body").removeClass("preload")
});

function closeImageOverlay() {
    $("#overlay").css({
        "transition": ".5s cubic-bezier(0.08, 0.82, 0.17, 1)",
        "top": "100vh"
    });
    $("body").removeClass("noscroll");
}