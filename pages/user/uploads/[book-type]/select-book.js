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
import SelectMenu from '../../../../components/ui/SelectMenu'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import PlusCircleIcon from '../../../../assets/icons/PlusCircleIcon'
import ArrowIcon from '../../../../assets/icons/ArrowIcon'
import DocumentPlusIcon from '../../../../assets/icons/DocumentPlusIcon'
import CloseIcon from '../../../../assets/icons/CloseIcon'

function SelectBook() {
	const snackbarCtx = useContext(SnackbarContext)
	const { user } = useContext(UserContext)

	const [activeUser, setActiveUser] = useState(null)
	const [showSearchModal, setShowSearchModal] = useState(false)
	const [addBookModal, setAddBookModal] = useState(false)
	const [saveBook, setSaveBook] = useState(false)
	const [selectedBook, setSelectedBook] = useState(null)
	const [selectedBookType, setSelectedBookType] = useState(null)
	const [selectedFileType, setSelectedFileType] = useState(null)

	const router = useRouter()
	const bookType = router.asPath.split('uploads/')[1].split('/select-book')[0]

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

	const nextPageHandler = () => {
		if (!selectedBook) snackbarCtx.addMessage({ title: 'Please select a book which you want to upload' })
		else router.push('/user/uploads')
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
						{selectedBook && !(addBookModal || showSearchModal) ? (
							<div className='flex items-center justify-start w-fit relative'>
								<BookCard book={selectedBook} />
								{selectedBook && (
									<button
										onClick={() => setSelectedBook(null)}
										className='absolute top-0.5 right-0.5 xl:top-2'>
										<CloseIcon dimensions='h-7 w-7' color='#8C6AFF' />
									</button>
								)}
							</div>
						) : (
							<Fragment>
								<p className='text-xl font-semibold my-4'>{`Which book's ${bookType} you want to upload`}</p>
								<p className='text-xl font-medium text-center py-2'>Find book from our collection</p>
								<div
									type='text'
									onClick={setShowSearchModal}
									className='font-medium text-lg text-gray-200 px-4 py-2.5 mb-2 bg-[#192136] rounded-full cursor-pointer'>
									Search books
								</div>
								<HorizontalRuleText message='or' />
								<p className='text-xl text-center font-medium pb-2'>Upload your own book</p>
								<button
									className='flex items-center justify-between rounded-lg w-full sm:mr-8 gap-6 bg-[#192136]'
									onClick={() => setAddBookModal(true)}>
									<p className='font-medium px-3 py-2 xl:px-3.5 xl:py-2.5'>Add New Book</p>
									<div className='flex items-center p-3 xl:px-3.5 rounded-lg bg-[#111844]'>
										<PlusIcon dimensions='h-6 w-6' />
									</div>
								</button>
							</Fragment>
						)}
						{selectedBook && !(addBookModal || showSearchModal) && (
							<>
								<div className='flex flex-col w-full gap-4 my-8'>
									<SelectMenu
										title='Select Book Type'
										selectedOption={selectedBookType}
										selectOptionHandler={setSelectedBookType}
										options={['eBook', 'audiobook']}
									/>
									<SelectMenu
										title='Select File Type'
										selectedOption={selectedFileType}
										selectOptionHandler={setSelectedFileType}
										options={selectedBookType == 'eBook' ? ['ePub', 'PDF'] : ['mp3', 'm4b']}
									/>
								</div>

								<div className='mt-1.5 flex justify-center w-2/3 rounded-lg border border-dashed border-gray-600 py-4'>
									<div className='flex flex-col items-center justify-center gap-2'>
										<DocumentPlusIcon dimensions='h-8 w-8' />
										<div className='flex text-sm leading-6 text-gray-400'>
											<label
												htmlFor='file-upload'
												className='relative cursor-pointer rounded-md font-semibold text-[#8C6AFF] focus-within:outline-none focus-within:border-2 focus-within:border-[#8C6AFF] focus-within:border-offset-2 hover:text-indigo-500'>
												<span>Upload a file</span>
												<input
													id='file-upload'
													name='file-upload'
													type='file'
													onSelect={(e) => console.log('File event', e)}
													className='sr-only'
												/>
											</label>
										</div>
									</div>
								</div>
							</>
						)}
						<div className='flex items-center justify-center gap-4 w-full py-8 xl:py-10'>
							<button
								onClick={nextPageHandler}
								className={
									selectedBook &&
									selectedBookType &&
									selectedFileType &&
									!(addBookModal || showSearchModal)
										? 'btn-next'
										: 'btn-next-inactive'
								}>
								<span>Upload</span>
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
									document.body.style.overflowY = 'auto'
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
									setSaveBook(true)
									document.body.style.overflowY = 'auto'
								}}>
								<BookAddForm
									saveBook={saveBook}
									selectBookHandler={setSelectedBook}
									setAddBookModal={setAddBookModal}
								/>
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
