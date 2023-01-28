import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import Book from '../../components/book/BookCard'

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
					<h2 className='text-4xl text-center'>{props.book.title}</h2>

					<button className='hidden btn md:block'>See All</button>
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
	const filePath = path.join(process.cwd, 'data', 'booksData.json')
	const jsonData = await fs.readFile(filePath)
	return await JSON.parse(jsonData)
}

export async function getStaticProps(context) {
	const { params } = context
	const { bookId } = params.bookId
	const bookList = getBooks()
	const book = bookList.find((book) => book.slug === bookId)

	return {
		props: {
			book: book,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const bookList = getBooks()
	return {
		paths: bookList.map((book) => {
			params: book
		}),
		fallback: false,
	}
}

export default BookDetailPage
