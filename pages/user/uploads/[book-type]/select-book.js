import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../../store/userContext'
import SnackbarContext from '../../../../store/snackbarContext'
import SpinnerContext from '../../../../store/spinnerContext'
import { searchBooks } from '../../../../API/books'
import BookAddModal from '../../../../components/modals/BookAddModal'
import BookListCards from '../../../../components/cards/BookListCards'
import BookCard from '../../../../components/cards/BookCard'
import LoginBanner from '../../../../components/login/LoginBanner'
import PageHeader from '../../../../components/layouts/PageHeader'
import SearchIcon from '../../../../assets/icons/SearchIcon'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import PlusCircleIcon from '../../../../assets/icons/PlusCircleIcon'
import ArrowIcon from '../../../../assets/icons/ArrowIcon'
import BookAddForm from '../../../../components/forms/BookAddForm'
import HorizontalRuleText from '../../../../components/ui/HorizontalRuleText'

function SelectBook() {
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const { user } = useContext(UserContext)

	const [activeUser, setActiveUser] = useState(null)
	const [showSearchModal, setShowSearchModal] = useState(false)
	const [addBookModal, setAddBookModal] = useState(false)
	const [searchResult, setSearchResult] = useState([])
	const [selectedBook, setSelectedBook] = useState(null)
	const [saveBook, setSaveBook] = useState(false)
	const [keyword, setKeyword] = useState('')

	const router = useRouter()
	const bookType = router.asPath.split('uploads/')[1].split('/select-book')[0]

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

	const searchBookHandler = async () => {
		toggleSpinner(true)
		const result = await searchBooks(router.query)
		setSearchResult(result.data)
		if (!result.data) snackbarCtx.addMessage({ title: 'Something went wrong' })
		toggleSpinner(false)
	}

	const nextPageHandler = () => {
		if (!selectedBook) snackbarCtx.addMessage({ title: 'Please select a book which you want to upload' })
		else router.push('')
	}

	return (
		<Fragment>
			<Head>
				<title>Select Book</title>
				<meta name='description' content='Select book which user wants to upload' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Your Upload Books'
					message='Login as a creator or author to upload books, short stories or poems'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient relative pb-16 xl:pb-8'>
					<PageHeader pageTitle='Select Book' backBtn={true} />
					<div className='p-4 xl:p-8 w-full sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-[36%]'>
						{selectedBook && (addBookModal || showSearchModal) ? (
							<BookCard book={selectedBook} />
						) : (
							<>
								<p className='text-xl font-semibold my-4'>{`Which book's ${bookType} you want to upload`}</p>
								<p className='text-xl font-medium text-center py-2 xl:py-4'>
									Find book from our collection
								</p>
								<div
									type='text'
									onClick={setShowSearchModal}
									className='font-size-[1.6rem] text-lg font-medium px-4 py-2.5 mb-2 text-gray-200 bg-[#192136] rounded-full'>
									Search books
								</div>
								<HorizontalRuleText message='or' />
								<p className='text-xl text-center font-medium py-2 xl:py-4'>Upload your own book</p>
								<button
									className='flex items-center justify-between rounded-lg w-full sm:mr-8 gap-6 bg-[#192136]'
									onClick={() => setAddBookModal(true)}>
									<p className='font-size-[1.5rem] font-medium p-3 xl:p-3.5'>Add New Book</p>
									<div className='flex items-center p-3 xl:p-3.5 rounded-lg bg-[#111844]'>
										<PlusIcon dimensions='h-6 w-6' />
									</div>
								</button>
							</>
						)}
						<div className='flex items-center justify-center gap-4 w-full py-8 xl:py-10'>
							{selectedBook && (
								<button
									onClick={() => setSelectedBook(null)}
									className='text-center px-3 py-2 border border-[#8C6AFF] rounded-3xl'>
									<span>Change</span>
								</button>
							)}
							<button
								onClick={nextPageHandler}
								className={selectedBook ? 'btn-next' : 'btn-next-inactive'}>
								<span>Next</span>
								<ArrowIcon />
							</button>
						</div>
					</div>
					{showSearchModal ? (
						<BookAddModal
							title='Search & Select Book'
							book={selectedBook}
							cancelBookHandler={setShowSearchModal}
							saveBookHandler={() => {
								setShowSearchModal(false)
							}}>
							<div className='relative w-full'>
								<input
									type='text'
									value={keyword}
									onChange={(e) => setKeyword(e.target.value)}
									className='w-full box-border h-10 p-4 text-white text-lg rounded-full focus:outline-none bg-gray-800'
									placeholder='Search books'
								/>
								<button
									className='absolute top-1.5 xl:top-1 right-2.5 box-border cursor-pointer rounded-full px-1.5'
									onClick={searchBookHandler}>
									<SearchIcon dimensions='h-7 w-7' color={keyword ? 'white' : '#9ca3af'} />
								</button>
							</div>
							<BookListCards books={searchResult} />
						</BookAddModal>
					) : (
						addBookModal && (
							<BookAddModal
								title='Add New Book'
								cancelBookHandler={setAddBookModal}
								saveBookHandler={() => {
									setSaveBook(true)
									setAddBookModal(false)
								}}>
								<BookAddForm selectBookHandler={setSelectedBook} saveBook={saveBook} />
							</BookAddModal>
						)
					)}
				</div>
			)}
		</Fragment>
	)
}

export default SelectBook

/*
<div className='flex items-center relative w-full my-4 xl:my-6'>
	<hr className='border-t-[0.1px] w-full border-gray-600' />
	<p className='text-gray-600 -mt-2 px-2'>or</p>
	<hr className='border-t-[0.1px] w-full border-gray-600' />
</div>
*/
