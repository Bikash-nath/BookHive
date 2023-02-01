import Slider from 'react-slick'
import AuthorCard from './AuthorCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function AuthorsRow({ authors }) {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					dots: true,
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
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

	return (
		<div className='h-auto group p-1 sm:px-4 md:px-6 bg-opacity-60 backdrop-blur-sm animate-slideup rounded-lg'>
			<Slider {...settings}>
				{authors?.map((author) => (
					<AuthorCard
						key={author._id}
						name={author.name}
						image={author.image_sm}
						slug={author.slug}
					/>
				))}
			</Slider>
		</div>
	)
}

export default AuthorsRow
