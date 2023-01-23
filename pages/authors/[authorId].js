import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

// import Book from '../../components/Book'

function AuthorDetailPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.authorId}</title>
				<meta name='description' content='A ebook' />
			</Head>
			<div>
				<h1 className='text-4xl font-bold text-blue-600 underline'>
					{`Author ${router.query.authorId}`}
				</h1>
			</div>
			{/* <Book posts={props.book} /> */}
		</Fragment>
	)
}

export default AuthorDetailPage
