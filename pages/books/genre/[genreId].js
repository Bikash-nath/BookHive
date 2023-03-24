import { useState, useEffect, useContext, useRef, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../../hooks/useWindowWidth'
import { getGenreBooks, getTopGenres } from '../../../API/genres'
import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import SnackbarContext from '../../../store/snackbarContext'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'
import Paginate from '../../../components/widgets/Paginate'
import HeartIcon from '../../../assets/icons/HeartIcon'
import { favouriteGenre, getLibraryGenres } from '../../../API/userLibrary'

function GenreBooksPage(props) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const { user } = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)

	const coverRef = useRef()
	const pageRef = useRef(null)
	const router = useRouter()
	const windowWidth = useWindowWidth()
	const { genre, slug } = props
	const [books, setBooks] = useState(props.books)
	const [isFavourite, setFavourite] = useState(false)

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

	useEffect(() => {
		if (!isFavourite && user?.data) {
			;(async () => {
				const { genres } = await getLibraryGenres()
				genres.find((g) => g.slug === slug) && setFavourite(true)
			})()
		}
	}, [])

	const favouriteGenreHandler = async () => {
		if (!user?.data) snackbarCtx.addMessage({ title: 'Please login to save favourite genres' })
		else {
			const { genres } = await favouriteGenre(slug)
			if (genres.find((g) => g.slug === slug)) setFavourite(true)
			else setFavourite(false)
		}
	}

	return genre ? (
		<Fragment>
			<Head>
				<title>{genre + ' books'}</title>
				<meta name='description' content={`${genre} books section`} />
			</Head>
			<div className='pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal
						rightIcon={
							<div onClick={favouriteGenreHandler}>
								{isFavourite ? (
									<HeartIcon dimensions='h-7 w-7' color='white' />
								) : (
									<HeartIcon dimensions='h-7 w-7' color='' />
								)}
							</div>
						}
						pageTitle={genre}
						coverRef={coverRef}
						pageRef={pageRef}
					/>
				)}
				<ListGridModal
					listTitle={`${genre} books`}
					books={books}
					coverRef={coverRef}
					rightIcon={
						<div onClick={favouriteGenreHandler}>
							{isFavourite ? (
								<HeartIcon dimensions='h-8 w-8' color='white' />
							) : (
								<HeartIcon dimensions='h-8 w-8' color='' />
							)}
						</div>
					}
				/>
				{books?.length >= 30 && <Paginate totalPages={4} page={1} />}
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
