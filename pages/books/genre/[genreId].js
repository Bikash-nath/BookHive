import { useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import { getGenreBooks, getTopGenres } from '../../../api/genres'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookGrid from '../../../components/book/BookGrid'
import SpinnerContext from '../../../store/spinnerContext'

function GenreBooksPage(props) {
	const { toggleSpinner } = useContext(SpinnerContext)

	useEffect(() => {
		if (!props.genre) toggleSpinner(true)
		else toggleSpinner(false)
	}, [])

	return props.genre ? (
		<Fragment>
			<Head>
				<title>{props.genre}</title>
				<meta name='description' content={`${props.genre} books section`} />
			</Head>
			<div className='p-1 lg:p-2 pb-16 lg:pb-12'>
				<ListGridModal listTitle={`${props.genre} books`}>
					{props.books.length ? (
						<BookGrid books={props.books} />
					) : (
						<h3 className='text-lg md:text-xl p-6 text-center md:text-left'>
							No books found
						</h3>
					)}
				</ListGridModal>
			</div>
		</Fragment>
	) : (
		<></>
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
	const genres = await getTopGenres()

	const genreParams = genres.data.map((genre) => ({
		params: { genreId: genre.slug.toString() },
	}))

	return {
		paths: genreParams,
		fallback: true,
	}
}

export default GenreBooksPage
