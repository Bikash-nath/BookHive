import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import UserContext from '../../store/userContext'
import LoginBanner from '../../components/login/LoginBanner'
import PageHeader from '../../components/layouts/PageHeader'
import SearchBar from '../../components/SearchBar'
import PlusCircleIcon from '../../assets/icons/PlusCircleIcon'

function UploadsPage() {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

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
					message='Login as creator to upload books'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader pageTitle='My Uploads' />
					<div className='p-1 py-2 xl:p-2 xl:py-3 sm:w-3/5 md:w-1/2'>
						<h3 className='text-xl md:text-2xl text-left p-2 md:p-4'>Find a book and upload</h3>
						<div className='md:px-2 xl:px-4'>
							<SearchBar />
						</div>
					</div>
					<div className='flex flex-col items-center justify-center h-[70vh] p-2'>
						<div className='flex py-4 text-white'>
							<PlusCircleIcon dimensions='h-24 w-24' />
						</div>
						<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
							<h3>Upload ebooks and audiobooks to see here</h3>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadsPage
