// JavaScript Document

$(document).ready(function() {
	// Smooth scroll med animate for at scroll er mere glidende
	$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} , 500, 'linear'); //Her kan f.eks tallet 500 ændres så scroll effekten bliver langsommere eller hurtigere
});
		});
