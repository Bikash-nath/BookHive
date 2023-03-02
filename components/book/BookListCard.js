import Link from 'next/link'
import Image from 'next/image'

function BookListCard({ title, image, author, slug }) {
	return (
		<div className='flex flex-row items-start rounded-md group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='flex h-[8.5rem] relative rounded-md mx-2 my-[.1rem] bg-gray-800 bg-opacity-70 hover:bg-opacity-100 hover:scale-105 transform duration-100'>
					<Image
						src={process.env.BOOKS_URL + image}
						alt={title}
						height={128}
						width={80}
						className='object-contain rounded-md w-fit h-32 p-1'
					/>
					<div key='content' className='flex flex-col justify-center h-full p-2'>
						<p className='font-medium text-md leading-5 line-clamp-2 text-white '>
							{title}
						</p>
						<p key='author' className='text-sm font-light truncate text-gray-200 py-1'>
							{`By ${author.name}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookListCard
