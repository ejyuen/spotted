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
	} else {

		$(evt.target).attr('src', '../images/hearticon-red.png');
	}
});

var gatsbySlideIndex = 1;
var herbertSlideIndex = 1;
var pingSlideIndex = 1;
var benjSlideIndex = 1;

//pet preview
$(document).on('click', '.petprev', function(evt) {

	var name = $(evt.target).closest('[id]').prop('id');
	var namestr = name + 'SlideIndex';
	showDivs(window[namestr], window[namestr], name);

	$('#' + name + 'Modal').modal('show');

});

$(document).on('click', '.petinf', function(evt) {
	var name = $(evt.target).closest('[id]').prop('id');
	var namestr = name + 'SlideIndex';
	showDivs(window[namestr], window[namestr], name);

	$('#' + name + 'Modal').modal('show');
});


function plusDivs(n, name) {
    showDivs(window[name + 'SlideIndex'] += n, window[name + 'SlideIndex'], name);
}

function showDivs(n, slideIndex, name) {

    var i;
    var x = document.getElementsByClassName(name + "Slides");
    if (n > x.length) {window[name + 'SlideIndex'] = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[window[name + 'SlideIndex'] -1].style.display = "block"; 
}