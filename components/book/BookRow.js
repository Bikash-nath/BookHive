import { Fragment } from 'react'
import Slider from 'react-slick'
import BookCard from './BookCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function DarkDots(props) {
	console.log('\n\nBookrow Darkdot:\n', props)
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, background: 'green', color: 'white' }}
			onClick={onClick}
		/>
	)
}

function BooksRow({ books }) {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		dots: DarkDots,
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
					dots: true,
					arrows: false,
				},
			},
		],
	}

	return (
		<Fragment>
			<div className='h-auto group p-1'>
				<Slider {...settings}>
					{books?.map((book) => (
						<BookCard
							key={book._id}
							title={book.title}
							image={book.image}
							author={book.author}
							slug={book.slug}
						/>
					))}
				</Slider>
			</div>
		</Fragment>
	)
}

{
	/* <div className='flex md:hidden items-center justify-between gap-2 p-1 w-auto h-auto'>
	{books?.map((book) => (
		<div className=''>
			<BookCard
				key={book._id}
				title={book.title}
				image={book.image}
				author={book.author}
				slug={book.slug}
			/>
		</div>
	))}
</div> */
}

export default BooksRow
