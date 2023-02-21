import Head from 'next/head'
import { Fragment } from 'react'

import { getGenreBooks, getTopGenres } from '../../../api/genres'
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
				{props.books.length ? (
					<BookGrid books={props.books} />
				) : (
					<>
						<h3 className='text-lg md:text-xl p-6 text-center md:text-left'>
							No books found
						</h3>
					</>
				)}
			</ListGridModal>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const genre = await getGenreBooks(params.genreId)

	if (!genre.data) {
		return { notFound: true }
	}

	return {
		props: {
			genre: genre.data.title,
			slug: genre.data.slug,
			books: genre.data.books,
		},
		revalidate: 600,
	}
}

export async function getStaticPaths() {
	const { data } = await getTopGenres()

	const params = data?.map((genre) => ({
		params: { genreId: genre.slug.toString() },
	}))

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default GenreBooksPage
