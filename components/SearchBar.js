import { useState, useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'

import SearchToggleContext from '../store/searchToggleContext'
import SearchSuggestion from './widgets/SearchSuggesion'
import SortResults from '../components/ui/SortResults'
import NavigateBackButton from './ui/NavigateBackButton'
import ArrowBackIcon from '../assets/icons/ArrowBackIcon'

export default function SearchBar() {
	const { activeSearch, toggleSearch } = useContext(SearchToggleContext)
	const router = useRouter()
	const inputRef = useRef(null)
	const [showSuggestion, setShowSuggestion] = useState(false)

	const [keyword, setKeyword] = useState(router.query.keyword || '')
	const [prevRoute, setPrevRoute] = useState(false) //updated keyword after navigating back

	useEffect(() => {
		if (prevRoute) {
			setKeyword(router.query.keyword)
		}
		if (activeSearch) inputRef.current.focus()
		router.events.on('hashChangeComplete', () => setShowSuggestion(false))
		setShowSuggestion(false)
		// const inputWidth = Math.round(inputRef.current.getBoundingClientRect().width)
	}, [router.asPath, activeSearch])

	const searchHandler = () => {
		if (router.query.keyword !== keyword && keyword && keyword !== ' ') {
			inputRef.current.blur()
			router.push({
				pathname: '/search',
				query: { keyword: keyword },
			})
		}
		setShowSuggestion(false)
	}

	const keywordHandler = (e) => {
		e.preventDefault()
		setKeyword(e.target.value)
		setShowSuggestion(true)
		prevRoute && setPrevRoute(false)
	}

	return (
		<div className='flex flex-col items-center justify-center w-full relative'>
			<div className='flex items-center justify-center w-full gap-0 md:gap-2 xl:gap-3'>
				{activeSearch ? (
					<div
						className='flex items-center justify-center cursor-pointer'
						onClick={() => {
							toggleSearch(false)
							setKeyword(null)
						}}>
						<ArrowBackIcon dimensions='h-7 w-7' />
					</div>
				) : router.pathname.includes('/search') ? (
					<NavigateBackButton
						clickMethod={() => {
							setPrevRoute(true)
						}}
					/>
				) : (
					<></>
				)}
				<div className='relative w-full px-0.5 py-1.5 xl:p-[.125rem]'>
					<input
						type='text'
						value={keyword}
						onKeyUp={(e) => {
							if (e.key === 'Enter') searchHandler()
						}}
						onChange={keywordHandler}
						ref={inputRef}
						className={
							'w-full box-border h-10 p-4 text-white text-lg rounded-full focus:outline-none ' +
							(keyword ? 'bg-[#192139]' : ' bg-gray-800')
						}
						placeholder='Search books'
					/>
					<button
						className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full p-1'
						onClick={searchHandler}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.6}
							stroke='#f3f7ff'
							className='w-7 h-7'>
							<title>Search books</title>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</button>
				</div>
				{router.asPath.includes('/search') && <SortResults showSuggestionHandler={setShowSuggestion} />}
			</div>
			<SearchSuggestion keyword={keyword} showSuggestion={showSuggestion} />
		</div>
	)
}
