import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import BookCard from './BookCard'

function BooksRow({ books }) {
	var settings = {
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
			<div className='relative w-full h-56 group p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
				{books?.map((book) => (
					<BookCard
						key={book._id}
						title={book.title}
						image={book.image}
						author={book.author}
						slug={book.slug}
					/>
				))}
			</div>
		</Slider>
	)
}

export default BooksRow
