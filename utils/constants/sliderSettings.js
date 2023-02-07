export const settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 5,
	initialSlide: 0,
	dots: true,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			},
		},
	],
}
