import { Fragment } from 'react'
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
		dots: DarkDots,
		responsive: [
			{
				breakpoint: 1240,
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
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				},
			},
		],
	}

	return (
		<Fragment>
			<div className='flex md:hidden items-center justify-between gap-2 p-1 w-screen h-auto'>
				{books?.map((book) => (
					<div className='w-2/5'>
						<BookCard
							key={book._id}
							title={book.title}
							image={book.image}
							author={book.author}
							slug={book.slug}
						/>
					</div>
				))}
			</div>
			<div className='h-auto group p-1 sm:px-4 md:px-6'>
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
		</Fragment>
	)
}

export default AuthorsRow
