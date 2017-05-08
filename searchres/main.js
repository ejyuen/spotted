$(document).ready(function(){
	//set all checkboxes as checked
	$(".cbox").prop('checked', true);

	$('#exampleModal').modal({show: false});

	//popover on bottom of heart
	$('[data-toggle="popover"]').popover({
		placement: 'bottom'
	});

	//on click, set a 2 second delay before fading out popover
	$('.fav').click(function(evt){
		if ($(evt.target).attr('src') != '../images/hearticon-red.png') {
			$(evt.target).popover("show");
			setTimeout(function(){
				$('.popover').fadeOut('Slow');
			}, 2000);

		} else {
			$(evt.target).popover("hide");
		}
	});
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});

//Adding and removing from favorites
$(document).on('click', '.fav', function(evt){
	if ($(evt.target).attr('src') == '../images/hearticon-red.png') {
		var heartClass = $(evt.target).attr('id');
		var name = heartClass.substr(0, heartClass.indexOf('-'));

		$("#" + name + "-fav-modal").attr('src', '../images/hearticon-pink.png');
		$("#" + name + '-fav').attr('src', '../images/hearticon-pink.png');

	} else {
		var heartClass = $(evt.target).attr('id');
		var name = heartClass.substr(0, heartClass.indexOf('-'));
		console.log(heartClass);
		$("#" + name + "-fav-modal").attr('src', '../images/hearticon-red.png');
		$("#" + name + '-fav').attr('src', '../images/hearticon-red.png');
	}
});


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
	//get the appropriate heart color
});


function plusDivs(n, name) {
    showDivs(window[name.id + 'SlideIndex'] += n, window[name.id + 'SlideIndex'], name.id);
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

function switch_drop(phrase){
	$("#drop-down").text(phrase);
	$("#drop-down-menu").dropdown("toggle");
}
