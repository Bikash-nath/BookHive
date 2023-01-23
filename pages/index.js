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
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					<Link href='/books/'>
						Popular Books
						<br />
					</Link>
					<Link
						href={{
							pathname: '/books/[bookId]',
							query: { bookId: new Date().getMinutes() },
						}}>
						New Book
					</Link>
				</h1>
			</div>
		</Fragment>
	)
}

export default HomePage
