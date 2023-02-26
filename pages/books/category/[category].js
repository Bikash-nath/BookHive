import Head from 'next/head'
import { Fragment } from 'react'

import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../../../api/books'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookGrid from '../../../components/book/BookGrid'

function BookListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{`Popular ${props.category}`}</title>
				<meta name='description' content={`A list of all ${props.category}`} />
			</Head>

			<ListGridModal listTitle={`Popular ${props.category}`}>
				{<BookGrid books={props.books} />}
			</ListGridModal>
		</Fragment>
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

	if (!books.data || (typeof books == 'string' && books.includes('ECONNREFUSED')))
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
	const bestsellers = await getBestsellers()
	const audiobooks = await getTopAudiobooks()
	const latestBooks = await getLatestBooks()

	const paths = ['bestsellers', 'audiobooks', 'latest']
	const params = paths.map((category) => ({
		params: { category },
	}))

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default BookListPage
