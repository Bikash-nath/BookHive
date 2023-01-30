import { Fragment } from 'react'
import Link from 'next/link'

function BookCard(props) {
	const { title, image, author, slug, key } = props
	// w-full h-84 group hover:bg-opacity-100 (top level)
	// <div className='items-center justify-center bg-slate-700 group-hover:flex active:bg-black'> (before link)
	return (
		<div
			key={key}
			className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
			<div className='w-full h-86 group'>
				<Link href={`/books/${slug}`}>
					<div className='flex flex-col rounded-md bg-zinc-800 p-1 lg:p-2 mx-6 w-40 h-84 overflow-hidden zz justify-center items-center bg-opacity-50 group-hover:flex'>
						<img
							src={image}
							alt={title}
							className='object-fit rounded-md h-auto min-w-full transform hover:scale-105 duration-200'
						/>
						<div className='mt-1 flex flex-col'>
							<p className='font-semibold text-base text-white line-clamp-2'>
								{title}
							</p>
							<p className='text-sm truncate text-gray-300 mt-1'>
								{`By ${author}`}
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default BookCard
