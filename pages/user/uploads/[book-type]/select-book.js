import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../../store/userContext'
import SnackbarContext from '../../../../store/snackbarContext'
import BookAddModal from '../../../../components/modals/BookAddModal'
import BookCard from '../../../../components/cards/BookCard'
import LoginBanner from '../../../../components/login/LoginBanner'
import PageHeader from '../../../../components/layouts/PageHeader'
import BookAddForm from '../../../../components/forms/BookAddForm'
import BookSearchModal from '../../../../components/modals/BookSearchModal'
import HorizontalRuleText from '../../../../components/ui/HorizontalRuleText'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import PlusCircleIcon from '../../../../assets/icons/PlusCircleIcon'
import ArrowIcon from '../../../../assets/icons/ArrowIcon'

function SelectBook() {
	const snackbarCtx = useContext(SnackbarContext)
	const { user } = useContext(UserContext)

	const [activeUser, setActiveUser] = useState(null)
	const [showSearchModal, setShowSearchModal] = useState(false)
	const [addBookModal, setAddBookModal] = useState(false)
	const [selectedBook, setSelectedBook] = useState(null)
	const [saveBook, setSaveBook] = useState(false)

	const router = useRouter()
	const bookType = router.asPath.split('uploads/')[1].split('/select-book')[0]

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

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
									className='font-size-[1.6rem] text-lg text-gray-200 font-medium px-4 py-2.5 mb-2 bg-[#192136] rounded-full cursor-pointer'>
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
								if (selectedBook) {
									setShowSearchModal(false)
								} else snackbarCtx.addMessage({ title: 'Please search and select a book' })
							}}>
							<BookSearchModal selectedBook={selectedBook} selectBookHandler={setSelectedBook} />
						</BookAddModal>
					) : (
						addBookModal && (
							<BookAddModal
								title='Add New Book'
								cancelBookHandler={setAddBookModal}
								saveBookHandler={() => {
									if (selectedBook) {
										setSaveBook(true)
										setAddBookModal(false)
									} else snackbarCtx.addMessage({ title: 'Please enter correct book details' })
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
