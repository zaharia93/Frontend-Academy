var slides = $('.slide');
var dot = $('.slide-dot');
var $ = jQuery;

// Javascript for image slider manual navigation
var changeSlide = function(index){
  slides.removeClass('active');
  dot.removeClass('active');
  slides.eq(index).addClass('active');
  dot.eq(index).addClass('active');
}

// var changeSlide = function(index)  {
//   slides.removeClass("active");
//   slides.eq(index).addClass("active");
//   dot.removeClass("active");
//   dot.eq(index).addClass("active");
//   console.log("asd");
// };


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


// Javascript for image slider autoplay navigation
// var repeat = function(activeClass){
//   let active = document.getElementsByClassName('active');
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function(){
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove('active');
//       });

//     slides[i].classList.add('active');
//     btns[i].classList.add('active');
//     i++;

//     if(slides.length == i){
//       i = 0;
//     }
//     if(i >= slides.length){
//       return;
//     }
//     repeater();
//   }, 10000);
//   }
//   repeater();
// }
// repeat();
