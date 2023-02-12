import Link from 'next/link'
import Image from 'next/image'

//flex flex-col += overflow-hidden backdrop-blur-sm animate-slideup

function AuthorCard(props) {
	const { name, image, slug } = props
	return (
		<div className='flex flex-row items-center justify-center sm:mx-3 mx-2 w-36 h-60 lg:mx-4 lg:w-44 lg:h-80 rounded-xl group-hover:flex'>
			<Link href={`/authors/${slug}`}>
				<div className='flex flex-col w-full h-full rounded-xl p-[0.3rem] lg:p-2 bg-gray-800 bg-opacity-70 hover:bg-opacity-100 hover:scale-105 transform duration-100'>
					<img
						src={'/images' + image}
						alt={name}
						className='object-contain rounded-xl w-30 h-44 lg:w-40 lg:h-60'
					/>
					<div className='flex flex-col justify-center w-32 lg:w-40 h-full'>
						<p className='text-center font-semibold text-sm lg:text-base m-[0.1rem] lg:m-1 truncate text-white '>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
