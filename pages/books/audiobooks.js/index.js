import Head from 'next/head'
import { Fragment } from 'react'
import BookGrid from '../../../components/book/BookGrid'

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
	const bookList = getBooks()

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
