import { Fragment } from 'react'
import Link from 'next/link'

function AuthorCard(props) {
	const { name, image, slug, key } = props
	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center bg-slate-900 active:bg-black group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='flex flex-col rounded-xl bg-zinc-800 p-1 lg:p-2 mx-6 w-40 h-60'>
					<img
						src={image}
						alt={name}
						className='object-fit rounded-xl h-auto md:h-64 md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200'
					/>
					<div className='mt-2 flex flex-col'>
						<p className='font-semibold text-base text-white truncate'>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
