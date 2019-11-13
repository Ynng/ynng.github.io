'use strict';

var setBlur = function (ele, radius) {
    $(ele).css({
        "-webkit-filter": "blur(" + radius + "px)",
        "filter": "blur(" + radius + "px)"
    });
},

tweenBlur = function (ele, startRadius, endRadius) {
    $({ blurRadius: startRadius }).animate({ blurRadius: endRadius }, {
        duration: 500,
        easing: 'swing', // or "linear"
        // use jQuery UI or Easing plugin for more options
        step: function () {
            setBlur(ele, this.blurRadius);
        },
        complete: function () {
            // Final callback to set the target blur radius
            // jQuery might not reach the end value
            setBlur(ele, endRadius);
        }
    });
};

$(document).ready(function () {
    $("body").removeClass("preload");
});

function closeImageOverlay() {
    $("#overlay").addClass("hidden");
    $("body").removeClass("noscroll");
    tweenBlur('#main-container',2,0);
}

$(function () {


    $(".image").click(function () {
        $("#overlay-image").attr("src", this.src);
        $("#overlay-text").html(this.alt);
        $("body").addClass("noscroll");
        tweenBlur('#main-container',0,2);
        // Making sure the overlay image is as big as it can get while keeping the aspect ratio and stays within the screen
        if ($("#overlay-image").width() / $("#overlay-image").height() < $(window).width() / $(window).height()) {
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

    $(".button.label").click(function () {
        //Only works on buttons that are not selected
        if ($(this).hasClass("selected")) return;

        //Un"select" the previous selection
        $("." + $(".button.label.selected").attr("id")).each(function () {
            $(this).addClass("hidden");
            $(this).css("height", "0");
        });
        $(".button.label.selected").removeClass("selected");

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
