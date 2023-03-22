import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../../hooks/useWindowWidth'
import { getGenreBooks, getTopGenres } from '../../../API/genres'
import SpinnerContext from '../../../store/spinnerContext'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'
import Paginate from '../../../components/widgets/Paginate'
import HeartIcon from '../../../assets/icons/HeartIcon'

function GenreBooksPage(props) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const coverRef = useRef()
	const pageRef = useRef(null)
	const router = useRouter()
	const windowWidth = useWindowWidth()
	const { genre, slug } = props
	const [books, setBooks] = useState(props.books)

	useEffect(() => {
		;(async () => {
			const page = router.query.page
			if (page) {
				toggleSpinner(true)
				var res = await getGenreBooks(slug, { page })
				setBooks(res.data.books)
				toggleSpinner(false)
			}
		})()
	}, [router.asPath])

	return genre ? (
		<Fragment>
			<Head>
				<title>{genre + ' books'}</title>
				<meta name='description' content={`${genre} books section`} />
			</Head>
			<div className='pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal
						rightIcon={<HeartIcon dimensions='h-7 w-7' color='' />}
						pageTitle={genre}
						coverRef={coverRef}
						pageRef={pageRef}
					/>
				)}
				<ListGridModal listTitle={`${genre} books`} books={books} coverRef={coverRef} />
				{books.length >= 30 && <Paginate totalPages={4} page={1} />}
			</div>
		</Fragment>
	) : (
		<></>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const genre = await getGenreBooks(params.genreId, { page: 2 })

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
