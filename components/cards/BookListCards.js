// import { useEffect } from 'react'
import Image from 'next/image'
import openLink from '../../utils/helpers/openLink'

function BookListCards({ books, selectedBook, selectBookHandler }) {
	const selectHandler = (book) => {
		if (selectedBook !== book) selectBookHandler(book)
		else selectBookHandler(null)
	}

	return books?.map((book, i) => (
		<div className='flex flex-row bg-black' key={i}>
			<div
				className={
					'flex items-start justify-between relative rounded-md w-full h-32 p-1 cursor-pointer group-hover:flex ring-1 ' +
					(selectedBook?._id === book._id ? 'bg-green-700/80 ring-green-600' : 'bg-[#192132] ring-slate-700')
				}
				onClick={() => selectHandler(book)}>
				<Image
					src={process.env.BOOKS_URL + book.image.path}
					alt={book.title}
					height={128}
					width={80}
					className='object-contain rounded-md w-fit h-[7.5rem]'
				/>
				<div className='flex flex-col justify-center w-7/12 h-full p-2'>
					<p className='font-semibold leading-5 line-clamp-2 text-white'>{book.title}</p>
					<p className='font-medium truncate text-gray-300 py-1.5'>{`By ${book.author.name}`}</p>
				</div>
				<div className='flex flex-col items-end justify-between h-full w-1/6 p-2'>
					<input
						type='checkbox'
						value='copyright'
						checked={selectedBook?._id === book._id ? true : false}
						onChange={() => {}}
						className='h-4 w-4 rounded-full text-green-600 checked:text-green-600 bg-[#111844]'
					/>
					<div className='flex items-center justify-center'>
						<button
							onClick={() => openLink(`/books/${book.slug}`)}
							className={
								'text-sm font-medium ' +
								(selectedBook?._id === book._id
									? 'text-gray-300 hover:text-white'
									: 'text-blue-600 hover:text-blue-500')
							}>
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	))
}

export default BookListCards
