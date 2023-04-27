import { useState, useEffect, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getUploads } from '../../../API/userUploads'
import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import SpinnerContext from '../../../store/spinnerContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'
import BookCard from '../../../components/cards/BookCard'
import { formattedDate } from '../../../utils/helpers/formatDate'

function UploadsPage() {
	const { user } = useContext(UserContext)
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)

	const [activeUser, setActiveUser] = useState(null)
	const [uploads, setUploads] = useState([])

	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
		;(async () => {
			toggleSpinner(true)
			const data = await getUploads()
			console.log('uploads', data)
			if (!data.uploads) {
				snackbarCtx.addMessage({ title: uploads, status: 'fail' })
			} else {
				setUploads(data.uploads)
			}
			toggleSpinner(false)
		})()
	}, [user])

	return (
		<Fragment>
			<Head>
				<title>Uploads</title>
				<meta name='description' content='Uploads page for creators' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Your Uploads'
					message='Login as a creator or author to upload books, short stories or poems'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient relative h-screen'>
					<PageHeader pageTitle='My Uploads' />

					{uploads?.length ? (
						<div className='list-grid px-2 xl:p-5'>
							{uploads.map((upload, i) => (
								<div
									className='flex flex-col items-center justify-center rounded-md w-[7.1rem] xl:w-[10.2rem] py-2 relative select-none'
									key={i}>
									<BookCard book={upload.book} />
									<div className='flex justify-center w-full rounded-3xl bg-[#192132] cursor-pointer'>
										<p className='text-xs xl:text-sm font-light truncate leading-relaxed p-2 text-slate-300'>
											{upload.bookType + ' • ' + formattedDate(upload.createdAt)}
										</p>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className='flex flex-col items-center justify-center h-2/3 p-2'>
							<div className='flex py-4'>
								<PlusCircleIcon dimensions='h-24 w-24' />
							</div>
							<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
								<h3>Upload ebooks and audiobooks to see here</h3>
							</div>
						</div>
					)}

					<div className='flex w-full xl:w-[85.5vw] justify-center fixed bottom-24 xl:bottom-16'>
						<button
							className='flex items-center gap-1 md:gap-2 p-1 xl:p-[.4rem] rounded-full bg-slate-700 shadow-sm shadow-gray-700'
							onClick={() => router.push('/user/uploads/book-type')}>
							<PlusCircleIcon dimensions='h-7 w-7' />
							<div className='text-white font-bold p-[.15rem] pr-2 xl:p-1 xl:pr-[.3rem]'>Upload</div>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadsPage

/*
<div className='p-1 py-2 xl:p-2 xl:py-3 sm:w-3/5 md:w-1/2'>
						<h3 className='text-xl md:text-2xl text-left p-2 md:p-4'>Find a book and upload</h3>
						<div className='md:px-2 xl:px-4'>
							<SearchBar />
						</div>
					</div>
					*/
