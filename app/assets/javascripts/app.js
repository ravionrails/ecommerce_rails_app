// $(document).ready(function(){

// 	$( "#items_container" ).scroll(function() {
// 		console.log($(this).scrollTop());
// 		var url = $('.pagination .next_page').attr('href');
// 		if( $(this).scrollTop() > 1000 ){
// 			//console.log('v');
// 			$.getScript( url );
// 		}	  
// 	});

// })

$(document).ready(function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 100) {
        // $('.pagination').text("Please Wait...");
        if( $('.loading').length == 0 ){
        	$('#items_container').append('<div class="col-sm-4 loading"><img src="assets/ajax-loader.gif" /></div>');	
        }
        
        // setTimeout(function(){ 
        // 	$.getScript(url); }, 1500);
        return $.getScript(url);
      }
    });
    $('.loading').remove();
    return $(window).scroll();
  }
});