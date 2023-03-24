import { useRouter } from 'next/router'
// import Link from 'next/link'
import BookCard from '../cards/BookCard'
import AuthorCard from '../cards/AuthorCard'

export default function ListGridModal({ listTitle, books, authors, coverRef, rightIcon }) {
	const router = useRouter()

	return (
		<section className='p-1 md:p-2 xl:p-3'>
			{listTitle && (
				<div
					className={
						'flex justify-between relative px-1 xl:p-6 ' +
						(!router.pathname.includes('/authors/') ? 'py-12' : 'py-1 xl:py-2')
					}
					ref={coverRef}>
					<h3 className='text-xl xl:text-2xl font-semibold leading-relaxed text-center xl:text-left w-full'>
						{listTitle}
					</h3>
					<div className='hidden xl:flex absolute right-4 cursor-pointer m-2'>
						{rightIcon}
					</div>
				</div>
			)}
			<div className='px-1 xl:p-2'>
				<div className='list-grid'>
					{books ? (
						books.length ? (
							books.map((book, i) => <BookCard book={book} key={i} />)
						) : (
							<div className='flex justify-items-center w-screen xl:w-52'>
								<h3 className='text-lg md:text-xl w-full p-6 text-center xl:text-left'>
									No books found
								</h3>
							</div>
						)
					) : (
						authors?.map((author, i) => <AuthorCard author={author} key={i} />)
					)}
				</div>
			</div>
		</section>
	)
}
