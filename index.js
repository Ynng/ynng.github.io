'use strict';

$(function () {
    $(".image").click(function () {
        $("#overlay").removeClass("hidden")
        $("#overlay-image").attr("src", this.src);
        $("#overlay-text").html(this.alt);
        $("body").addClass("noscroll");
    });

    $(".large.label").click(function () {
        if ($(this).hasClass("selected")) return;
        $(".large.label.selected").each(function () {
            $(this).removeClass("selected");
            $("." + this.id).each(function () {
                $(this).addClass("hidden");
                $(this).css("height", "0");
            });
        });
        $(this).addClass("selected");
        if (window.matchMedia('(min-width: 60rem)').matches) {
            $('html, body').animate({
                scrollTop: $("#main_menu").offset().top - 10
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 10
            }, 500);
        }
        
        $("." + this.id).each(function () {
            $(this).removeClass("hidden");
            $(this).css("height", this.scrollHeight);
        });
    });
});

$(document).ready(function () {
    $("body").removeClass("preload");
});

function closeImageOverlay() {
    $("#overlay").addClass("hidden");
    $("body").removeClass("noscroll");
}