$(document).ready(function() {

	$('.slider-home').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		speed: 600,
		adaptiveHeight: true,
		asNavFor: '.slider__nav'
	});
	$('.slider__nav').slick({
		slidesToShow: 5,
		asNavFor: '.slider-home',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		swipeToSlide: true,
		arrows: false,
		centerPadding: '75px',
		responsive: [
			{
				breakpoint: 870,
				settings: {
					centerPadding: '40px',
					slidesToShow: 5
				}
			},
			{
				breakpoint: 801,
				settings: {
					centerPadding: '150px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 726,
				settings: {
					centerPadding: '100px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 652,
				settings: {
					centerPadding: '60px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 560,
				settings: {
					centerPadding: '160px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 470,
				settings: {
					centerPadding: '130px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 406,
				settings: {
					centerPadding: '110px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 361,
				settings: {
					centerPadding: '100px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 346,
				settings: {
					centerPadding: '80px',
					slidesToShow: 1
				}
			},
		]
	});

	$('.slider__blog').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		speed: 600,
	});

	$('.hamburger__menu').on("change", function () {
		if($('#checkbox1').prop('checked')){
			$('.menu__content').slideDown("slow");
		}
		else{
			$('.menu__content').slideUp("slow");
		}

	});
	$('.filter__items a').on("click", function () {
		$('.filter__items a').removeClass('red__border');
		$(this).addClass('red__border');
	});

	$('.item__work .fa').mouseenter(function () {
		$(this).show();
	})
});