export default function GenresGrid() {
	const genreList = [
		'Action & Adventures',
		'Art & Crafts',
		'Biographies & Memoirs',
		'Business & Economics',
		'Children & Young Adult',
		'Comics & Mangas',
		'Crime & Mystery',
		'Fantasy',
		'Fiction & Literature',
		'Health & Personal Development',
		'History',
		'Home & Lifestyle',
		'Horror & Thriller',
		'Humor',
		'Law & Politics',
		'Romance',
		'Society & Social Sciences',
		'Sports',
		'Technology & Medicine',
		'Travel',
	]

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
			<div className='container mx-auto p-4 md:p-6 text-white'>
				<h2 className='text-center md:text-left text-2xl md:text-3xl p-4 md:p-6'>
					Popular Genres
				</h2>
				<div className='item-container'>
					{genreList.map((genre) => (
						<div className='group item'>
							<img
								src={
									'/images/genres/' +
									imgs[Math.floor(Math.random() * imgs.length)]
								}
								alt=''
								className='hidden w-full duration-200 md:block group-hover:scale-110'
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
