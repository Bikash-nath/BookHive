import { useState, useEffect, Fragment } from 'react'
import BookCard from './BookCard'
import BookGridCard from './BookGridCard'

function BookGrid({ books }) {
	return (
		<Fragment>
			<div className='hidden xs:inline'>
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
			</div>
			<div className='xs:hidden list-grid animate-slideup'>
				{books.map((book, index) => (
					<BookGridCard
						key={index}
						title={book.title}
						image={book.image.path}
						author={book.author}
						slug={book.slug}
					/>
				))}
			</div>
		</Fragment>
	)
}

export default BookGrid
