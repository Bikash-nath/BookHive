import { useEffect, useState } from 'react'

export default function GenresGrid(props) {
	const { genreList, images } = props
	const [genreImages, setGenreImages] = useState([])

	useEffect(() => {
		const imageList = genreList.map(
			() =>
				'/images/genres/' + images[Math.floor(Math.random() * images.length)]
		)
		setGenreImages(imageList)
	}, [])

	return (
		<section>
			<div className='container mx-auto p-1 md:p-6 text-white'>
				<h2 className='text-2xl md:text-3xl text-center md:text-left md:p-6'>
					Popular Genres
				</h2>
				<div className='item-container genre-grid'>
					{genreList.map((genre, i) => (
						<div key={genre} className='group item rounded-lg'>
							<img src={genreImages[i]} alt={genre} className='rounded-lg' />
							<div className='item-gradient'></div>
							<h5 className='box-text'>{genre}</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
