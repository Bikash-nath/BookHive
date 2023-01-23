import Head from 'next/head'
import { Fragment } from 'react'

function BookListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Books</title>
				<meta name='description' content='A list of all popular ebooks!' />
			</Head>
			<div>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					Popular Books
				</h1>
			</div>
			{/* <AllPosts posts={props.posts} /> */}
		</Fragment>
	)
}

export default BookListPage
