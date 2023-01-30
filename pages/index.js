import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import BookRow from '../components/book/BookRow'
import AuthorRow from '../components/author/AuthorRow'
import Navbar from '../components/layouts/Navbar'

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

			<div className='bg-gradient-to-b from-gray-900 to-black'>
				<section className='p-6'>
					<div className='container mx-auto my-4 px-6 text-gray-900 md:px-0'>
						<div className='flex justify-center mb-10 md:justify-between'>
							<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
								Popular Books
							</h3>
							<Link href='/books'>
								<button className='hidden btn md:block'>See All</button>
							</Link>
						</div>
						{<BookRow books={props.books} />}
					</div>
				</section>

				<section className='p-6'>
					<div className='container mx-auto my-4 px-6 text-gray-900 md:px-0'>
						<div className='flex justify-center mb-20 md:justify-between'>
							<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
								Trending Books
							</h3>
							<Link href='/books'>
								<button className='hidden btn md:block'>See All</button>
							</Link>
						</div>
						{<BookRow books={props.books} />}
					</div>
				</section>

				<section className='p-6'>
					<div className='container mx-auto my-4 px-6 text-gray-900 md:px-0'>
						<div className='flex justify-center mb-20 md:justify-between'>
							<h3 className='text-2xl text-center md:text-left lg:text-3xl'>
								Popular Authors
							</h3>
							<Link href='/authors'>
								<button className='hidden btn md:block'>See All</button>
							</Link>
						</div>
					</div>
					{<AuthorRow authors={props.authors} />}
				</section>
			</div>
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
