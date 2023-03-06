import { Fragment } from 'react'
import Slider from 'react-slick'
import BookCard from './BookCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../utils/constants/sliderSettings'

function BooksRow({ books }) {
	return (
		<Fragment>
			<div className='xl:hidden overflow-hidden overflow-x-scroll hide-scrollbar'>
				<div className='flex items-start justify-start gap-0 xs:gap-2 w-full h-full'>
					{books?.map((book) => (
						<BookCard
							key={book._id}
							title={book.title}
							image={book.image.path}
							author={book.author}
							slug={book.slug}
						/>
					))}
				</div>
			</div>
			<div className='hidden xl:block h-auto group lg:px-8 xl:px-12'>
				<Slider {...settings}>
					{books?.map((book) => (
						<BookCard
							key={book._id}
							title={book.title}
							image={book.image.path}
							author={book.author}
							slug={book.slug}
						/>
					))}
				</Slider>
			</div>
		</Fragment>
	)
}

export default BooksRow
