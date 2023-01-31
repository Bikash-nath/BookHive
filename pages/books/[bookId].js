import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

import BookCard from '../../components/book/BookCard'
import BookBgCover from '../../components/covers/BookBgCover'

function BookDetailPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<div className='flex justify-center mb-20 md:justify-between'>
					<BookBgCover name={'Book'} />
				</div>
				<div className=''>
					{console.log('Page:', props)}
					{/* <BookCard
						title={props.book.title}
						image={props.book.image}
						author={props.book.author}
						slug={props.book.slug}
					/> */}
				</div>
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
	console.log('\n\nStaticProps params', params)
	const { bookId } = params.bookId
	const bookList = await getBooks()
	console.log('\nbookId:', bookId)
	console.log('StaticProps-bookList:', bookList.length)
	const bookIds = bookList.map((book) => book.bookId)
	console.log('\nbookIds:', bookIds)
	console.log('\nincludes?:', bookIds.includes(bookId?.toString()))
	const book = bookIds.find((bookid) => bookid == bookId)
	console.log('\nbook:', book)

	if (!book) {
		return { notFound: true }
	}

	return {
		props: {
			book: 'book',
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const bookList = await getBooks()
	console.log('\n\n\n\n StaticPaths-bookList', bookList.length)
	const params = bookList.map((book) => ({
		params: { bookId: book._id.toString() },
	}))
	console.log('\n\n\n params', params)

	return {
		paths: params,
		fallback: false,
	}
}

export default BookDetailPage
