import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SearchBar() {
	const router = useRouter()

	const searchHandler = (keyword) => {
		const searchPath = `/search/?keyword=${keyword}`
		router.push(searchPath)
	}

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
			searchHandler(keyword)
		}
	}, [debouncedTerm]) //don't add setPath as dependency of useEffect; CallBack hell

	return (
		<div className='flex items-center justify-center w-full gap-4'>
			<input
				type='text'
				value={keyword}
				onChange={(e) => {
					e.preventDefault()
					setKeyword(e.target.value)
				}}
				className='mx-2 w-full h-10 lg:h-11 p-4 pr-0 mr-0 text-white text-lg rounded-full focus:outline-none bg-gray-700'
				placeholder='Search books, authors or series'></input>
			<button className='rounded-md p-2 pl-0 ml-0'>
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
	)
}
