import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import AuthorCard from './AuthorCard'

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
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3,
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
		<div className='h-auto group m-2 p-2 bg-opacity-60 backdrop-blur-sm animate-slideup rounded-lg'>
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
