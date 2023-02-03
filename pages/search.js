import { useRouter } from 'next/router'
import SearchBar from '../layouts/SearchBar'
import GenreGrid from '../layouts/GenreGrid'

export default function SearchPage() {
	const router = useRouter()

	const searchHandler = (keyword) => {
		const searchPath = `/search/?keyword=${keyword}`
		router.push(searchPath)
	}

	return (
		<div className='screen-gradient'>
			<SearchBar onSearch={searchHandler} />
			<GenreGrid />
		</div>
	)
}
