import Head from 'next/head'
import { Fragment } from 'react'

import ListGridModal from '../../components/modals/ListGridModal'
import BookGrid from '../../components/book/BookGrid'
import { getBooks } from '../../data/getData'

function BookListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Books</title>
				<meta name='description' content='A list of all popular ebooks!' />
			</Head>
			<ListGridModal listTitle='All popular books'>
				{<BookGrid books={props.books} />}
			</ListGridModal>
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
