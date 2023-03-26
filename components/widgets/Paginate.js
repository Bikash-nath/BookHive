import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon'
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon'

function Paginate({ totalPages, page, keyword = '' }) {
	const router = useRouter()

	const [currentPage, setCurrentPage] = useState(1)

	const paginateHandler = (n) => {
		const path = router.asPath
		// const sortType = keyword.split("&sortBy=")[1]?.split("&")[0];
		if (keyword) {
			return { path: path, query: { keyword, page: n } }
		} else {
			if (path.includes('category')) {
				const category = path.split('category/')[1]?.split('?')[0]
				return {
					query: { category, page: n },
				}
			} else if (path.includes('genre')) {
				const genre = path.split('genre/')[1]?.split('?')[0]
				return {
					pathname: genre,
					query: { page: n },
				}
			} else
				return {
					query: { page: n },
				}
		}
	}

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

	const prevPage = () => {
		if (currentPage > 1) return currentPage - 1
	}
	const nextPage = () => {
		if (currentPage < totalPages) return currentPage + 1
	}

	//	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);
	return (
		totalPages > 1 && (
			<div className='flex justify-center items-center w-full my-6 lg:my-8 xl:my-10'>
				<Link href={paginateHandler(prevPage())}>
					<div
						className='rounded-full text-center p-2 h-9 w-9 xl:h-10 xl:w-10 m-1 xl:m-1.5 text-[#aa14f0]'
						onClick={() => {
							setCurrentPage(prevPage)
						}}>
						<ChevronLeftIcon dimensions='h-6 w-6' />
					</div>
				</Link>
				{getPageNos().map((pageNo) => (
					<Link href={paginateHandler(pageNo)} key={pageNo}>
						<div
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
					</Link>
				))}
				<Link href={paginateHandler(nextPage())}>
					<div
						className='rounded-full text-center p-2 h-9 w-9 xl:h-10 xl:w-10 m-1 xl:m-1.5 text-[#aa14f0]'
						onClick={() => {
							setCurrentPage(nextPage)
						}}>
						{' '}
						<ChevronRightIcon dimensions='h-6 w-6' />
					</div>
				</Link>
			</div>
		)
	)
}

export default Paginate
