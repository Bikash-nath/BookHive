import { Fragment } from 'react'
import BookCard from './BookCard'

function BookGrid({ books }) {
	books.forEach((book) => {
		console.log(book.title, book.image, book.author, book.slug, book._id)
	})
	return (
		<div className='grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 p-2 md:p-6 animate-slideup rounded-lg'>
			{books.map((book) => (
				<BookCard
					title={book.title}
					image={book.image}
					author={book.author}
					slug={book.slug}
				/>
			))}
		</div>
	)
}

export default BookGrid
