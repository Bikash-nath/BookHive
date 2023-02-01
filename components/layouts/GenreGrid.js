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

	return (
		<section>
			<div className='container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'>
				<h2 className='text-4xl text-center md:text-left md:text-3xl'>
					Popular Genres
				</h2>
				{genreList.map((genre) => (
					<div className='item-container'>
						<div className='group item'>
							<img
								src='/images/genres/deep-earth.jpg'
								alt=''
								className='hidden w-full duration-200 md:block group-hover:scale-110'
							/>
							<div className='item-gradient'></div>
							<h5 className='box-text'>{genre}</h5>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
