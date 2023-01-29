import { Fragment } from 'react'
import BookCard from './BookCard'

function BookGrid({ books }) {
	return (
		<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
			<div className='relative w-full h-56 group'>
				{books.map((book) => (
					<BookCard
						key={book._id}
						title={book.title}
						image={book.image}
						author={book.author}
						slug={book.slug}
					/>
				))}
			</div>
		</div>
	)
}

export default BookGrid
