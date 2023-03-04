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
			<div className='container mx-auto p-1 md:p-2 lg:p-4 text-white'>
				<h2 className='text-2xl md:text-3xl text-center md:text-left p-4 md:p-6'>
					Popular Genres
				</h2>
				<div className='item-container discover-grid'>
					{genreList.map((genre, i) => (
						<Link href={`/books/genre/${genre.slug}`} key={i}>
							<div
								key={i}
								className='group item rounded-lg w-40 h-20 md:w-60 md:h-32'>
								{/* <Image
									src={process.env.GENRES_URL + genreImages[i]}
									alt={genre.title}
									height={200}
									width={400}
									className='rounded-lg'
								/> */}
								<div
									className={colors[i % 20] + ' w-40 h-20 md:w-60 md:h-32'}></div>
								<h5 className='box-text'>{genre.title}</h5>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
