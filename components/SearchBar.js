import { useState, useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'

import SearchToggleContext from '../store/searchToggleContext'
import ArrowBackIcon from '../assets/icons/ArrowBackIcon'
import NavigateBackButton from './ui/NavigateBackButton'

export default function SearchBar(props) {
	const { activeSearch, toggleSearch } = useContext(SearchToggleContext)
	const router = useRouter()
	const inputRef = useRef(null)

	const [keyword, setKeyword] = useState(router.query.keyword || '')
	const [prevRoute, setPrevRoute] = useState(false) //updated keyword after navigating back

	useEffect(() => {
		const timerId = setTimeout(() => {
			if (prevRoute) {
				setKeyword(router.query.keyword)
			} else if (router.query.keyword !== keyword && keyword && keyword !== ' ') {
				searchHandler(keyword)
			}
		}, 1000)

		if (activeSearch) inputRef.current.focus()

		return () => {
			clearTimeout(timerId)
		}
	}, [keyword, activeSearch])

	const searchHandler = (keyword) => {
		inputRef.current.blur()
		router.push({
			pathname: '/search',
			query: { keyword: keyword },
		})
	}

	return (
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
			<div className='relative w-full p-1.5 xl:p-[.125rem]'>
				<input
					type='text'
					value={keyword}
					onChange={(e) => {
						e.preventDefault()
						setKeyword(e.target.value)
						prevRoute && setPrevRoute(false)
					}}
					ref={inputRef}
					className='w-full box-border h-10 p-4 text-white text-lg rounded-full focus:outline-none bg-gray-800'
					placeholder='Search books'
				/>
				<button className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full p-1'>
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
		</div>
	)
}
