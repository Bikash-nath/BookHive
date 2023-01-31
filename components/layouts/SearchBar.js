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
		<div>
			<div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
				<div className='flex justify-between border-b'>
					<input
						type='text'
						className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
						placeholder='Search Books'
					/>
					<button>
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
			</div>
		</div>
	)
}
