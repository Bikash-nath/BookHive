import Slider from 'react-slick'
import BookCard from './BookCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function DarkDot(props) {
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
		dots: DarkDot,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
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
		<div className='h-auto group p-1 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg'>
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
	)
}

export default BooksRow
