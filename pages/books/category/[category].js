import Head from 'next/head'
import { Fragment } from 'react'

import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../../../api/books'
import ListGridModal from '../../../components/modals/ListGridModal'
import BookCards from '../../../components/cards/BookCards'
import TopNavModal from '../../../components/modals/TopNavModal'
import Paginate from '../../../components/ui/Paginate'

function BookListPage(props) {
	console.log('props.category', props.category)
	const categoryTitle = props.category && props.category.substr(0, 1) + props.category.substr(1)
	console.log('categoryTitle', categoryTitle)

	return props.category ? (
		<Fragment>
			<Head>
				<title>{`${categoryTitle}`}</title>
				<meta name='description' content={`A list of all ${categoryTitle}`} />
			</Head>
			<div className='p-1 xl:p-2 pb-16 xl:pb-12'>
				<TopNavModal pageTitle={categoryTitle} />
				<ListGridModal listTitle={`${categoryTitle}`}>
					{<BookCards books={props.books} />}
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
