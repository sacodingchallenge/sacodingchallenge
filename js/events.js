$(document).ready(function(){
	// align gifs
	$('#eventDescription p img').parent().css('text-align', 'center');

	var num = 5;
	$('.ui.card.event').hide();
	// show first 5
	$('.ui.card.event:lt(' + num + ')').show();
	// show the next 5 on click
	$('#showMoreEvents').click(function(e){
		num += 5;
		$('.ui.card.event:lt(' + num + ')').show();
		// hide more button if no more to show
		if ($('.event:hidden').length === 0) {
			$('#showMoreEvents').hide();
		}
	});
});