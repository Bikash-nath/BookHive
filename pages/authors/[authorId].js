import { useState, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'

import { getAuthorDetails, getTopAuthors } from '../../api/authors'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import ListSliderModal from '../..//components/modals/ListSliderModal'
import BookRow from '../../components/book/BookRow'
import NavigateBackButtton from '../../components/ui/NavigateBackButtton'
import HeartIcon from '../../assets/icons/HeartIcon'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'

function AuthorDetailPage(props) {
	const { author } = props
	const [readMoreBio, setReadMoreBio] = useState(false)
	// const router = useRouter()

	return author ? (
		<Fragment>
			<Head>
				<title>{author.name}</title>
				<meta name='description' content='Author detail page' />
			</Head>

			<div className='pb-16 lg:pb-12'>
				<NavigateBackButtton />
				<BgCover color={props.color}>
					<div className='flex items-center justify-between p-2 gap-1 md:gap-2 xl:gap-4'>
						<Image
							src={process.env.AUTHORS_URL + author.image}
							alt={author.name}
							height={240}
							width={240}
							className='object-contain rounded-md w-36 h-36 lg:w-52 lg:h-52'
						/>
						<div className='p-1 space-y-4'>
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
							{author.origin ? (
								<div className='text-sm md:text-md italic'>
									Born {author.origin}
								</div>
							) : (
								<></>
							)}
						</div>
					</div>

					<div className='flex lg:flex-col items-end lg:px-20 space-x-8 lg:space-y-4 right-2 text-white'>
						<button className='flex items-center justify-center px-3 py-1 md:p-2 w-full space-x-2 bg-[#AA14F0] rounded-3xl shadow-md border-[0.5px] border-purple-600 shadow-purple-500 transition hover:-translate-y-0.5 duration-150'>
							<HeartIcon dimensions='h-7 w-7' />
							<span className='font-semibold pr-2'>Follow</span>
						</button>
					</div>
				</BgCover>
				<div className='flex flex-wrap items-center justify-start space-x-4 p-2 md:p-4'>
					{author.genres?.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<button className='rounded-full py-1 px-2 lg:p-2 m-2 lg:m-3 font-medium bg-[#334366] text-white bg-opacity-90'>
								{genre.title}
							</button>
						</Link>
					))}
				</div>
				{author.biography ? (
					<div className='p-4 md:p-6'>
						<h4 className='text-xl md:text-2xl py-2 font-semibold'>About the author</h4>
						<p
							className={
								'text-md text-gray-200 font-medium inline-block ' +
								(!readMoreBio ? 'line-clamp-4' : '')
							}>
							{author.biography}
						</p>
						<button
							onClick={(e) => {
								setReadMoreBio(!readMoreBio)
								e.preventDefault()
							}}
							className={
								'cursor-pointer text-sm lg:text-base font-semibold text-blue-600 underline decoration-1 underline-offset-2 decoration-gray-300 ' +
								(author.biography.length < 400 ? 'hidden' : '')
							}>
							{readMoreBio ? (
								<div className='flex'>
									Read less <ChevronUpIcon dimensions='h-5 w-5' />
								</div>
							) : (
								<div className='flex'>
									Read more{' '}
									<div className='py-1'>
										<ChevronDownIcon dimensions='h-5 w-5' />
									</div>
								</div>
							)}
						</button>
					</div>
				) : (
					<></>
				)}
				{author.books?.length ? (
					<ListSliderModal listTitle='Author Books'>
						{<BookRow books={author.books} />}
					</ListSliderModal>
				) : (
					<></>
				)}
			</div>
		</Fragment>
	) : (
		<></>
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
		revalidate: 30,
	}
}

export async function getStaticPaths() {
	const authors = await getTopAuthors()

	const authorParams = authors.data.map((author) => ({
		params: { authorId: author.slug.toString() },
	}))

	return {
		paths: authorParams,
		fallback: true,
	}
}

export default AuthorDetailPage
