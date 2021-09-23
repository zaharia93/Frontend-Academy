

$(".shows").slice(0, 8).show(); //showing 8 div
  
$(".loadMore").on("click",function(){
  $(".shows:hidden").slice(0, 4).show(); //showing 4 hidden div on click

  if($(".shows:hidden").length ==0)
  {
    $(".loadMore").fadeOut(); //this will hide
    //button when length is 0
  }
})

if($(window).width() >= 1080){
  $( "div" ).odd().removeClass( "owl-carousel" );
  
};

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin:40,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  nav: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive:
   {
    0: {
      items: 1,
    },
    
  },
  items: 1,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [980,3],
  itemsTablet: [768,2],
  itemsMobile : [479,1]
})