import { Fragment } from 'react'
import Link from 'next/link'

function BookCard(props) {
	const { title, image, author, slug, key } = props

	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center mx-3 md:mx-4 md:w-44 md:h-80 rounded-md group-hover:flex '>
			<Link href={`/books/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-md p-1 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 overflow-hidden'>
					<img
						src={image}
						alt={title}
						className='object-contain rounded-md md:w-40 md:h-60 md:py-1 min-w-full transform hover:scale-105 duration-200'
					/>
					<div className='px-1 flex flex-col'>
						<p className='font-semibold text-sm md:text-base mt-1 md:mt-0 leading-none md:leading-tight line-clamp-2 text-white '>
							{title}
						</p>
						<p className='text-xs font-thin md:text-sm truncate text-gray-200 md:mt-1'>
							{`By ${author}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
