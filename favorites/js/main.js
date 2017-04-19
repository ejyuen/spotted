$(document).ready(function() {
	$('#thumb1').on('click', function() {
		$("#mainPic").attr('src', '../images/GatsbyProfile.png');
		console.log('hello');
	});

	$('#thumb2').on('click', function() {
		$("#mainPic").attr('src', '../images/Gatsby1.png');
		console.log('hello');
	});

	$('#thumb3').on('click', function() {
		$("#mainPic").attr('src', '../images/Gatsby2.png');
		console.log('hello');
	});

	$('#thumb4').on('click', function() {
		$("#mainPic").attr('src', '../images/Gatsby3.png');
		console.log('hello');
	});
});

