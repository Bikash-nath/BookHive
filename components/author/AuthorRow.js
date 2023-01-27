import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import AuthorCard from './AuthorCard'

function AuthorsRow({ authors }) {
	var settings = {
		infinite: true,
		arrows: true,
		speed: 200,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true,
					arrows: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 4,
					arrows: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	}

	return (
		// <Row className="mb-3 px-5">
		<Slider {...settings}>
			{authors?.map((author) => (
				<div key={author._id} className='px-1'>
					<AuthorCard
						name={author.name}
						image={author.image}
						slug={author.slug}
					/>
				</div>
			))}
		</Slider>
	)
}

export default AuthorsRow
