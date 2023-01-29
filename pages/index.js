import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import BookRow from '../components/book/BookRow'
import AuthorRow from '../components/author/AuthorRow'

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
			<section className='my-8 mx-4 bg-gradient-to-b to-black from-gray-700 h-screen overflow-hidden'>
				<div className='container max-w-6xl mx-auto my-8 px-6 text-gray-900 md:px-0'>
					<div className='flex justify-center mb-20 md:justify-between'>
						<h3 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular Books
						</h3>
						<button className='hidden btn md:block -tracking-widest'>
							See All
						</button>
					</div>
					{<BookRow books={props.books} />}
				</div>
			</section>

			<section className='my-8 mx-4'>
				<div className='container max-w-6xl mx-auto my-8 px-6 text-gray-900 md:px-0'>
					<div className='flex justify-center mb-20 md:justify-between'>
						<h3 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Trending Books
						</h3>
						<button className='hidden btn md:block -tracking-widest'>
							See All
						</button>
					</div>
					{<BookRow books={props.books} />}
				</div>
			</section>

			<section className='my-8 mx-4'>
				<div className='container max-w-6xl mx-auto my-8 px-6 text-gray-900 md:px-0'>
					<div className='flex justify-center mb-20 md:justify-between'>
						<h3 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
							Popular Authors
						</h3>
					</div>
				</div>
				{<AuthorRow authors={props.authors} />}
			</section>
		</Fragment>
	)
}

export async function getStaticProps() {
	const booksFile = path.join(process.cwd(), 'data', 'booksData.json')
	const jsonData = fs.readFileSync(booksFile, 'utf8')
	const bookList = JSON.parse(jsonData)

	const authorsFile = path.join(process.cwd(), 'data', 'authorsData.json')
	const authorsData = fs.readFileSync(authorsFile, 'utf8')
	const authorList = JSON.parse(authorsData)

	return {
		props: {
			books: bookList,
			authors: authorList,
		},
		// revalidate: 60,
	}
}

export default HomePage
