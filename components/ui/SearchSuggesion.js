import { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getSearchSuggestions } from '../../API/books'
import ButtonSpinner from '../widgets/ButtonSpinner'

function SearchSuggestion({ keyword, showSuggestion, showSuggestionHandler }) {
	const [searchSuggestions, setSearchSuggestions] = useState({})
	const [loadingSearch, setLoadingSearch] = useState(false)

	useEffect(() => {
		if (keyword && keyword !== ' ') {
			const timerId = setTimeout(async () => {
				setSearchSuggestions({})
				setLoadingSearch(true)
				const result = await getSearchSuggestions(keyword)
				if (result.books) setSearchSuggestions(result)
				else {
					setSearchSuggestions({})
					showSuggestionHandler(false)
				}
				setLoadingSearch(false)
			}, 500)

			return () => {
				clearTimeout(timerId)
			}
		}
	}, [keyword])

	return showSuggestion && (loadingSearch || searchSuggestions.books) ? (
		<div className='absolute right-0 top-12 flex justify-center w-full z-10'>
			<div
				className='m-1 py-1 origin-top-right rounded-md bg-[#192139] shadow-2xl ring-1 ring-black ring-opacity-5 w-full max-h-screen overflow-y-scroll hide-scrollbar focus:outline-none'
				role='menu'
				aria-orientation='vertical'
				tabIndex='-1'>
				{
					// !searchSuggestions.books?.length &&
					loadingSearch ? (
						<ButtonSpinner />
					) : (
						<Fragment>
							{searchSuggestions.books?.map((book, i) => (
								<Link href={`/books/${book.slug}`} key={i}>
									<div
										className={
											'flex font-medium gap-2 px-2 py-1 cursor-pointer select-none hover:bg-[#101621] text-white'
										}
										role='menuitem'
										tabIndex='-1'
										id={i}>
										<div className='w-8 h-8 xl:w-10 xl:h-10'>
											<Image
												src={process.env.BOOKS_URL + book.image.path}
												alt={book.title}
												height={50}
												width={50}
												className='object-cover rounded-md w-full h-full'
											/>
										</div>
										<div className='flex flex-col justify-center h-full px-1 overflow-hidden'>
											<p className='font-medium text-sm leading-snug tracking-wide truncate text-white'>
												{book.title}
											</p>
											<p
												key='author'
												className='font-medium text-xs leading-snug tracking-wide truncate text-gray-200 pt-[0.1rem]'>
												by {`${book.author?.name}`}
											</p>
										</div>
									</div>
								</Link>
							))}
							{searchSuggestions.authors?.map((author, i) => (
								<Link href={`/authors/${author.slug}`} key={i}>
									<div
										className={
											'flex text-sm gap-2 px-2 py-1 cursor-pointer hover:bg-[#101621] text-white'
										}
										role='menuitem'
										tabIndex='-1'
										id='menu-item-0'>
										<Image
											src={process.env.AUTHORS_URL + author.image}
											alt={author.name}
											height={50}
											width={50}
											className='object-cover rounded-full w-10 h-10'
										/>
										<div className='my-auto h-full px-1'>
											<p className='font-medium text-sm tracking-wide truncate text-white '>
												{author.name}{' '}
											</p>
										</div>
									</div>
								</Link>
							))}
						</Fragment>
					)
				}
			</div>
		</div>
	) : (
		<Fragment />
	)
}

export default SearchSuggestion
