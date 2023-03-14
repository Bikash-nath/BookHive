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
		snackbarCtx.addMessage({ title: 'Log out successfull' })
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
				<div className='page-gradient h-full'>
					<PageHeader pageTitle='Settings' backBtn={true} />
					<div className='flex justify-start m-4'>
						<button className='flex items-center rounded-lg w-48 xl:w-60 p-4 gap-6 bg-[#192132]'>
							<LogoutIcon dimensions='h-8 w-8' />
							<p className='w-40 mx-auto'>Change password</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-48 xl:w-60 p-4 gap-6 bg-[#192132]'
							onClick={logOutHandler}>
							<LogoutIcon dimensions='h-8 w-8' />
							<p className='w-40 mx-auto'>Log out</p>
						</button>
					</div>
					<hr className='border-t-[0.1px] w-screen xs:w-64 border-gray-700' />
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-48 xl:w-60 p-4 gap-6 bg-[#192132]'
							onClick={() => router.push('/help/faq')}>
							<HelpIcon dimensions='h-7 w-7' />
							<p className='text-base mx-auto'>Help</p>
						</button>
					</div>
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-48 xl:w-60 p-4 gap-6 bg-[#192132]'
							onClick={() => router.push('/help/faq')}>
							<FeedbackIcon dimensions='h-7 w-7' />
							<p className='text-base mx-auto'>Send Feedback</p>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default SettingsPage
