import { useState } from 'react'
import Image from 'next/image'
import openLink from '../../utils/helpers/openLink'

function BookListCards({ books, selectedBook, setSelectedBook }) {
	// const selectBookHandler=(book)=>{}

	return books?.map((book, i) => (
		<div className='flex flex-row items-start w-screen p-1 rounded-md bg-[#0D1117] group-hover:flex' key={i}>
			<div
				className={
					'flex h-[8.5rem] relative rounded-md mx-1 my-[.1rem] bg-[#192132]' +
					(selectedBook?._id === book._id ? ' border-green-700 border-[1.2px]' : '')
				}
				onClick={() => setSelectedBook(book)}>
				<Image
					src={process.env.BOOKS_URL + book.image}
					alt={book.title}
					height={128}
					width={80}
					className='object-contain rounded-md w-fit h-32 p-1'
				/>
				<div key='content' className='flex flex-col justify-center h-full p-2'>
					<p className='font-medium text-md leading-5 line-clamp-2 text-white '>{book.title}</p>
					<p key='author' className='text-sm font-light truncate text-gray-200 py-1'>
						{`By ${book.author.name}`}
					</p>
				</div>
				<div className='flex flex-col items-end justify-between w-1/4'>
					<input
						type='checkbox'
						value='copyright'
						checked={selectedBook?._id === book._id ? true : false}
						className='h-4 w-4 rounded text-green-600'
					/>
					<div className='flex items-center justify-center'>
						<button
							onClick={() => openLink(`/books/${book.slug}`)}
							className='font-medium text-indigo-600 hover:text-indigo-500'>
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	))
}

export default BookListCards
