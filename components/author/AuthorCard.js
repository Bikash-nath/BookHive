import Link from 'next/link'
import Image from 'next/image'

function AuthorCard({ name, image, slug }) {
	return (
		<div className='flex flex-row items-center justify-center sm:mx-3 mx-2 w-36 h-60 lg:mx-4 lg:w-44 lg:h-80 rounded-xl group-hover:flex'>
			<Link href={`/authors/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-xl p-0.5 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 hover:scale-105 transform duration-100'>
					<Image
						src={'http://127.0.0.1:5000' + image}
						alt={name}
						height={240}
						width={160}
						className='object-contain rounded-xl w-32 h-44 lg:w-40 lg:h-60 p-0.5'
					/>
					<div className='flex flex-col justify-center w-32 lg:w-40 h-full'>
						<p className='text-center font-semibold text-sm lg:text-base truncate text-white '>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
