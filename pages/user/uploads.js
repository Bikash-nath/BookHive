import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'

import UserContext from '../../store/userContext'
import LoginBanner from '../../components/login/LoginBanner'
import PageHeader from '../../components/layouts/PageHeader'
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
					<PageHeader pageTitle='Uploads' />
					<div className='flex flex-col items-center justify-center h-[75vh] p-2'>
						<div className='flex py-4 text-white'>
							<PlusCircleIcon dimensions='h-24 w-24' />
						</div>
						<div className='flex text-center py-2 md:py-4 text-xl md:text-2xl'>
							<h3>Upload ebooks, audiobooks and magazines to see here</h3>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadsPage
