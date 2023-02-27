import { createContext, useState } from 'react'

const SearchToggleContext = createContext({
	activeSearch: false,
	toggleSearch: function (searchStatus) {},
})

export function SearchToggleContextProvider(props) {
	const [searchState, setSearchState] = useState(false)

	function toggleSearchHandler(searchStatus) {
		// console.log('toggleSearchHandler⭐', searchStatus)
		setSearchState(searchStatus)
	}

	const context = {
		activeSearch: searchState,
		toggleSearch: toggleSearchHandler,
	}

	return (
		<SearchToggleContext.Provider value={context}>
			{props.children}
		</SearchToggleContext.Provider>
	)
}

export default SearchToggleContext
