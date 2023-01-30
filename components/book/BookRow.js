import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import BookCard from './BookCard'

function BooksRow({ books }) {
	var settings = {
		speed: 200,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					dots: true,
					arrows: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 0,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				},
			},
		],
	}

	return (
		// <Row className="mb-3 px-5">
		// <div className='w-full h-80 group p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg'>
		<div className='flex flex-wrap sm:justify-start justify-center gap-4'>
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
