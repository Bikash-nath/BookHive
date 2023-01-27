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
			<div class='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
				<div class='flex justify-between border-b'>
					<input
						type='text'
						class='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
						placeholder='Search Books'
					/>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='w-8 text-gray-300 duration-200 hover:scale-110'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'>
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
