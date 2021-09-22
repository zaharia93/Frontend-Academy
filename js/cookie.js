var initCookie = function(){
   
      
    setTimeout(function(){
      $(".overlay, .popup").fadeToggle();
      $(".cookie-container").addClass("active");
      console.log("asas");
    }, 2000);



//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".cookie-btn, .close-btns").on("click", function() {
  
  $(".cookie-container").removeClass("active");
  $(".overlay, .popup").fadeToggle();
});
};
$(document).ready(function(){
    
    initCookie();
  });

  