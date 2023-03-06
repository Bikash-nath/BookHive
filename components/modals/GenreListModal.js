import Link from 'next/link'

function GenreListModal({ genres }) {
	return (
		<div className='flex flex-wrap items-center justify-start space-x-4 p-4 xl:p-8'>
			{genres?.map((genre, i) => (
				<Link href={`/books/genre/${genre.slug}`} key={i}>
					<button className='rounded-full py-1 px-2 xl:p-2 xl:px-3 m-2 xl:m-3 font-medium bg-[#334366] text-white'>
						{genre.title}
					</button>
				</Link>
			))}
		</div>
	)
}

export default GenreListModal
