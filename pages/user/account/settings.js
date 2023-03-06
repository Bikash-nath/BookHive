import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import UserContext from '../../../store/userContext'
import SnackbarContext from '../../../store/snackbarContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import SettingsIcon from '../../../assets/icons/SettingsIcon'
import LogoutIcon from '../../../assets/icons/LogoutIcon'

function SettingsPage(props) {
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
						<button
							className='flex rounded-lg p-4 gap-6 bg-[#192132]'
							onClick={logOutHandler}>
							<LogoutIcon dimensions='h-7 w-7' />
							<p className='w-[4.9rem]'>Log out</p>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default SettingsPage
