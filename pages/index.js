import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Bookspot</title>
				<meta
					name='description'
					content='Bookspot is an online platform for accessing thousands of free audiobooks, ePubs, PDFs, magazines and podcasts.'
				/>
			</Head>
			<div>
				<Link href='/books/'>
					<p className='text-3xl font-bold text-blue-600'>Popular Books</p>
				</Link>
				<br />

				<Link
					href={{
						pathname: '/books/[bookId]',
						query: { bookId: new Date().getMinutes() },
					}}>
					<p className='text-3xl font-bold text-green-600 underline'>
						New Book
					</p>
				</Link>
				<br />

				<Link
					href={{
						pathname: '/authors/[authorId]',
						query: { authorId: new Date().getMinutes() },
					}}>
					<p className='text-3xl font-bold text-orange-600 underline'>
						New Author
					</p>
				</Link>
			</div>
		</Fragment>
	)
}

export default HomePage
