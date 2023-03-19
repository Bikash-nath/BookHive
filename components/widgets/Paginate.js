import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

function Paginate({ totalPages, page, keyword = '' }) {
	const router = useRouter()
	// const sortType = keyword.split("&sortBy=")[1]?.split("&")[0];

	const routeHandler = (n) => {
		const path = router.asPath

		if (keyword) {
			router.push({ path: path, query: { keyword: keyword, page: n } })
		} else {
			if (path.includes('category')) {
				const category = path.split('category/')[1]?.split('?')[0]
				router.push({
					query: { category, page: n },
				})
			} else if (path.includes('genre')) {
				const genre = path.split('genre/')[1]?.split('?')[0]
				router.push({
					pathname: genre,
					query: { page: n },
				})
			} else
				router.push({
					query: { page: n },
				})
		}
	}

	const [currentPage, setCurrentPage] = useState(1)

	const getPageNos = () => {
		let leftSide = currentPage - 2
		if (leftSide <= 0) leftSide = 1
		let rightSide = currentPage + 2
		if (rightSide >= totalPages) rightSide = totalPages
		const pages = []

		for (let number = leftSide; number <= rightSide; number++) {
			pages.push(number)
		}
		return pages
	}
	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	//	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);
	return (
		totalPages > 1 && (
			<div className='flex justify-center items-center w-full pt-8 pb-2 xl:pt-10'>
				<button
					className='rounded-full text-center p-2 h-9 w-9 xl:h-10 xl:w-10 m-1 xl:m-1.5 text-[#aa14f0]'
					onClick={prevPage}>
					<ChevronLeftIcon dimensions='h-6 w-6' />
				</button>
				{getPageNos().map((pageNo) => (
					<button key={pageNo} onClick={() => routeHandler(pageNo)}>
						<div
							key={pageNo}
							className={
								'rounded-full text-center p-1.5 h-9 w-9 xl:h-10 xl:w-10 m-1 xl:m-1.5 ' +
								(pageNo === currentPage
									? 'bg-[#aa14f0] text-white'
									: 'text-[#aa14f0] hover:bg-[#aa14f0] hover:text-white')
							}
							onClick={() => {
								setCurrentPage(pageNo)
							}}>
							{pageNo}
						</div>
					</button>
				))}
				<button
					className='rounded-full text-center p-2 h-9 w-9 xl:h-10 xl:w-10 m-1 xl:m-1.5 text-[#aa14f0]'
					onClick={nextPage}>
					<ChevronRightIcon dimensions='h-6 w-6' />
				</button>
			</div>
		)
	)
}

export default Paginate
