import { useRouter } from 'next/router'
import SearchBar from '../components/layouts/SearchBar'
import GenreGrid from '../components/layouts/GenreGrid'

export default function SearchPage() {
	const router = useRouter()

	const searchHandler = (keyword) => {
		const searchPath = `/search/?keyword=${keyword}`
		router.push(searchPath)
	}

	return (
		<div>
			<SearchBar onSearch={searchHandler} />
			<GenreGrid />
		</div>
	)
}
