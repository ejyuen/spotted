$(document).ready(function(){
	//set all checkboxes as checked
	$(".cbox").prop('checked', true);

	$('#exampleModal').modal({show: false});

	//popover on right of heart
	$('[data-toggle="popover"]').popover({
		placement: 'right'
	});

	//on click, set a 2 second delay before fading out popover
	$('.fav').click(function(evt){
		if ($(evt.target).attr('src') == '../images/hearticon-pink.png') {
			$(evt.target).popover("toggle");
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
});


// function plusDivs(n, name) {
//     showDivs(window[name.id + 'SlideIndex'] += n, window[name.id + 'SlideIndex'], name.id);
// }
//
function showDivs(n, slideIndex, name) {
    var i;
    var x = document.getElementsByClassName(name + "Slides");
    if (n > x.length) {window[name + 'SlideIndex'] = 1}
    if (n < 1) {slideIndex = x.length} ;
}

var slideIndex_benjamin=1;
var slideIndex_robert=1;
var slideIndex_staples=1;
var slideIndex_gatsby=1;
var slideIndex_herbert=1;

function plusSlides(n,pet) {
  if (pet.id.toLowerCase()=='staples'){
    slideIndex_staples+=n;
    showSlides(slideIndex_staples,'staples');
  } else if (pet.id.toLowerCase()=='benjamin'){
    slideIndex_benjamin+=n;
    showSlides(slideIndex_benjamin,'benjamin');
  } else if (pet.id.toLowerCase()=='robert'){
    slideIndex_robert+=n;
    showSlides(slideIndex_robert,'robert');
  } else if (pet.id.toLowerCase()=='gatsby'){
    slideIndex_robert+=n;
    showSlides(slideIndex_robert,'gatsby');
  } else if (pet.id.toLowerCase()=='herbert'){
    slideIndex_robert+=n;
    showSlides(slideIndex_robert,'herbert');
  }
}

function currentSlide(n,pet) {
  if (pet.id.toLowerCase()=='staples'){
    slideIndex_staples=n;
    showSlides(slideIndex_staples,'staples');
  } else if (pet.id.toLowerCase()=='benjamin'){
    slideIndex_benjamin=n;
    showSlides(slideIndex_benjamin,'benjamin');
  } else if (pet.id.toLowerCase()=='robert'){
    slideIndex_robert=n;
    showSlides(slideIndex_robert,'robert');
  } else if (pet.id.toLowerCase()=='gatsby'){
    slideIndex_robert=n;
    showSlides(slideIndex_robert,'gatsby');
  } else if (pet.id.toLowerCase()=='herbert'){
    slideIndex_robert=n;
    showSlides(slideIndex_robert,'herbert');
  }
}

function showSlides(n,pet) {
  var i;
  var slides = document.getElementsByClassName("slides-"+pet);
  var dots = document.getElementsByClassName("dot-"+pet);
  if (n > slides.length) {
    if (pet=='staples'){
      slideIndex_staples=1;
    } else if (pet=='benjamin'){
      slideIndex_benjamin=1;
    } else if (pet=='robert'){
      slideIndex_robert=1;
    } else if (pet=='gatsby'){
      slideIndex_robert=1;
    } else if (pet=='herbert'){
      slideIndex_robert=1;
    }
  } else if (n < 1) {
    if (pet=='staples'){
      slideIndex_staples=slides.length;
    } else if (pet=='benjamin'){
      slideIndex_benjamin=slides.length;
    } else if (pet=='robert'){
      slideIndex_robert=slides.length;
    } else if (pet=='gatsby'){
      slideIndex_robert=slides.length;
    } else if (pet=='herbert'){
      slideIndex_robert=slides.length;
    }
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (pet=='staples'){
    slides[slideIndex_staples-1].style.display = "block";
    dots[slideIndex_staples-1].className += " active";
  } else if (pet=='benjamin'){
    slides[slideIndex_benjamin-1].style.display = "block";
    dots[slideIndex_benjamin-1].className += " active";
  } else if (pet=='robert'){
    slides[slideIndex_robert-1].style.display = "block";
    dots[slideIndex_robert-1].className += " active";
  } else if (pet=='gatsby'){
    slides[slideIndex_robert-1].style.display = "block";
    dots[slideIndex_robert-1].className += " active";
  } else if (pet=='herbert'){
    slides[slideIndex_robert-1].style.display = "block";
    dots[slideIndex_robert-1].className += " active";
  }
}


function switch_drop(phrase){
	$("#drop-down").text(phrase);
	$("#drop-down-menu").dropdown("toggle");
}
