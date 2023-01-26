import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BookRow from '../components/book/BookRow'

function HomePage(props) {
	const { books } = props

	return (
		<Fragment>
			<Head>
				<title>Bookspot</title>
				<meta
					name='description'
					content='Bookspot is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div className='my-4 mx-1'>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					Popular Books
				</h1>
				{<BookRow books={books} />}
			</div>
			<div className='my-4 mx-1'>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					New Books
				</h1>
				{<BookRow books={books} />}
			</div>
		</Fragment>
	)
}

export async function getStaticProps() {
	const bookList = [
		{
			title: 'Scion of Ikshvaku',
			image: '/images/Scion of Ikshvaku.jpg',
			author: 'Amish Tripathi',
		},
		{
			title: 'Immortals of Meluha',
			image: '/images/Immortals of Meluha.jpg',
			author: 'Amish Tripathi',
		},
	]

	return {
		props: {
			books: bookList,
		},
	}
}

export default HomePage
