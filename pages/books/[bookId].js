import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import BgCover from '../../components/modals/BgCover'
import { getBooks } from '../../data/getData'

import BookCard from '../../components/book/BookCard'

function BookDetailPage(props) {
	const book = props.book
	const router = useRouter()

	return (
		<Fragment>
			<Head>
				<title>{router.query.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 screen-gradient md:px-0'>
				<BgCover>
					<img
						className='h-44 w-44 shadow-2xl'
						src={'imageUrl'}
						alt='album image'
					/>
					<div>
						<p>{book.title}</p>
						<h3 className='text-2xl md:text-3xl xl:text-5xl'>{book.title}</h3>
					</div>
				</BgCover>
				<div className=''>
					{console.log('Page:', props)}
					<BookCard
						title={book.title}
						image={book.image}
						author={book.author}
						slug={book.slug}
					/>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	console.log('\n\nStaticProps params', params)
	const bookId = params.bookId
	console.log('\nbookId:', bookId)
	const bookList = await getBooks()
	console.log('StaticProps-bookList:', bookList.length)
	const bookIds = bookList.map((book) => book._id)
	console.log('\nbookIds:', bookIds)
	console.log('\nincludes?:', bookIds.includes(bookId?.toString()))
	const book = bookIds.find((bookid) => bookid == bookId)
	console.log('\nbook:', book)

	if (!book) {
		return { notFound: true }
	}

	return {
		props: {
			book: book,
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
