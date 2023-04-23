import { useEffect, useState } from 'react'
import CheckIcon from '../../assets/icons/CheckIcon'
import SelectOptionIcon from '../../assets/icons/SelectOptionIcon'

function SelectMenu({ title, selectedOption, selectOptionHandler, options }) {
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		if (!selectedOption || !options.includes(selectedOption)) {
			selectOptionHandler(options[0])
		}
		setShowMenu(false)
	}, [options])

	const changeOptionHandler = (e) => {
		selectOptionHandler(e.target.innerText)
		setTimeout(() => setShowMenu(false), 400)
	}

	return (
		<div className=''>
			<label id='listbox-label' className='block text-md font-medium leading-6 text-white'>
				{title}
			</label>
			<div className='relative mt-2'>
				<button
					type='button'
					className='relative w-full cursor-default rounded-md bg-[#192139] py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:outline-none focus:ring-1 focus:ring-[#8C6AFF] sm:text-sm sm:leading-6'
					onClick={() => setShowMenu(!showMenu)}
					aria-labelledby='listbox-label'>
					<span className='flex items-center'>
						<span className='ml-1.5 block font-medium truncate'>{selectedOption}</span>
					</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
						<SelectOptionIcon />
					</span>
				</button>

				{showMenu && (
					<ul
						className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#192139] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
						tabindex='-1'
						role='listbox'
						aria-labelledby='listbox-label'
						aria-activedescendant='listbox-option-3'>
						{options.map((option) => (
							<li
								className={
									'text-white relative cursor-default select-none py-2 pl-3 pr-9 ' +
									(selectedOption === option
										? 'bg-[#101621]'
										: 'hover:cursor-pointer hover:bg-[#101621]')
								}
								key={option}
								onClick={changeOptionHandler}
								role='option'>
								<div className='flex items-center'>
									<span className='font-normal ml-1.5 block truncate'>{option}</span>
								</div>
								{selectedOption === option && (
									<span className='text-[#8C6AFF] absolute inset-y-0 right-0 flex items-center pr-4'>
										<CheckIcon dimensions='h-5 w-5' />
									</span>
								)}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default SelectMenu
