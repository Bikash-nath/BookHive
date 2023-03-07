import { useState, useRef, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import { useRouter } from 'next/router'

import { getAuthorDetails, getTopAuthors } from '../../api/authors'
import BgCover from '../../components/modals/BgCover'
import { pickBgColor } from '../../utils/helpers/pickBgColor'
import ListSliderModal from '../..//components/modals/ListSliderModal'
import BookCards from '../../components/cards/BookCards'
import GenreListModal from '../../components/modals/GenreListModal'
import TopNavModal from '../../components/modals/TopNavModal'
import HeartIcon from '../../assets/icons/HeartIcon'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon'

function AuthorDetailPage(props) {
	const { author } = props
	const [readMoreBio, setReadMoreBio] = useState(false)
	// const router = useRouter()
	const bioRef = useRef(null)
	const coverRef = useRef(null)

	const bioCountLines = () => {
		if (typeof window !== 'undefined') {
			const bioEl = bioRef.current
			console.log('bioEl', bioEl)
			if (bioRef.current) {
				const divHeight = bioEl.offsetHeight
				const lineHeight = parseInt(bioEl.style.lineHeight)
				return divHeight / lineHeight
			}
		}
		return 0
	}

	return author ? (
		<Fragment>
			<Head>
				<title>{author.name}</title>
				<meta name='description' content='Author detail page' />
			</Head>

			<div className='bg-[#0C111B] pb-16 xl:pb-12'>
				<TopNavModal pageTitle={author.name} coverRef={coverRef} />
				<BgCover color={props.color} coverRef={coverRef}>
					<div className='flex items-center justify-between p-2 pt-12 gap-2 ms:gap-3 md:gap-4 xl:gap-5'>
						<Image
							src={process.env.AUTHORS_URL + author.image}
							alt={author.name}
							height={240}
							width={240}
							className='object-cover rounded-full w-36 h-36 xl:w-48 xl:h-48'
						/>
						<div className='p-1 space-y-4'>
							<div>
								<h2 className='text-xl md:text-3xl xl:text-4xl font-bold'>
									{author.name}
								</h2>
							</div>
							{author.ratingsAvg ? (
								<div className='text-md md:text-xl font-semibold'>
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

					<div className='flex xl:flex-col items-end xl:px-20 space-x-8 xl:space-y-4 right-2 text-white'>
						<button className='flex items-center justify-center px-3 py-1 xl:p-2 w-full space-x-2 bg-[#AA14F0] brightness-90 rounded-3xl shadow-md border-[0.5px] border-purple-600 shadow-purple-500 transition hover:-translate-y-0.5 duration-150'>
							<HeartIcon dimensions='h-7 w-7' />
							<span className='font-semibold pr-2'>Follow</span>
						</button>
					</div>
				</BgCover>

				<GenreListModal genres={author.genres} />

				{author.biography ? (
					<div className='p-4 md:p-6'>
						<h4 className='text-xl md:text-2xl py-2 font-semibold'>About the author</h4>
						<p
							ref={bioRef}
							className={
								'text-md text-gray-200 font-medium inline-block sm:leading-snug leading-normal ' +
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
								'cursor-pointer text-sm xl:text-base font-semibold text-[#AA14F0] underline decoration-1 underline-offset-2 decoration-gray-300 ' +
								(bioCountLines() < 4 ? 'hidden' : '')
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
						{<BookCards books={author.books} />}
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
