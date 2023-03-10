import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import colors from '../utils/constants/bgColors'
import colors from '../utils/constants/genreColors'

export default function GenresGrid(props) {
	const { genreList, images } = props
	const [genreImages, setGenreImages] = useState([])

	// useEffect(() => {
	// const imageList = genreList.map((genre, i) => images[i % 6])
	// setGenreImages(imageList)
	// }, [])

	return (
		<section>
			<div className='mx-auto p-1 md:p-2 xl:p-4 text-white'>
				<h2 className='text-2xl xl:text-3xl text-center xl:text-left p-4 xl:p-6'>
					Popular Genres
				</h2>
				<div className='item-container discover-grid'>
					{genreList.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<div className='flex justify-center w-full h-full'>
								<div
									key={i}
									className='group item rounded-lg w-40 h-20 xl:w-60 xl:h-28 m-2'>
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
											' w-40 h-20 xl:w-60 xl:h-28 items-center bg-opacity-95'
										}></div>
									<h5 className='box-text'>{genre.title}</h5>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
