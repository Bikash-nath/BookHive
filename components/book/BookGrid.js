import { useState, useEffect } from 'react'
import BookCard from './BookCard'
import BookListCard from './BookListCard'

function BookGrid({ books }) {
	const [windowWidth, setWindowWidth] = useState(null)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth)
		}
	}, [])

	return (
		<div className='list-grid animate-slideup'>
			{windowWidth > 640
				? books.map((book, index) => (
						<BookCard
							key={index}
							title={book.title}
							image={book.image.path}
							author={book.author}
							slug={book.slug}
						/>
				  ))
				: books.map((book, index) => (
						<BookListCard
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
