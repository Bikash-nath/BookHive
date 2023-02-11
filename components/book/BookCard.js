import Link from 'next/link'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'

//flex flex-col += overflow-hidden backdrop-blur-sm animate-slideup

function BookCard(props) {
	const { title, image, author, slug } = props
	return (
		<div className='flex flex-row items-center justify-center mx-2 sm:mx-3 xl:mx-2 lg:w-40 lg:h-68 lg:py-2 rounded-md group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='relative flex flex-col w-32 h-64 lg:w-full lg:h-full rounded-md p-[0.3rem] lg:p-[0.4rem] bg-gray-800 bg-opacity-70 hover:bg-opacity-100 hover:scale-105 transform duration-100'>
					<button
						key='btn'
						className='absolute top-2 right-2 lg:top-3 lg:right-3 z-10 rounded-full bg-slate-900 p-1'>
						<HeadphoneIcon className='' dimensions='h-5 w-5' />
					</button>
					<img
						key='img'
						src={image}
						alt={title}
						className='object-contain rounded-md lg:w-40 lg:h-60 lg:py-1 min-w-full'
					/>
					<div key='content' className='flex flex-col justify-center h-full px-1'>
						<p
							key='title'
							className='font-medium lg:font-semibold text-sm lg:text-base mt-1 lg:mt-0 leading-tight line-clamp-2 text-white '>
							{title}
						</p>
						<p
							key='author'
							className='text-xs font-light lg:text-sm truncate text-gray-200 lg:py-1'>
							{`By ${author}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
