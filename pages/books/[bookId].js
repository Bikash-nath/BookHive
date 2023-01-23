import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

// import Book from '../../components/Book'

function BookList(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.bookId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					{`Book ${router.query.bookId}`}
				</h1>
			</div>
			{/* <Book posts={props.book} /> */}
		</Fragment>
	)
}

export default BookList
