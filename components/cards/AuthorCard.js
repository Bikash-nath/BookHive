import Link from 'next/link'
import Image from 'next/image'

function AuthorCard({ author }) {
	return (
		<div
			className='flex items-center justify-center w-full h-full rounded-xl group-hover:flex'
			key={author._id}>
			<Link href={`/authors/${author.slug}`}>
				<div className='flex flex-col w-28 h-36 xl:w-40 xl:h-48 rounded-xl xl:p-0.5 bg-[#192132] hover:scale-105 transform duration-100 backdrop-blur-sm'>
					<div className='flex justify-center w-full h-full p-1 xl:p-1.5'>
						<Image
							src={process.env.AUTHORS_URL + author.image}
							alt={author.name}
							height={180}
							width={180}
							className='object-cover rounded-full w-[6.5rem] h-[6.5rem] xl:w-[9.5rem] xl:h-[9.5rem]'
						/>
					</div>
					<div className='flex flex-col justify-center w-[6.5rem] xl:w-full h-full p-1 pt-0 xl:pt-0 xl:p-1.5'>
						<p className='text-center font-medium text-sm xl:text-base truncate text-white '>
							{author.name}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default AuthorCard
