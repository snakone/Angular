(function($){
  $(function(){

/* Start all Elements */

$('.sidenav').sidenav();
$('.parallax').parallax();
$('.carousel').carousel();
$('.modal').modal();
$('.scrollspy').scrollSpy();

/* Slow Scroll When Anchor Links */

$("a.scrollLink").click(function (event) {
	event.preventDefault();
	$("html, body").animate({ scrollTop:$($(this).attr("href")).offset().top }, 1000);
$('.sidenav').sidenav('close');
	});

/*Make Top Section Adjust by Window Size */

$(window).ready(function(){
var wheight = $(window).height();
$('#index-banner').css('height', wheight);
});

$(window).resize(function(){
var wheight = $(window).height();
$('#index-banner').css('height', wheight);
});


  }); // end of document ready
})(jQuery); // end of jQuery name space
