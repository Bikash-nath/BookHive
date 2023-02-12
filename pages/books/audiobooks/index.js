import Head from 'next/head'
import { Fragment } from 'react'

import ListGridModal from '../../components/modals/ListGridModal'
import BookGrid from '../../../components/book/BookGrid'
import { getBestSellerBooks } from '../../../API/books'

function AudioBooksPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular AudioBooks</title>
				<meta name='description' content='A list of all popular audiobooks!' />
			</Head>
			<div className='bg-gradient'>
				<ListGridModal listTitle='Popular AudioBooks' listLink='/audiobooks'>
					{<BookGrid books={props.audiobooks} />}
				</ListGridModal>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bookList = getBestSellerBooks()

	if (!bookList) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			audiobooks: audiobookList,
		},
		// revalidate: 60,
	}
}

export default AudioBooksPage
