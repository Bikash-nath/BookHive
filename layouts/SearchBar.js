import { useState, useEffect } from 'react'
import SearchIcon from '../components/ui/icons/SearchIcon'

export default function SearchBar(props) {
	const [keyword, setKeyword] = useState('')
	const [debouncedTerm, setDebouncedTerm] = useState(keyword)

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(keyword)
		}, 1000)

		return () => {
			clearTimeout(timerId)
		}
	}, [keyword])

	useEffect(() => {
		if (debouncedTerm) {
			props.onSearch(keyword)
		}
	}, [debouncedTerm]) //don't add setPath as dependency of useEffect; CallBack hell

	return (
		<div className='flex items-center justify-center gap-4 p-2'>
			<input
				type='text'
				value={keyword}
				onChange={(e) => {
					e.preventDefault()
					setKeyword(e.target.value)
				}}
				className='m-2 ml-6 w-full xs:w-2/5 h-8 md:h-9 lg:h-10 p-4 pr-0 mr-0 text-black text-lg rounded-full focus:outline-none bg-gray-300'
				placeholder='Search books, authors or series'></input>
			<button className='rounded-md p-2 pl-0 ml-0'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={2}
					stroke='white'
					className='w-10 h-10'>
					<title>Search</title>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
			</button>
		</div>
	)
}
