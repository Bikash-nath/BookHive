import { Fragment } from 'react'
import Head from 'next/head'

import { getTopBooks } from '../API/books'
import { getTopAuthors } from '../API/authors'
import ListSliderModal from '../components/modals/ListSliderModal'
import BookRow from '../components/book/BookRow'
import AuthorRow from '../components/author/AuthorRow'

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Bookhive</title>
				<meta
					name='description'
					content='Bookhive is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div className='bg-gradient'>
				<ListSliderModal listTitle='Most Popular Books' listLink='/books'>
					{<BookRow books={props.books.slice(0, 10)} />}
				</ListSliderModal>

				<ListSliderModal listTitle='Top new releases' listLink='/books'>
					{<BookRow books={props.books.slice(5, 12)} />}
				</ListSliderModal>

				<ListSliderModal listTitle='Featured Audiobooks' listLink='/books'>
					{<BookRow books={props.books.slice(1, 10)} />}
				</ListSliderModal>

				<ListSliderModal listTitle='Popular Authors' listLink='/authors'>
					{<AuthorRow authors={props.authors} />}
				</ListSliderModal>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const books = await getTopBooks()
	const authors = await getTopAuthors()
	return {
		props: {
			books: books.data,
			authors: authors.data,
		},
		// revalidate: 60,
	}
}

export default HomePage
