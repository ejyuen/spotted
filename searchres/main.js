$(document).ready(function(){
	//set all checkboxes as checked
	$(".cbox").prop('checked', true);

	$('#exampleModal').modal({show: false});

	$('[data-toggle="popover"]').popover();

});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});

//Adding and removing from favorites
$(document).on('click', '.fav', function(evt){
	if ($(evt.target).attr('src') == '../images/hearticon-red.png') {
		$(evt.target).attr('src', '../images/hearticon-pink.png');
		//remove popup
	} else {

		$(evt.target).attr('src', '../images/hearticon-red.png');
		//add popup

	}
});

//pet preview
$(document).on('click', '.petprev', function(evt) {
	$('#gatsby').modal('show');

});
$(document).on('click', '.petinf', function(evt) {
	$('#gatsby').modal('show');
});