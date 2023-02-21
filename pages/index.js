import { Fragment } from 'react'
import Head from 'next/head'

import { getBestsellers, getTopAudiobooks, getLatestBooks } from '../api/books'
import { getTopAuthors } from '../api/authors'
import ListSliderModal from '../components/modals/ListSliderModal'
import BookRow from '../components/book/BookRow'
import AuthorRow from '../components/author/AuthorRow'

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Bookhive</title>
				<meta
					name='description'
					content='Bookhive is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div className='bg-gradient'>
				<ListSliderModal listTitle='Bestsellers' listLink='/books/category/bestsellers'>
					{<BookRow books={props.bestsellers} />}
				</ListSliderModal>

				<ListSliderModal
					listTitle='Featured Audiobooks'
					listLink='/books/category/audiobooks'>
					{<BookRow books={props.audiobooks} />}
				</ListSliderModal>

				<ListSliderModal listTitle='Latest arrivals' listLink='/books/category/latest'>
					{<BookRow books={props.latestBooks} />}
				</ListSliderModal>

				<ListSliderModal listTitle='Popular authors' listLink='/authors'>
					{<AuthorRow authors={props.authors} />}
				</ListSliderModal>
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bestsellers = await getBestsellers()
	const audiobooks = await getTopAudiobooks()
	const latestBooks = await getLatestBooks()
	const authors = await getTopAuthors()

	if (!bestsellers.data)
		return {
			notFound: true,
		}

	return {
		props: {
			bestsellers: bestsellers.data,
			audiobooks: audiobooks.data,
			latestBooks: latestBooks.data,
			authors: authors.data,
		},
		revalidate: 60,
	}
}

export default HomePage
