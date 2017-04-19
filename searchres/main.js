$(document).ready(function(){
	//set all checkboxes as checked
	$(".cbox").prop('checked', true);

});

//change
$(document).on('click', '.fav', function(evt){
	if ($(evt.target).attr('src') == '../images/hearticon-red.png') {
		$(evt.target).attr('src', '../images/hearticon-pink.png');
		//remove popup
	} else {

		$(evt.target).attr('src', '../images/hearticon-red.png');
		//add popup

	}

});