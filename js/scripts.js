        (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

var vid26 = document.getElementById("Video26");
var vid30 = document.getElementById("Video30");
function pauseVid() {
    vid26.pause();
    vid26.currentTime = 0;
    vid30.pause();
    vid30.currentTime = 0;
}
var aud16 = document.getElementById("Audio16");
var aud27 = document.getElementById("Audio27");
var aud28 = document.getElementById("Audio28");
var aud32 = document.getElementById("Audio32");

function pauseAudio() {
    aud16.pause();
    aud16.currentTime = 0;
    aud27.pause();
    aud27.currentTime = 0;
    aud28.pause();
    aud28.currentTime = 0;
    aud32.pause();
    aud32.currentTime = 0;
}
