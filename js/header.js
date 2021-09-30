const toggleNav = $(".btn.menu-btn");
const navLinks = $(".nav-links");
const closeNavBtn = $(".nav-links .close-btn");
const bodyEl = $("body");
const nav = $(".navigation-wrapper");

toggleNav.on("click", function() {
    if (navLinks.hasClass("mobile-nav-active")) {
        navLinks.removeClass("mobile-nav-active");
        bodyEl.css("overflow", "");
    } else {
        navLinks.addClass("mobile-nav-active");
        bodyEl.css("overflow", "hidden");
    }
});

closeNavBtn.on("click", function() {
    navLinks.removeClass("mobile-nav-active");
    bodyEl.css("overflow", "");
});

$(window).on("scroll", function() {
    if ($(this).scrollTop() > 1) {
        nav.addClass("sticky-nav");
    } else {
        nav.removeClass("sticky-nav");
    }
});
