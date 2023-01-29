import { Fragment } from 'react'
import Link from 'next/link'

function BookCard(props) {
	const { title, image, author, slug, key } = props
	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center bg-slate-900 active:bg-black group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='flex flex-col rounded-md bg-zinc-800 p-1 lg:p-2 mx-6 w-40 h-80'>
					<img
						src={image}
						alt={title}
						className='object-fit rounded-xl h-auto min-w-full md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
					/>
					<div className='mt-1 flex flex-col'>
						<p className='font-semibold text-base text-white truncate'>
							{title}
						</p>
						<p className='text-sm truncate text-gray-300 mt-1'>
							{`By ${author}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
