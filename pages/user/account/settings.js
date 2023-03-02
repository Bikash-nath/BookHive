import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import NavigateBackButton from '../../../components/ui/NavigateBackButtton'
import AccountIcon from '../../../assets/icons/AccountIcon'
import SettingsIcon from '../../../assets/icons/SettingsIcon'

function SettingsPage(props) {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(userCtx.user)
		// if (!activeUser?.data) getUserProfile()
	}, [activeUser])

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
				<>
					<NavigateBackButton />
					<PageHeader pageTitle='Settings' />
					<div className='flex items-start justify-center w-full h-full lg:h-[93vh] gap-6 p-4'></div>
				</>
			)}
		</Fragment>
	)
}

export default SettingsPage
