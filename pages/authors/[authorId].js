import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { getAuthorDetails, getTopAuthors } from '../../api/authors'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import HeartIcon from '../../assets/icons/HeartIcon'
import ListSliderModal from '../..//components/modals/ListSliderModal'
import BookRow from '../../components/book/BookRow'

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
					<BgCover color={props.color}>
						<div className='flex items-center justify-between gap-1 md:gap-2 xl:gap-4'>
							<div className='p-2'>
								<Image
									src={process.env.AUTHORS_URL + author.image}
									alt={author.name}
									height={320}
									width={240}
									className='object-contain rounded-md w-36 h-52 lg:w-44 lg:h-64'
								/>
							</div>
							<div className='space-y-4'>
								<div>
									<h2 className='text-2xl md:text-3xl xl:text-4xl font-bold'>
										{author.name}
									</h2>
								</div>
								{author.ratingsAvg ? (
									<div className='text-md md:text-lg font-semibold'>
										{author.ratingsAvg} ⭐
									</div>
								) : (
									<></>
								)}
							</div>
						</div>

						<div className='flex flex-col justify-center items-center text-white'>
							<button className='flex items-center justify-center p-1 md:p-2 w-full space-x-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
								<HeartIcon dimensions='h-7 w-7' />
								<span className='font-semibold'>Follow Author</span>
							</button>
						</div>
					</BgCover>
				</div>
				<div className='flex items-center justify-start space-x-4 md:p-4'>
					{author.genres?.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<button className='rounded-md p-2 m-4 bg-gray-700 border-r-zinc-400'>
								{genre.title}
							</button>
						</Link>
					))}
				</div>
				<div className='p-2 py-4 md:p-6'>
					<h4 className='text-xl md:text-2xl py-2 font-semibold'>About the author</h4>
					<p className='text-md font-medium text-gray-200'>{author.biography}</p>
				</div>
				{author.books?.length ? (
					<ListSliderModal listTitle='Author Books' listLink='/books'>
						{<BookRow books={author.books} />}
					</ListSliderModal>
				) : (
					<></>
				)}
			</div>
		</Fragment>
	)
}

export async function getStaticProps(context) {
	const { params } = context
	const author = await getAuthorDetails(params.authorId)

	if (!author.data) {
		return { notFound: true }
	}

	const bgColor = pickBgColor(author.data.slug)

	return {
		props: {
			author: author.data,
			color: bgColor,
		},
		revalidate: 60,
	}
}

export async function getStaticPaths() {
	const authors = await getTopAuthors()
	const params = authors.data.map((author) => ({
		params: { authorId: author.slug.toString() },
	}))

	return {
		paths: params,
		fallback: 'blocking',
	}
}

export default AuthorDetailPage
