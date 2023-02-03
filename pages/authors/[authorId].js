import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import AuthorCard from '../../components/author/AuthorCard'
import BgCover from '../../components/modals/BgCover'
import { getAuthors } from '../data/getData'

function AuthorDetailPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{router.query.authorId}</title>
				<meta name='description' content='A author' />
			</Head>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<BgCover>
					<img
						className='h-44 w-44 shadow-2xl'
						src={'imageUrl'}
						alt='album image'
					/>
					<div>
						<p>{title}</p>
						<h2 className='text-2xl md:text-3xl xl:text-5xl'>
							{'Author name'}
						</h2>
					</div>
				</BgCover>
				<AuthorCard
					name={props.author.name}
					image={props.author.image}
					slug={props.author.slug}
				/>
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	// const { authorId } = params.authorId
	const authorList = await getAuthors()
	const author = authorList.find(
		(author) => author.slug.toString() === params.authorId
	)

	return {
		props: {
			author: author,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const authorList = await getAuthors()
	const params = bookList.map((book) => ({
		params: { bookId: book._id.toString() },
	}))
	console.log('\n\n\n params', params)
	return {
		paths: params,
		fallback: false,
	}
}

export default AuthorDetailPage
