$(".shows").slice(0, 8).show(); //showing 8 div
  
$(".loadMore").on("click",function(){
  $(".shows:hidden").slice(0, 4).show(); //showing 4 hidden div on click

  if($(".shows:hidden").length ==0)
  {
    $(".loadMore").fadeOut(); //this will hide
    //button when length is 0
  }
})


