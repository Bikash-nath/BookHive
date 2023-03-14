import { useRef, Fragment } from 'react'
import Head from 'next/head'

import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../../../api/books'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookCard from '../../../components/cards/BookCard'
import TopNavModal from '../../../components/modals/TopNavModal'
// import Paginate from '../../../components/widgets/Paginate'

function BookListPage(props) {
	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowDimensions()

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
				<ListGridModal listTitle={`${categoryTitle}`} coverRef={coverRef}>
					{props.books.map((book) => (
						<BookCard book={book} />
					))}
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
	let books
	if (params.category == 'bestsellers') {
		books = await getBestsellers()
	} else if (params.category == 'audiobooks') {
		books = await getTopAudiobooks()
	} else {
		books = await getLatestBooks()
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
	const categoryParams = ['bestsellers', 'audiobooks', 'latest'].map((category) => ({
		params: { category },
	}))

	return {
		paths: categoryParams,
		fallback: 'blocking',
	}
}

export default BookListPage
