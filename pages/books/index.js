import Head from 'next/head'
import { Fragment } from 'react'

import BookGrid from '../../components/book/BookGrid'
import { getBooks } from '../../data/getData'

function BookListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Books</title>
				<meta name='description' content='A list of all popular ebooks!' />
			</Head>

			<div className='pb-24 relative text-white screen-gradient'>
				<section className=''>
					<div className='container mx-auto px-6 py-6 md:py-8'>
						<h3 className='text-2xl text-center md:text-left sm:text-3xl md:text-4xl'>
							Popular Books
						</h3>
					</div>
					{<BookGrid books={props.books} />}
				</section>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bookList = getBooks()

	if (!bookList) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			books: bookList,
		},
		revalidate: 60, //for production
	}
}

export default BookListPage
