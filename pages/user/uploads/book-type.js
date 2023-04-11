import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import BookReadIcon from '../../../assets/icons/BookReadIcon'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'
import ArrowIcon from '../../../assets/icons/ArrowIcon'

function UploadBookType() {
	const snackbarCtx = useContext(SnackbarContext)
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const [bookType, setBookType] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

	const nextPageHandler = () => {
		if (!bookType) snackbarCtx.addMessage({ title: 'Please select a book type' })
		else router.push('/user/uploads/select-book')
	}

	return (
		<Fragment>
			<Head>
				<title>Upload Book Type</title>
				<meta name='description' content='Upload Book Type page' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Your Upload Book Type'
					message='Login as a creator or author to upload books, short stories or poems'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient pb-16 xl:pb-8'>
					<PageHeader pageTitle='Select Book Type' backBtn={true} />
					<div className='p-2 xl:p-4'>
						<p className='text-xl font-bold p-2 xl:p-4'>What do you want to upload?</p>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className={
								'flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]' +
								(bookType === 'new-book'
									? ' border-[#8C6AFF] border-[1px] shadow-sm shadow-purple-400'
									: '')
							}
							onClick={() => setBookType('new-book')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Create Your Own Book</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className={
								'flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]' +
								(bookType === 'summary'
									? ' border-[#8C6AFF] border-[1px] shadow-sm shadow-purple-400'
									: '')
							}
							onClick={() => setBookType('summary')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Book Summary</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className={
								'flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]' +
								(bookType === 'story'
									? ' border-[#8C6AFF] border-[1px] shadow-sm shadow-purple-400'
									: '')
							}
							onClick={() => setBookType('story')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Short Story</p>
						</button>
					</div>
					<div className='flex justify-start m-4'>
						<button
							className={
								'flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]' +
								(bookType === 'poem'
									? ' border-[#8C6AFF] border-[1px] shadow-sm shadow-purple-400'
									: '')
							}
							onClick={() => setBookType('poem')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Poem</p>
						</button>
					</div>
					<div className='flex justify-start m-4'>
						<button
							className={
								'flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]' +
								(bookType === 'blog'
									? ' border-[#8C6AFF] border-[1px] shadow-sm shadow-purple-400'
									: '')
							}
							onClick={() => setBookType('blog')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Blog</p>
						</button>
					</div>
					<div className='flex items-center justify-center p-4 md:p-6'>
						<button onClick={nextPageHandler} className={bookType ? 'btn-next' : 'btn-next-inactive'}>
							<span>Next</span>
							<ArrowIcon />
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadBookType
