

$(".shows").slice(0, 16).show(); //showing 16 div

$(".loadMore").on("click", function () {
  $(".shows:hidden").slice(0, 4).show(); //showing 4 hidden div on click

  if ($(".shows:hidden").length == 0) {
    $(".loadMore").fadeOut(); //this will hide
    //button when length is 0
  }
})

function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".popular-carousel");
  if (checkWidth > 767) {
    if (typeof owlPost.data('owl.carousel') != 'undefined') {
      owlPost.data('owl.carousel').destroy();
    }
    owlPost.removeClass('owl-carousel');
  } else if (checkWidth < 768) {
    owlPost.addClass('owl-carousel');
    owlPost.owlCarousel({
      loop: true,
      autoplay: true,
      margin: 40,
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
      items: 1
      // itemsDesktop : [1199,4],
      // itemsDesktopSmall : [980,3],
      // itemsTablet: [768,2],
      // itemsMobile : [479,1]
    })
  }
}

postsCarousel();
$(window).resize(postsCarousel);


// Change color by click

/*-- target all anchor tags--*/
var anchor = document.querySelectorAll("ul li a");

/*--this is the syntax of for each loop--*/
anchor.forEach(function (obj) {
  /*-- here obj return all anchor tags--*/
  /*console.log(obj)*/

  /* get background color clicked anchor tag*/

  obj.addEventListener("click", function () {
    /*-- add click event on anchor tag--*/
    /*alert('hi')*/


    /* get background color clicked anchor tag*/

    var getColor = obj.style.background;

    /*alert(getColor);*/
    /*====this will return color in rgba form===*/

    document.getElementById("red").style.background = getColor;

  })
});