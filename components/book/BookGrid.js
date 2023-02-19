import BookCard from './BookCard'

function BookGrid({ books }) {
	return (
		<div className='list-grid animate-slideup'>
			{books.map((book, index) => (
				<BookCard
					key={index}
					title={book.title}
					image={book.image.path}
					author={book.author}
					slug={book.slug}
				/>
			))}
		</div>
	)
}

export default BookGrid
