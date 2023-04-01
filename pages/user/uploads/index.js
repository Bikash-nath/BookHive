import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import PlusCircleIcon from '../../../assets/icons/PlusCircleIcon'

function UploadsPage() {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
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
				<div className='page-gradient relative'>
					<PageHeader pageTitle='My Uploads' />

					<div className='flex flex-col items-center justify-center h-screen p-2'>
						<div className='flex py-4'>
							<PlusCircleIcon dimensions='h-24 w-24' />
						</div>
						<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
							<h3>Upload ebooks and audiobooks to see here</h3>
						</div>
					</div>

					<div className='flex w-full xl:w-[85.5vw] justify-center fixed bottom-24 xl:bottom-16'>
						<button
							className='flex items-center gap-1 md:gap-2 p-1 xl:p-[.4rem] rounded-full bg-gray-800 shadow-lg shadow-gray-700'
							onClick={() => router.push('/user/uploads/new')}>
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
