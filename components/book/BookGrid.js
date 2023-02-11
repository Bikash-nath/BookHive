import BookCard from './BookCard'

function BookGrid({ books }) {
	books.forEach((book) => {
		console.log(book.title, book.image, book.author, book.slug, book._id)
	})
	return (
		<div className='list-grid animate-slideup'>
			{books.map((book, index) => (
				<BookCard
					key={index}
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
