import { Fragment } from 'react'
import Link from 'next/link'

function AuthorCard(props) {
	const { name, image, slug, key } = props
	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center sm:mx-3 mx-2 h-60 md:mx-4 md:w-44 md:h-80 rounded-xl group-hover:flex'>
			<Link href={`/author/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-xl p-1 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 overflow-hidden'>
					<img
						src={image}
						alt={name}
						className='object-contain rounded-xl h-44 md:w-40 md:h-60 p-1 min-w-full transform hover:scale-105 duration-200'
					/>
					<div className='px-1 '>
						<p className='text-center font-semibold text-base md:text-md my-1 leading-tight truncate text-white '>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
