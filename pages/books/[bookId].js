import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import BgCover from '../../components/modals/BgCover'
import { getBooks } from '../../data/getData'

import openInNewTab from '../../utils/helpers/openLink'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'
import LibraryIcon from '../../assets/icons/LibraryIcon'

function BookDetailPage(props) {
	const { book } = props

	return (
		<Fragment>
			<Head>
				<title>{book.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='bg-gray-800'>
				<div className='container m-0 p-0'>
					<BgCover>
						<img
							src={book.image}
							alt={book.title}
							className='object-contain rounded-md w-40 h-60 lg:w-52 lg:h-80 m-1 p-1'
						/>
						<div>
							<p className='text-2xl md:text-3xl'>{book.title}</p>
							<div className='text-lg'>By: {book.author}</div>
							<div className='text-lg'>Language: {book.language}</div>

							{book.formats.length && (
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
						<div className='flex flex-col justify-center items-center space-y-4'>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-purple-900 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-purple-900 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-purple-900 border border-gray-500 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>
				</div>
				<div>
					<h4 className='text-xl md:text-2xl'>Book Details</h4>
					<div className='grid grid-cols-2 items center justify-center'>
						<div className='text-center'>Publisher:</div>
						<div className='text-center'>{book.publisher}</div>
						<div className='text-center'>Publication date:</div>
						<div className='text-center'>{book.publication_date}</div>
						<div className='text-center'>Pages:</div>
						<div className='text-center'>{book.pages}</div>
					</div>
				</div>
				<div className='flex items-center justify-start space-x-4'>
					{book.genres?.map((genre, i) => (
						<button key={i} className='p-2 m-4 bg-gray-500 border-r-zinc-400'>
							{genre}
						</button>
					))}
				</div>
				<div className='p-2 py-4'>
					<h4 className='text-xl md:text-2xl py-2'>Book description</h4>
					<p className='text-lg font-medium text-gray-200'>
						{book.description}
					</p>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const bookId = params.bookId
	const bookList = await getBooks()
	const book = bookList.find((book) => book._id == bookId)

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
