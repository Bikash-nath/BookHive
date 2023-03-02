import Slider from 'react-slick'

export default function Carousel() {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	}

	return (
		<div>
			<h2>Carousel</h2>
			<Slider {...settings}>
				<div>
					<h2>1</h2>
				</div>
				<div>
					<h2>2</h2>
				</div>
				<div>
					<h2>3</h2>
				</div>
			</Slider>
		</div>
	)
}
