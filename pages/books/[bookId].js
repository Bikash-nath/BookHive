import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

import BookCard from '../../components/book/BookCard'
import BookBgCover from '../../components/covers/BookBgCover'

function BookDetailPage(props) {
	console.log('params', params)
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<BookBgCover name={props.book.title} />
				</div>
				<BookCard
					title={props.book.title}
					image={props.book.image}
					author={props.book.author}
					slug={props.book.slug}
				/>
			</div>
		</Fragment>
	)
}

async function getBooks() {
	const filePath = path.join(process.cwd(), 'data', 'booksData.json')
	const jsonData = fs.readFileSync(filePath)
	return await JSON.parse(jsonData)
}

export async function getStaticProps(context) {
	const { params } = context
	const { bookId } = params.bookId
	const bookList = await getBooks()
	const book = bookList.find((book) => book.slug === bookId)
	console.log(book)
	return {
		props: {
			book: book,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const bookList = await getBooks()
	console.log('\n\n\n\n bookList', bookList.length)
	const params = bookList.map((book) => ({
		params: { bookId: book._id },
	}))
	console.log('\n\n\n params', params)

	return {
		paths: params,
		fallback: false,
	}
}

export default BookDetailPage
