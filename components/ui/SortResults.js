import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SortIcon from '../../assets/icons/SortIcon'

function SortResults() {
	const [sortBy, setSortBy] = useState('-ratingsTotal')
	const [showSortOption, setShowSortOption] = useState(false)

	const router = useRouter()
	const [keyword, setKeyword] = useState(router.query.keyword || '')

	useEffect(() => {
		router.push({
			pathname: '/search',
			query: { keyword: router.query.keyword, sort: sortBy },
		})
	}, [sortBy, keyword])

	return (
		<div className='flex items-center'>
			<div className='relative inline-block text-left'>
				<div>
					<button
						type='button'
						className='group inline-flex justify-center rounded-md p-1 m-1 hover:bg-[#192139]'
						onClick={() => setShowSortOption(!showSortOption)}
						aria-expanded='false'
						aria-haspopup='true'>
						<SortIcon dimensions='h-7 w-7' />
					</button>
				</div>

				{showSortOption && (
					<div
						className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#192139] shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'
						role='menu'
						aria-orientation='vertical'
						tabIndex='-1'>
						<div className='py-1' role='none'>
							<div
								onClick={() => setSortBy('-ratingsTotal')}
								className={
									'font-medium block px-4 py-2 cursor-pointer ' +
									(sortBy === '-ratingsTotal' ? 'bg-[#101621] text-white' : 'text-gray-300')
								}
								role='menuitem'
								tabIndex='-1'
								id='menu-item-0'>
								Popularity
							</div>
							<div
								onClick={() => setSortBy('-ratingsAvg')}
								className={
									'font-medium block px-4 py-2 cursor-pointer ' +
									(sortBy === '-ratingsAvg' ? 'bg-[#101621] text-white' : 'text-gray-300')
								}
								role='menuitem'
								tabIndex='-1'
								id='menu-item-1'>
								Best Rating
							</div>
							<div
								onClick={() => setSortBy('-createdAt')}
								className={
									'font-medium block px-4 py-2 cursor-pointer ' +
									(sortBy === '-createdAt' ? 'bg-[#101621] text-white' : 'text-gray-300')
								}
								role='menuitem'
								tabIndex='-1'
								id='menu-item-2'>
								Latest arrivals
							</div>
							<div
								onClick={() => setSortBy('title')}
								className={
									'font-medium block px-4 py-2 cursor-pointer ' +
									(sortBy === 'title' ? 'bg-[#101621] text-white' : 'text-gray-300')
								}
								role='menuitem'
								tabIndex='-1'
								id='menu-item-0'>
								Title (a-z)
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default SortResults
