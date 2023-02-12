import Head from 'next/head'
import { Fragment } from 'react'

import { getGenreBooks } from '../../../API/genres'

function GenreBooksPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Genre Books</title>
				<meta name='description' content='Genre Books section' />
			</Head>
			<ListGridModal listTitle='All popular books'>
				{<BookGrid books={props.books} />}
			</ListGridModal>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const bookList = await getGenreBooks(params.genreId)
	// const book = bookList.find((book) => book._id == bookId)

	if (!book) {
		return { notFound: true }
	}

	return {
		props: {
			books: bookList,
		},
		revalidate: 60,
	}
}

export default GenreBooksPage
