'use strict';

$(function () {
    $(".image").click(function () {
        $("#overlay-image").attr("src", this.src);
        $("#overlay-text").html(this.alt);
        $("body").addClass("noscroll");

        // Making sure the overlay image is as big as it can get while keeping the aspect ratio and stays within the screen
        if ($("#overlay-image").width() / $(window).width() < $("#overlay-image").height() / $(window).height()) {
            $("#overlay-image").css({
                "width": "auto",
                "height": "75vh"
            });
        } else {
            $("#overlay-image").css({
                "width": "95vw",
                "height": "auto"
            });
        }

        $("#overlay").removeClass("hidden");
    });

    $(".large.label").click(function () {
        //Only works on buttons that are not selected
        if ($(this).hasClass("selected")) return;

        //Un"select" the previous selection
        $("." + $(".large.label.selected").attr("id")).each(function () {
            $(this).addClass("hidden");
            $(this).css("height", "0");
        });
        $(".large.label.selected").removeClass("selected");

        //Select the current selection
        $(this).addClass("selected");
        
        //Show the cards for the current selection
        $("." + this.id).each(function () {
            $(this).removeClass("hidden");
            $(this).css("height", this.scrollHeight);
        });

        //Scroll to hopefully center the cards that just appeareed
        if (window.matchMedia('(min-width: 60rem)').matches) {
            $('html, body').animate({
                scrollTop: $("#main_menu").offset().top - 10
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 10
            }, 500);
        }        
    });
});

$(document).ready(function () {
    $("body").removeClass("preload");
});

function closeImageOverlay() {
    $("#overlay").addClass("hidden");
    $("body").removeClass("noscroll");
}