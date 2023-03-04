import Link from 'next/link'
import Image from 'next/image'

function BookCard({ title, image, author, slug }) {
	return (
		<div className='flex items-center justify-center w-[6.7rem] h-[12.5rem] m-1 sm:m-3 rounded-md group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='relative flex flex-col w-[6.5rem] h-full rounded-md p-[0.3rem] bg-gray-900'>
					<Image
						src={process.env.BOOKS_URL + image}
						alt={title}
						height={180}
						width={120}
						className='object-contain rounded-md w-full'
					/>
					<div key='content' className='flex flex-col justify-center h-full px-1'>
						<p className='font-medium text-xs my-1 leading-3 line-clamp-2 text-white '>
							{title}
						</p>
						<p key='author' className='text-xs font-light truncate text-gray-200'>
							{`By ${author.name}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
