$(".carousel").owlCarousel({
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
      600:{
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
   
  })




