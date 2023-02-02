import { useState, useEffect } from 'react'
import SettingIcon from '../ui/icons/SearchIcon'

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
				className='m-2 ml-6 w-full xs:w-4/5 md:w-2/5 h-10 md:h-12 p-2 placeholder:font-light rounded-full focus:outline-none bg-gray-200'
				placeholder='Search books, authors or series'
			/>
			<button className='rounded-md p-2'>
				<SettingIcon className='w-8 h-8 text-gray-300 duration-200 hover:scale-110' />
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-8 text-gray-300 duration-200 hover:scale-110'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<circle cx='10' cy='10' r='7' />
					<line x1='21' y1='21' x2='15' y2='15' />
				</svg>
			</button>
		</div>
	)
}
