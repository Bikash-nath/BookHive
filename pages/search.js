import { useRouter } from 'next/router'
import SearchBar from '../components/ui/SearchBar'
import GenreSection from '../components/layouts/GenreSection'

export default function SearchPage() {
	const router = useRouter()

	const searchHandler = (keyword) => {
		const searchPath = `/search/?keyword=${keyword}`
		router.push(searchPath)
	}

	return (
		<div>
			<SearchBar onSearch={searchHandler} />
			<GenreSection />
		</div>
	)
}
