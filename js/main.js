$(document).ready(function(){

$('.fifth__container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000
});


$('.third__container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});



var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  layoutMode: 'masonry',
   masonry: {
       horizontalOrder: true
   }
  });


});

$('.sort__item').click(function(){
	$('.sort__item').removeClass('activity');
	$(this).addClass('activity');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter: selector
	});
	return false;
});



$(".nav__item").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

$(".header__scroll").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

});

