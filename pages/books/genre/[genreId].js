import Head from 'next/head'
import { Fragment } from 'react'

import { getGenreBooks } from '../../../API/genres'

function GenreBooksPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.genre}</title>
				<meta name='description' content={`${props.genre} books section`} />
			</Head>
			<ListGridModal listTitle={`${props.genre} books`}>
				{<BookGrid books={props.books} />}
			</ListGridModal>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const { data } = await getGenreBooks(params.genreId)
	// const book = data.find((book) => book._id == bookId)

	if (!data) {
		return { notFound: true }
	}

	return {
		props: {
			genre: data.title,
			slug: data.slug,
			books: data.books,
		},
		revalidate: 60,
	}
}

export default GenreBooksPage
