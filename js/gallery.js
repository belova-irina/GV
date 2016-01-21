
$(document).ready(function(){

  $('.slideshow__pic').on('click',function(e){
    e.preventDefault();
    var
    $this = $(this),
    item = $this.closest('.slideshow__item'),
    container = $this.closest('.slideshow'),
    display = container.find('.slideshow__display'),
    path = item.find('img').attr('src'),
    duration = 100;

  display.find('img').fadeOut(duration, function(){
  $(this).attr('src', path).fadeIn(duration);
});

});

});

