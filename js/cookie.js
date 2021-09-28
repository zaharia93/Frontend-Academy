function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var initCookie = function () {
  setTimeout(function () {
    if (getCookie("consent") == false) {
      $(".overlay, .popup").fadeToggle();
      $(".cookie-container").addClass("active");
      $("body").css("overflow", "hidden");
    }
  }, 2000);

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".cookie-btn, .close-btns").on("click", function () {
    setCookie("consent", true, 1);
    $(".cookie-container").removeClass("active");
    $(".overlay, .popup").fadeToggle();
    $("body").css("overflow", "");
  });
};
$(document).ready(function () {

  initCookie();
});

