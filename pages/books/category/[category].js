import Head from 'next/head'
import { Fragment } from 'react'

import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../../../api/books'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookGrid from '../../../components/book/BookGrid'
import NavigateBackButtton from '../../../components/ui/NavigateBackButtton'
import Paginate from '../../../components/ui/Paginate'

function BookListPage(props) {
	return props.category ? (
		<Fragment>
			<Head>
				<title>{`Popular ${props.category}`}</title>
				<meta name='description' content={`A list of all ${props.category}`} />
			</Head>
			<div className='p-1 lg:p-2 pb-16 lg:pb-12'>
				<NavigateBackButtton />
				<ListGridModal listTitle={`Popular ${props.category}`}>
					{<BookGrid books={props.books} />}
				</ListGridModal>
				{/* <Paginate pages={pages} page={page} /> */}
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
