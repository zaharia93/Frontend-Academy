// Quantity
var quantityEl = $("#quantity");
var decreaseNumber = $(".decrease-number");
var increaseNumber = $(".increase-number");

var addToCart = $(".add-to-cart");
var basketCounter = $(".basket-counter");
var basket = $("#basket");
var basketPopup = $(".basket-popup");
var clearBasket = $(".clear-basket");

var cardAddToCart = $(".card-add-to-cart");

decreaseNumber.on("click", function () {
  var actualQuantity = quantityEl.val();
  if (actualQuantity > 1) {
    quantityEl.val(Number(actualQuantity) - 1);
  }
});

increaseNumber.on("click", function () {
  var actualQuantity = quantityEl.val();
  quantityEl.val(Number(actualQuantity) + 1);
});

// Add to cart
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var initBasket = function () {
    if (getCookie("basket") > 0) {
    basketCounter.html(getCookie("basket"));
    basketCounter.addClass("has-quantity");
    } else {
        basketCounter.removeClass("has-quantity");
        basketCounter.html();
    }
};
  
$(document).ready(function () {
    initBasket();
});
    
addToCart.on("click", function () {
    var quantity = Number(quantityEl.val());
    var basketQuantity = Number(basketCounter.html());
    var newQuantity = quantity + basketQuantity;

    basketCounter.html(newQuantity);
    basketCounter.addClass("has-quantity");
    setCookie("basket", newQuantity, 1);
});

cardAddToCart.on("click", function () {
  var basketQuantity = Number(basketCounter.html());
  var newQuantity = basketQuantity + 1;

  basketCounter.html(newQuantity);
  basketCounter.addClass("has-quantity");
  setCookie("basket", newQuantity, 1);
});

basket.on("click", function (e) {
  e.preventDefault();

  basketPopup.toggleClass("active");
  basket.toggleClass("active");
});

clearBasket.on("click", function() {
  setCookie("basket", 0);
  basketCounter.html("");
  basketCounter.removeClass("has-quantity");
  basketPopup.removeClass("active");
  basket.removeClass("active");
});