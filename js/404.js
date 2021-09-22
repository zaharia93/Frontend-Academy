//Popup
function deselect(e) {
    $('.poping').slideFadeToggle(function() {
      e.removeClass('selected');
    });    
  }
  
  $(function() {
    $('#press').on('click', function() {
      $(".popup").fadeToggle();
      if($(this).hasClass('selected')) {
        deselect($(this)); 
                      
      } else {
        $(this).addClass('selected');
        $('.poping').slideFadeToggle();
      }
      return false;
    });
  
    $('.submit').on('click', function() {
      deselect($('#press'));
      $(".popup").fadeToggle();
      return false;
    });
  });
  
  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };