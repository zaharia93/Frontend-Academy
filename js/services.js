

// items.slice(0, 4).show(); //showing 16 div

// $(".loadMore").on("click", function () {
//   $(".shows:hidden").slice(0, 4).show(); //showing 4 hidden div on click

//   if ($(".shows:hidden").length == 0) {
//     $(".loadMore").fadeOut(); //this will hide
//     //button when length is 0
//   }
// })

function postsCarousel() {
  var checkWidth = $(window).width();
  var items = $(".shows");
  var itemsHidden = $(".shows:hidden")
  var loadMore = $(".loadMore");

  items.hide();

  if (checkWidth <= 768) {
    items.slice(0, 4).show(); //showing 16 div

    loadMore.on("click", function () {
      itemsHidden.slice(0, 4).show(); //showing 4 hidden div on click

      if (itemsHidden.length == 0) {
        loadMore.fadeOut(); //this will hide
        //button when length is 0
      }
    });
  } else if (checkWidth > 768) {
    items.slice(0, 16).show(); //showing 16 div

    loadMore.on("click", function () {
      itemsHidden.slice(0, 4).show(); //showing 4 hidden div on click

      if (itemsHidden.length == 0) {
        loadMore.fadeOut(); //this will hide
        //button when length is 0
      }
    });
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