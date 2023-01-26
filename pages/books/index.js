import Head from 'next/head'
import { Fragment } from 'react'
import BookRow from '../../components/book/BookRow'
function BookListPage(props) {
	const books = [
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

	return (
		<Fragment>
			<Head>
				<title>Popular Books</title>
				<meta name='description' content='A list of all popular ebooks!' />
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

export default BookListPage
