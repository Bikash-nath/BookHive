import { useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'

import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { getGenreBooks, getTopGenres } from '../../../api/genres'
import SpinnerContext from '../../../store/spinnerContext'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookCard from '../../../components/cards/BookCard'
import TopNavModal from '../../../components/modals/TopNavModal'
// import Paginate from '../../../components/ui/Paginate'
import HeartIcon from '../../../assets/icons/HeartIcon'

function GenreBooksPage(props) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const coverRef = useRef()
	const pageRef = useRef(null)
	const windowWidth = useWindowDimensions()

	useEffect(() => {
		if (!props.genre) toggleSpinner(true)
		else toggleSpinner(false)
	}, [])

	return props.genre ? (
		<Fragment>
			<Head>
				<title>{props.genre + ' books'}</title>
				<meta name='description' content={`${props.genre} books section`} />
			</Head>
			<div className='pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal
						rightIcon={<HeartIcon dimensions='h-7 w-7' color='' />}
						pageTitle={props.genre}
						coverRef={coverRef}
						pageRef={pageRef}
					/>
				)}
				<ListGridModal listTitle={`${props.genre} books`} coverRef={coverRef}>
					{props.books.length ? (
						props.books?.map((book) => <BookCard book={book} />)
					) : (
						<h3 className='text-lg md:text-xl p-6 text-left'>No books found</h3>
					)}
				</ListGridModal>
				{/* <Paginate totalPages={5} page={1} /> */}
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
