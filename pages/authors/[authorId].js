import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { getAuthorDetails, getTopAuthors } from '../../API/authors'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import LibraryIcon from '../../assets/icons/LibraryIcon'

function AuthorDetailPage(props) {
	const { author } = props

	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>{author.name}</title>
				<meta name='description' content='Author detail page' />
			</Head>
			<div className='bg-gradient text-white min-h-full'>
				<div className='m-0'>
					<BgCover>
						<div className='p-2'>
							<Image
								src={'http://127.0.0.1:5000' + author.image}
								alt={author.name}
								height={320}
								width={240}
								className='object-contain rounded-md w-40 h-60 lg:w-52 lg:h-80'
							/>
						</div>
						<div>
							<h2 className='text-2xl md:text-3xl xl:text-5xl'>{author.name} </h2>
						</div>
						<div className='flex flex-col justify-center items-center space-y-2 md:space-y-4 text-white'>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<LibraryIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Add To Favourite</span>
							</button>
						</div>
					</BgCover>
				</div>
				<div className='flex items-center justify-start space-x-4'>
					{author.genres?.map((genre, i) => (
						<button
							key={i}
							className='rounded-md p-2 m-4 bg-gray-700 border-r-zinc-400'>
							{genre}
						</button>
					))}
				</div>
				<div className='p-2 py-4'>
					<h4 className='text-xl md:text-2xl py-2 font-semibold'>About the author</h4>
					<p className='text-md font-normal text-gray-200'>{author.biography}</p>
				</div>
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const { data } = await getAuthorDetails(params.authorId)
	// const author = authors.find((author) => author.slug.toString() === params.authorId)
	// const bgColor = pickBgColor(data)

	return {
		props: {
			author: data,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const authors = await getTopAuthors()
	const params = authors.data.map((author) => ({
		params: { authorId: author.slug.toString() },
	}))
	console.log('\n\n\n params', params)
	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default AuthorDetailPage
