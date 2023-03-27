export const settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 7,
	initialSlide: 0,
	dots: true,
	responsive: [
		{
			breakpoint: 1740,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
			},
		},
		{
			breakpoint: 1368,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
			},
		},
	],
}
