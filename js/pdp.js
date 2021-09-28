//Change picture

const imgs = document.querySelectorAll('.img-select .img-item');
const imgBtns = [...imgs];
let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         imgItem.classList.add("selected-img");
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

const imgsThumbnails = $(".img-select .img-item");

imgsThumbnails.on("click", function () {
    var $this = $(this);
    imgsThumbnails.removeClass("selected-img");
    $(this).addClass("selected-img");
    imgId = $this.data("id");
    slideImage();

})

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


//Read more


$(document).ready(function(){
    var maxLength = 300;
    $(".show-read-more").each(function(){
        var myStr = $(this).text();
        if($.trim(myStr).length > maxLength){
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">Read more</a>');
            $(this).append('<span class="more-text">' + removedStr + '</span>');
        }
    });
    $(".read-more").click(function(){
        $(this).siblings(".more-text").contents().unwrap();
        $(this).remove();
    });
});
  