import Link from 'next/link'
import Image from 'next/image'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'

// backdrop-blur-sm animate-slideup
function BookCard({ book }) {
	// return books?.map((book) => (
	return (
		<div className='flex items-center justify-center w-full h-full xl:my-2 rounded-md group-hover:flex'>
			<Link href={`/books/${book.slug}`}>
				<div className='relative flex flex-col w-28 h-52 xl:w-40 xl:h-72 rounded-md p-[0.1rem] xl:p-[0.2rem] bg-[#192132] xl:hover:bg-slate-800 xl:hover:scale-105 transform duration-100'>
					{/* <button className='absolute top-1 right-1 xl:top-2 xl:right-2 z-10 rounded-full bg-slate-900 p-1'>
						<HeadphoneIcon className='' dimensions='h-5 w-5' />
					</button> */}
					<Image
						src={process.env.BOOKS_URL + book.image.path}
						alt={book.title}
						height={240}
						width={160}
						className='object-cover rounded-md w-28 h-40 xl:w-40 xl:h-56 p-[.2rem] xl:p-1'
					/>
					<div key='content' className='flex flex-col justify-center h-full px-1'>
						<p className='font-medium xl:font-semibold text-xs xl:text-sm xl:my-auto leading-[.85rem] xl:leading-4 line-clamp-2 text-white '>
							{book.title}
						</p>
						<p
							key='author'
							className='text-xs xl:text-sm font-light truncate leading-relaxed text-gray-200 py-[.1rem] xl:py-[.2rem]'>
							{`${book.author.name}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
