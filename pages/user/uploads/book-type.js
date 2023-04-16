import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import PageHeader from '../../../components/layouts/PageHeader'
import LoginBanner from '../../../components/login/LoginBanner'
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
		else router.push(`/user/uploads/${bookType}/select-book`)
	}

	const activeClassHandler = (type) => {
		return (
			'flex items-center w-full rounded-lg w-full sm:w-80 my-4 p-4 gap-6 bg-[#192136]' +
			(bookType === type ? ' border-[#8C6AFF] border-[1.8px]' : '')
		)
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
					<div className='p-4 xl:p-6'>
						<p className='text-xl font-bold p-2'>What do you want to upload?</p>

						<button className={activeClassHandler('summary')} onClick={() => setBookType('summary')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Book Summary</p>
						</button>
						<button className={activeClassHandler('story')} onClick={() => setBookType('story')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Short Story</p>
						</button>
						<button className={activeClassHandler('poem')} onClick={() => setBookType('poem')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Poem</p>
						</button>
						<button className={activeClassHandler('blog')} onClick={() => setBookType('blog')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Blog</p>
						</button>

						<div className='flex items-center justify-center w-full sm:w-80 py-4 md:py-6'>
							<button onClick={nextPageHandler} className={bookType ? 'btn-next' : 'btn-next-inactive'}>
								<span>Next</span>
								<ArrowIcon />
							</button>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadBookType
