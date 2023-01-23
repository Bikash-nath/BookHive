import Head from 'next/head'
import { Fragment } from 'react'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>
			<div>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					Popular Authors
				</h1>
			</div>
			{/* <AllPosts posts={props.posts} /> */}
		</Fragment>
	)
}

export default AuthorListPage
