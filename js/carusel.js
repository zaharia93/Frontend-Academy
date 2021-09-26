var slides = $('.slide');
var dot = $('.slide-dot');


var changeSlide = function(index){
  slides.removeClass('active');
  dot.removeClass('active');
  slides.eq(index).addClass('active');
  dot.eq(index).addClass('active');
}

var init = function( ) {
  $(".slide-dot").on("click", function() {
    var $this = $(this);
     changeSlide($(this).index());
  });

  // $(".img-slider").on("swipeleft", function() {
  //   var activeSlide = $(this).find(".slide.active");
  //   changeSlide(activeSlide.index() + 1);
  //   console.log("here");
  // });

  // $(".img-slider").on("swiperight", function() {
  //   var activeSlide = $(this).find(".slide.active");
  //   changeSlide(activeSlide.index() + 1);
  //   console.log("here");
  // });
};

$(document).ready(function(){
  init();
});

$(document).bind("DOMSubtreeModified", function( ){
  init();
});


