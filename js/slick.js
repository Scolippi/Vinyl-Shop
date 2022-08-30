$(document).ready(function () {
$('.bestsellers__carousel-area').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	mobileFirst: true,
	autoplay: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});
});
