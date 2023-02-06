import { useRouter } from 'next/router'
import SearchBar from '../components/SearchBar'
import GenreGrid from '../components/GenreGrid'

import { genreList } from '../utils/constants/genreConstants'
import { images } from '../utils/constants/genrePics'

function DiscoverPage() {
	const router = useRouter()

	const searchHandler = (keyword) => {
		const searchPath = `/search/?keyword=${keyword}`
		router.push(searchPath)
	}

	return (
		<div className='bg-gradient'>
			<SearchBar onSearch={searchHandler} />
			<GenreGrid genreList={genreList} images={images} />
		</div>
	)
}

export default DiscoverPage
