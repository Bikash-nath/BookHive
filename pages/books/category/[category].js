import { useEffect, useRef, useContext, Fragment, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../../hooks/useWindowWidth'
import { getBestsellers, getTopAudiobooks, getLatestBooks, getIndianBooks } from '../../../API/books'
import SpinnerContext from '../../../store/spinnerContext'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'
import Paginate from '../../../components/widgets/Paginate'

function BookListPage(props) {
	const { toggleSpinner } = useContext(SpinnerContext)
	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()
	const router = useRouter()
	const category = props.category
	const [books, setBooks] = useState(props.books)

	useEffect(() => {
		;(async () => {
			const page = router.query.page
			if (page) {
				toggleSpinner(true)
				if (category === 'bestsellers') var res = await getBestsellers({ page })
				else if (category === 'audiobooks') var res = await getTopAudiobooks({ page })
				else var res = await getLatestBooks({ page })
				setBooks(res.data)
				toggleSpinner(false)
			}
		})()
	}, [router.asPath])

	const categoryTitle = category?.substr(0, 1).toUpperCase() + category?.substr(1)

	return categoryTitle ? (
		<Fragment>
			<Head>
				<title>{`${categoryTitle}`}</title>
				<meta name='description' content={`A list of all ${categoryTitle}`} />
			</Head>
			<div className='pb-16 xl:pb-8' ref={pageRef}>
				{windowWidth < 1280 && <TopNavModal pageTitle={categoryTitle} pageRef={pageRef} coverRef={coverRef} />}
				<ListGridModal listTitle={`${categoryTitle}`} books={books} coverRef={coverRef} />
				{books?.length >= 30 && <Paginate totalPages={4} page={1} />}
			</div>
		</Fragment>
	) : (
		<></>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	let books
	if (params.category == 'bestsellers') {
		books = await getBestsellers()
	} else if (params.category == 'audiobooks') {
		books = await getTopAudiobooks()
	} else if (params.category == 'latest') {
		books = await getLatestBooks()
	} else {
		books = await getIndianBooks(params.category)
	}

	if (!books.data)
		return {
			notFound: true,
		}

	return {
		props: {
			books: books.data,
			category: params.category,
		},
		revalidate: 600,
	}
}

export async function getStaticPaths() {
	const categoryParams = ['bestsellers', 'audiobooks', 'latest', 'indian', 'bangla', 'punjabi'].map((category) => ({
		params: { category },
	}))

	return {
		paths: categoryParams,
		fallback: true,
	}
}

export default BookListPage
