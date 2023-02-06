import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import BgCover from '../../components/modals/BgCover'
import { getAuthors } from '../../data/getData'

function AuthorDetailPage(props) {
	const { book } = props

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
						src={author.image}
						alt={author.name}
						className='object-contain rounded-md w-40 h-60 lg:w-52 lg:h-80 lg:py-1'
					/>
					<div>
						<h2 className='text-2xl md:text-3xl xl:text-5xl'>{author.name} </h2>
					</div>
				</BgCover>
				<div className='flex items-center justify-start space-x-4'>
					{author.genres?.map((genre, i) => (
						<button key={i} className='p-2 m-4 bg-gray-500 border-r-zinc-400'>
							{genre}
						</button>
					))}
				</div>
				<div className='p-2 py-4'>
					<h4 className='text-xl md:text-2xl py-2'>About the author</h4>
					<p className='text-lg font-medium text-gray-200'>
						{author.description}
					</p>
				</div>
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
	const params = authorList.map((author) => ({
		params: { authorId: author._id.toString() },
	}))
	console.log('\n\n\n params', params)
	return {
		paths: params,
		fallback: false,
	}
}

export default AuthorDetailPage
