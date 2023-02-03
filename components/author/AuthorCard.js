import Link from 'next/link'
import Image from 'next/image'

//flex flex-col += overflow-hidden backdrop-blur-sm animate-slideup

function AuthorCard(props) {
	const { name, image, slug, key } = props
	return (
		<div
			key={key}
			className='flex flex-row items-center justify-center sm:mx-3 mx-2 h-60 md:mx-4 md:w-44 md:h-80 rounded-xl group-hover:flex'>
			<Link href={`/author/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-xl p-1 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 duration-200 transform'>
					<img
						src={image}
						alt={name}
						className='object-contain rounded-xl h-44 md:w-40 md:h-60 p-1 min-w-full'
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
