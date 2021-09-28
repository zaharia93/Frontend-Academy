var toggleNav = $(".btn.menu-btn");
var navLinks = $(".nav-links");
var closeNavBtn = $(".nav-links .close-btn");

toggleNav.on("click", function() {
    if (navLinks.hasClass("mobile-nav-active")) {
        navLinks.removeClass("mobile-nav-active");
    } else {
        navLinks.addClass("mobile-nav-active");
    }
});

closeNavBtn.on("click", function() {
    navLinks.removeClass("mobile-nav-active");
});
