// import { useEffect } from 'react'
import Image from 'next/image'
import openLink from '../../utils/helpers/openLink'

function BookListCards({ books, selectedBook, selectBookHandler }) {
	return books?.map((book, i) => (
		<div className='flex flex-row' key={i}>
			<div
				className={
					'flex items-start relative rounded-md w-full h-[8.5rem] my-[.1rem] p-1 bg-[#192132] cursor-pointer group-hover:flex' +
					(selectedBook?._id === book._id ? ' border-4 border-green-600' : 'border-[1.2px] border-slate-900')
				}
				onClick={() => selectBookHandler(book)}>
				<Image
					src={process.env.BOOKS_URL + book.image.path}
					alt={book.title}
					height={128}
					width={80}
					className='object-contain rounded-md w-fit h-32 p-1'
				/>
				<div className='flex flex-col justify-center w-7/12 h-full p-2'>
					<p className='font-medium text-lg leading-5 line-clamp-2 text-white '>{book.title}</p>
					<p className='text-base font-medium truncate text-gray-200 py-1.5'>{`By ${book.author.name}`}</p>
				</div>
				<div className='flex flex-col items-end justify-between h-full w-1/6 py-2 m-1'>
					<input
						type='checkbox'
						value='copyright'
						checked={selectedBook?._id === book._id ? true : false}
						onChange={() => {}}
						className='h-4 w-4 rounded-full text-green-600 bg-slate-800'
					/>
					<div className='flex items-center justify-center'>
						<button
							onClick={() => openLink(`/books/${book.slug}`)}
							className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	))
}

export default BookListCards
