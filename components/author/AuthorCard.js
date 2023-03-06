import Link from 'next/link'
import Image from 'next/image'

function AuthorCard({ name, image, slug }) {
	return (
		<div className='flex items-center justify-center mx-1 sm:mx-2 w-full h-full rounded-xl group-hover:flex'>
			<Link href={`/authors/${slug}`}>
				<div className='flex flex-col w-28 h-36 xl:w-48 xl:h-48 rounded-xl p-0.5 bg-gray-900 hover:scale-105 transform duration-100'>
					<div className='flex justify-center w-full h-full p-1 xl:p-1.5'>
						<Image
							src={process.env.AUTHORS_URL + image}
							alt={name}
							height={180}
							width={180}
							className='object-center rounded-full w-[6.5rem] h-[6.5rem] xl:w-36 xl:h-36'
						/>
					</div>
					<div className='flex flex-col justify-center w-[6.5rem] xl:w-40 h-full p-1 pt-0'>
						<p className='text-center font-semibold text-sm xl:text-base truncate text-white '>
							{name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
