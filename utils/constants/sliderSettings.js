export const settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 6,
	initialSlide: 0,
	dots: true,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
			},
		},
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			},
		},
	],
}
