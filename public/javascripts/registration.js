$(document).ready( function(){

	var registration = $("#registration");

	registration.carousel({
		interval:false,
		wrap: false
	});

	$(".carousel-control-prev").click(function(){
		registration.carousel("prev");
	});
	$(".carousel-control-next").click(function(){
		registration.carousel("next");
	});

});