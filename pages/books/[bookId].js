import Head from 'next/head'
import { Fragment } from 'react'

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
				<title>{book.title}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div className='bg-[#121212] text-white pb-20'>
				<div className='m-0'>
					<BgCover>
						<img
							src={book.image}
							alt={book.title}
							className='object-contain rounded-lg w-40 h-60 lg:w-52 lg:h-80 m-1'
						/>
						<div className='px-2 md:px-4'>
							<p className='text-xl md:text-2xl font-medium'>{book.title}</p>
							<div className='text-md md:text-lg'>By: {book.author}</div>
							<div className='text-md md:text-lg'>Language: {book.language}</div>

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
						<div className='flex flex-col justify-center items-center space-y-2 md:space-y-4 text-white'>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Read</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeadphoneIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Listen</span>
							</button>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Library</span>
							</button>
						</div>
					</BgCover>
				</div>
				<div>
					<h4 className='text-xl md:text-2xl px-4 md:px-8 pt-4'>Book Details</h4>
					<div className='grid grid-cols-2 items center justify-center p-4 md:px-8'>
						<div className=''>Publisher:</div>
						<div className=''>{book.publisher}</div>
						<div className=''>Publication date:</div>
						<div className=''>{book.publication_date}</div>
						<div className=''>Pages:</div>
						<div className=''>{book.pages}</div>
					</div>
				</div>
				<div className='flex items-center justify-start space-x-4 p-2 md:p-4'>
					{book.genres?.map((genre, i) => (
						<button key={i} className='rounded-md p-2 m-4 bg-gray-700 border-r-zinc-400'>
							{genre}
						</button>
					))}
				</div>
				<div className='p-4 md:p-8'>
					<h4 className='text-xl md:text-2xl py-2'>Book description</h4>
					<p className='text-md text-gray-200'>{book.description}</p>
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
	const params = bookList.map((book) => ({
		params: { bookId: book._id.toString() },
	}))

	return {
		paths: params,
		fallback: false,
	}
}

export default BookDetailPage
