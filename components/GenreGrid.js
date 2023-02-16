import { useEffect, useState } from 'react'

export default function GenresGrid(props) {
	const { genreList, images } = props
	const [genreImages, setGenreImages] = useState([])

	useEffect(() => {
		const imageList = genreList.map(
			() => '/images/genreImages/' + images[Math.floor(Math.random() * images.length)]
		)
		setGenreImages(imageList)
	}, [])

	return (
		<section>
			<div className='container mx-auto p-2 md:p-6 text-white'>
				<h2 className='text-2xl md:text-3xl text-center md:text-left p-4 md:p-6'>
					Popular Genres
				</h2>
				<div className='item-container genre-grid'>
					{genreList.map((genre, i) => (
						<div key={genre} className='group item rounded-lg'>
							<Image
								src={genreImages[i]}
								alt={genre}
								height={120}
								width={180}
								className='rounded-lg'
							/>
							<div className='item-gradient'></div>
							<h5 className='box-text'>{genre}</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
