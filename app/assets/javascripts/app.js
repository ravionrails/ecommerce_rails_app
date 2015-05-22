$(document).ready(function() {

	$('#items_container').on('mouseenter', '.item', function(){
		$(this).attr('data-hover', true);
		setTimeout(function(){ 
			$.getScript( $('div[data-hover=true]').find('.quick_detail').attr('data-url') );
		}, 2000);
  });

  $('#items_container').on('mouseleave', '.item', function(){
		$(this).removeAttr('data-hover');
  });

	$('body').on('click', '#close_overlay', function(){
  	$('#overlay').fadeOut(300);
  });

  $('body').on('click', function(e){
  	if( $(e.target).parents('#overlay').length == 0  ){
  		$('#overlay').fadeOut(300);
  	}  	
  });

  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 100) {
        if( $('.loading').length == 0 ){
        	$('#items_container').append('<div class="col-sm-4 loading"><img src="assets/ajax-loader.gif" /></div>');	
        }
        return $.getScript(url);
      }
    });
    $('.loading').remove();
    return $(window).scroll();
  }


});

