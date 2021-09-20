


                    
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
    
    console.log("qwe");
  });
};

$(document).ready(function(){
  init();
  initCookie();
});




var initCookie = function(){
   
      
          setTimeout(function(){
            $(".overlay, .popup").fadeToggle();
            $(".cookie-container").addClass("active");
            console.log("asas");
          }, 2000);
      
    
      
      //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
      $(".cookie-btn").on("click", function() {
        $(".cookie-container").removeClass("active");
        $(".overlay, .popup").fadeToggle();
      });
};








