import { Fragment } from 'react'
import Slider from 'react-slick'
import BookCard from './BookCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../constants/sliderSetting'

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
