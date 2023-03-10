import Link from 'next/link'
import Image from 'next/image'
import HeadphoneIcon from '../../assets/icons/HeadphoneIcon'

//overflow-hidden backdrop-blur-sm animate-slideup

function BookCard({ title, image, author, slug }) {
	return (
		<div className='flex items-center justify-center mx-2 sm:mx-3 xl:w-40 xl:h-68 xl:py-2 rounded-md group-hover:flex'>
			<Link href={`/books/${slug}`}>
				<div className='relative flex flex-col w-32 h-64 xl:w-full xl:h-full rounded-md p-[0.3rem] xl:p-[0.4rem] bg-[#192132] hover:bg-slate-800 hover:scale-105 transform duration-100'>
					{/* <button className='absolute top-1 right-1 xl:top-2 xl:right-2 z-10 rounded-full bg-slate-900 p-1'>
						<HeadphoneIcon className='' dimensions='h-5 w-5' />
					</button> */}
					<Image
						src={process.env.BOOKS_URL + image}
						alt={title}
						height={240}
						width={160}
						className='object-contain rounded-md xl:w-40 xl:h-60 xl:py-1 min-w-full'
					/>
					<div key='content' className='flex flex-col justify-center h-full px-1'>
						<p className='font-medium xl:font-semibold text-sm mt-0 leading-4 line-clamp-2 text-white '>
							{title}
						</p>
						<p
							key='author'
							className='text-xs font-light xl:text-sm truncate text-gray-200 py-1'>
							{`By ${author.name}`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard
