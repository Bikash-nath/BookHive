import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import colors from '../../utils/constants/bgColors'

function GenreCards({ genreList, colors }) {
	// const [genreImages, setGenreImages] = useState([])

	// useEffect(() => {
	// const imageList = genreList.map((genre, i) => images[i % 6])
	// setGenreImages(imageList)
	// }, [])

	return (
		<div className='item-container discover-grid gap-2 ms:gap-3 sm:gap-4 xl:gap-6'>
			{genreList.map((genre, i) => (
				<Link href={`/books/genre/${genre.slug}`} key={i}>
					<div className='flex justify-center w-full h-full'>
						<div key={i} className='group item rounded-lg w-44 h-20 xl:w-60 xl:h-28'>
							{/* <Image
									src={process.env.GENRES_URL + genreImages[i]}
									alt={genre.title}
									height={140}
									width={280}
									className='rounded-xl'
								/> */}
							<div
								className={
									colors[i % 20] +
									' w-44 h-20 xl:w-60 xl:h-28 items-center bg-opacity-95'
								}></div>
							<h5 className='box-text'>{genre.title}</h5>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default GenreCards
