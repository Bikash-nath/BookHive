import { Fragment } from 'react'
import Link from 'next/link'

function AuthorCard(props) {
	const { name, image, slug, key } = props
	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center mx-3 md:mx-4 md:w-44 md:h-80 rounded-md group-hover:flex '>
			<Link href={`/author/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-md p-1 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 overflow-hidden'>
					<img
						src={image}
						alt={name}
						className='object-contain rounded-md md:w-40 md:h-60 md:py-1 min-w-full transform hover:scale-105 duration-200'
					/>
					<div className='px-1 flex flex-col'>
						<p className='items-center font-semibold text-base md:text-md mt-1 leading-tight truncate text-white '>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
