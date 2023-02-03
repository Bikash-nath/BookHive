import { genreList } from '../../data/genreConstants'

export default function GenresGrid() {
	const imgs = [
		'arcade.jpg',
		'borealis.jpg',
		'earth.jpg',
		'fisheye.jpg',
		'grid.jpg',
		'roads.jpg',
	]

	return (
		<section>
			<div className='container mx-auto p-1 md:p-6 text-white'>
				<h2 className='text-2xl md:text-3xl text-center md:text-left md:p-6'>
					Popular Genres
				</h2>
				<div className='item-container genre-grid'>
					{genreList.map((genre) => (
						<div key={genre} className='group item'>
							<img
								src={
									'/images/genres/' +
									imgs[Math.floor(Math.random() * imgs.length)]
								}
								alt=''
								className=''
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
