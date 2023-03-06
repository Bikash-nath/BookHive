import { useState, useEffect, Fragment } from 'react'
import BookCard from './BookCard'
import BookGridCard from './BookGridCard'

function BooksGrid({ books }) {
	return (
		<Fragment>
			<div className='hidden sm:inline'>
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
			<div className='sm:hidden list-grid animate-slideup'>
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

export default BooksGrid
