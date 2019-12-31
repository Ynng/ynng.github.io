"use strict";

function setBlur(ele, radius) {
    $(ele).css({
        "-webkit-filter": "blur(" + radius + "px)",
        filter: "blur(" + radius + "px)"
    });
}

function tweenBlur(ele, startRadius, endRadius) {
    $({ blurRadius: startRadius }).animate(
        { blurRadius: endRadius },
        {
            duration: 300,
            easing: "swing", // or "linear"
            // use jQuery UI or Easing plugin for more options
            step: function () {
                setBlur(ele, this.blurRadius);
            },
            complete: function () {
                // Final callback to set the target blur radius
                // jQuery might not reach the end value
                setBlur(ele, endRadius);
            }
        }
    );
}

$(document).ready(function () {
    $("body").removeClass("preload");
});

function closeImageOverlay() {
    $("#overlay").addClass("hidden");
    $("body").removeClass("noscroll");
    tweenBlur("#main-container", 2, 0);

    setTimeout(function () {
        $("#overlay").addClass("disappear");
    }, 300);
}

var openedLabel = "about_me";
var lastOpenedLabel = "";
var animatingLabels = false;

function updateCardHeight() {
    $("." + openedLabel).each(function () {
        var style = window.getComputedStyle(this);
        $(this).removeClass("hidden");
        console.log(this.scrollHeight);
        $(this).css(
            "height",
            this.scrollHeight -
            Number(style.getPropertyValue("padding-top").slice(0, -2)) -
            Number(style.getPropertyValue("padding-bottom").slice(0, -2))
        );
    });
}

$(function () {
    $(".image").click(function () {
        $("#overlay-image").attr("src", this.src);
        $("#overlay-text").html(this.alt);
        $("body").addClass("noscroll");
        tweenBlur("#main-container", 0, 2);

        // Making sure the overlay image is as big as it can get while keeping the aspect ratio and stays within the screen
        if (this.width / this.height < $(window).width() / $(window).height()) {
            $("#overlay-image").css({
                width: "auto",
                height: "75vh"
            });
        } else {
            $("#overlay-image").css({
                width: "95vw",
                height: "auto"
            });
        }
        $("#overlay").removeClass("disappear");

        setTimeout(function () {
            $("#overlay").removeClass("hidden");
        }, 1);
    });

    $(".button.label").click(function () {
        //Only works on buttons that are not selected
        if ($(this).hasClass("selected")) return;
        if (animatingLabels) return;

        animatingLabels = true;
        //Un"select" the previous selection
        var current = $(this);
        updateCardHeight();
        //Select the current selection
        lastOpenedLabel = openedLabel;
        $("#" + openedLabel).removeClass("selected");
        $(current).addClass("selected");
        openedLabel = $(current).attr("id");
        setTimeout(function () {
            $("." + lastOpenedLabel).each(function () {
                $(this).addClass("hidden");
                $(this).css("height", "0");
            });

            //Show the cards for the current selection
            $("." + openedLabel).each(function () {
                $(this).removeClass("hidden");
            });
            updateCardHeight();

            setTimeout(function () {
                $("." + openedLabel).each(function () {
                    $(this).css("height", "");
                });
                animatingLabels = false;
            }, 400);

            //   Scroll to hopefully center the cards that just appeareed
            if (window.matchMedia("(min-width: 60rem)").matches) {
                $("html, body").animate(
                    {
                        scrollTop: $("#main_menu").offset().top - 10
                    },
                    400
                );
            } else {
                $("html, body").animate(
                    {
                        scrollTop: $(current).offset().top -100
                    },
                    400
                );
            }
        }, 1);
    });
});
