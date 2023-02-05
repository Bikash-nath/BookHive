import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import BgCover from '../../components/modals/BgCover'
import { getBooks } from '../../data/getData'

import openInNewTab from '../../utils/openLink'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'

function BookDetailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{router.query.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<BgCover>
					<Image
						src={book.image}
						alt={book.title}
						className='object-contain rounded-md lg:w-40 lg:h-60 lg:py-1 min-w-full'
					/>
					<div className='flex space-x-4 justify-between items-center'>
						<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
							<HeadphoneIcon />
							<span className='font-thin'>Read</span>
						</button>
						<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
							<HeadphoneIcon />
							<span className='font-thin'>Listen</span>
						</button>
						<button className='flex items-center justify-center w-1/2 py-3 space-x-2 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
							<LibraryIcon />
							<span className='font-thin'>Add To Library</span>
						</button>
					</div>
					<div>
						{book.formats && (
							<div className='flex'>
								{book.formats?.map((ele, i) => (
									<button
										key={i}
										onClick={() => openInNewTab(ele.link)}
										className='mx-2 p-2 my-1'
										variant='btn btn-warning'>
										<strong>{ele.format}</strong>
									</button>
								))}
							</div>
						)}
					</div>
					<div className='text-lg'>Language: {book.language}</div>
				</BgCover>
			</div>
			<div>
				<h4>Book Details</h4>
				<div className='grid grid-cols-2 items center justify-center'>
					<div>Publisher:</div>
					<div>{book.publisher}</div>
					<div>Publication date:</div>
					<div>{book.publication_date}</div>
					<div>Pages:</div>
					<div>{book.pages}</div>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				{book.genres.map((genre) => (
					<button className='p-2 m-4 bg-gray-500 border-r-zinc-400'>
						{genre}
					</button>
				))}
			</div>
			<div className='p-2'>
				<p className='text-lg font-medium text-gray-200'>{book.desscription}</p>
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
