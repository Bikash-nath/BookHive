import Head from 'next/head'
import { Fragment } from 'react'

import { getGenreBooks, getTopGenres } from '../../../API/genres'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookGrid from '../../../components/book/BookGrid'

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
	const genre = await getGenreBooks(params.genreId)
	// const book = genre.data.find((book) => book._id == bookId)
	console.log('genre', genre)
	console.log({
		genre: genre.data.title,
		slug: genre.data.slug,
		books: genre.data.books,
	})

	if (!genre.data) {
		return { notFound: true }
	}

	return {
		props: {
			genre: genre.data.title,
			slug: genre.data.slug,
			books: genre.data.books,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const { data } = await getTopGenres()
	const params = data?.map((genre) => ({
		params: { genreId: genre.slug.toString() },
	}))
	console.log('params\n:', params)
	console.log('\n⛔')

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default GenreBooksPage
