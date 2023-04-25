import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import SettingsIcon from '../../../assets/icons/SettingsIcon'
import LogoutIcon from '../../../assets/icons/LogoutIcon'
import HelpIcon from '../../../assets/icons/HelpIcon'
import FeedbackIcon from '../../../assets/icons/FeedbackIcon'
import KeyIcon from '../../../assets/icons/KeyIcon'
import MailIcon from '../../../assets/icons/MailIcon'

function SettingsPage() {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const snackbarCtx = useContext(SnackbarContext)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [activeUser])

	const router = useRouter()

	const logOutHandler = (e) => {
		e.preventDefault()
		userCtx.removeUser()
		router.push('/')
		snackbarCtx.addMessage({ title: 'Log out successfull', status: 'success' })
	}

	return (
		<Fragment>
			<Head>
				<title>Settings</title>
				<meta name='description' content='Settings section' />
			</Head>

			{!activeUser?.data ? (
				<LoginBanner
					title='Access Your Account Settings'
					message='Please login to access your personal account settings'
					icon={<SettingsIcon />}
				/>
			) : (
				<div className='page-gradient pb-16 xl:pb-8'>
					<PageHeader pageTitle='Settings' backBtn={true} />
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('/user/account/update-email')}>
							<MailIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Update Email</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('/user/account/update-password')}>
							<KeyIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Update Password</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]'
							onClick={logOutHandler}>
							<LogoutIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Log Out</p>
						</button>
					</div>
					<hr className='border-t-[0.1px] w-screen sm:w-80 m-4 my-6 border-gray-700' />
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('/help/faq')}>
							<HelpIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Help</p>
						</button>
					</div>
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-80 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('/help/support')}>
							<FeedbackIcon dimensions='h-7 w-7' />
							<p className='text-lg font-medium'>Support</p>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default SettingsPage
