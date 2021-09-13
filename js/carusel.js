var slides = $('.slide');
var dot = $('.slide-dot');
var $ = jQuery;


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
    
    console.log("qwe");
  });
};

$(document).ready(function(){
  init();
});

$(document).bind("DOMSubtreeModified", function( ){
  init();
});


