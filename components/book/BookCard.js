import Link from 'next/link'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'

//flex flex-col += overflow-hidden backdrop-blur-sm animate-slideup

function BookCard(props) {
	const { title, image, author, slug } = props
	return (
		<div
			key={slug}
			className='flex flex-row items-center justify-center mx-2 sm:mx-3 lg:mx-4 lg:w-44 lg:h-full lg:py-2 rounded-md group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='relative flex flex-col w-full h-full rounded-md p-2 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 hover:scale-105 transform duration-200'>
					<button className='absolute top-2 right-2 lg:top-3 lg:right-3 z-10 rounded-full bg-violet-900 p-1'>
						<HeadphoneIcon className='' dimensions='h-5 w-5' />
					</button>
					<img
						src={image}
						alt={title}
						className='object-contain rounded-md lg:w-40 lg:h-60 lg:py-1 min-w-full'
					/>
					<div className='px-1 flex flex-col'>
						<p className='font-semibold text-sm lg:text-base xl:text-base mt-1 lg:mt-0 leading-tight line-clamp-2 text-white '>
							{title}
						</p>
						<p className='text-xs font-thin lg:text-sm truncate text-gray-200 lg:py-1'>
							{`By ${author}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
