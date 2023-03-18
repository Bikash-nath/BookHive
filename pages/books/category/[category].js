import { useRef, Fragment, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import useWindowWidth from '../../../hooks/useWindowWidth'
import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../../../api/books'
import ListGridModal from '../../../components/modals/ListGridModal'
import TopNavModal from '../../../components/modals/TopNavModal'
// import Paginate from '../../../components/widgets/Paginate'

function BookListPage(props) {
	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()
	const router = useRouter()

	useEffect(() => {
		if (props.category === 'bestsellers') {
			const bestsellers = getBestsellers()
		}
	}, [router.pathname])

	const categoryTitle = props.category?.substr(0, 1).toUpperCase() + props.category?.substr(1)

	return categoryTitle ? (
		<Fragment>
			<Head>
				<title>{`${categoryTitle}`}</title>
				<meta name='description' content={`A list of all ${categoryTitle}`} />
			</Head>
			<div className='pb-16 xl:pb-12' ref={pageRef}>
				{windowWidth < 1280 && (
					<TopNavModal pageTitle={categoryTitle} pageRef={pageRef} coverRef={coverRef} />
				)}
				<ListGridModal
					listTitle={`${categoryTitle}`}
					books={props.books}
					coverRef={coverRef}
				/>
				{/* <Paginate totalPages={5} page={1} /> */}
			</div>
		</Fragment>
	) : (
		<></>
	)
}

export async function getStaticProps(context) {
	console.log('context:🌟', context)

	const { params } = context
	let books
	if (params.category == 'bestsellers') {
		books = await getBestsellers({ page: 2 })
	} else if (params.category == 'audiobooks') {
		books = await getTopAudiobooks({ page: 2 })
	} else {
		books = await getLatestBooks({ page: 2 })
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
	// const paths = ['bestsellers', 'audiobooks', 'latest']
	const categoryParams = [
		'bestsellers',
		'audiobooks',
		'latest',
		'bestsellers?page=2',
		'bestsellers?page=3',
		'audiobooks?page=3',
	].map((category) => ({
		params: { category },
	}))

	return {
		paths: categoryParams,
		fallback: 'blocking',
	}
}

export default BookListPage
