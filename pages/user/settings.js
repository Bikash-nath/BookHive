import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import UserContext from '../../store/userContext'
import LoginBanner from '../../components/login/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'

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
			<div className='bg-gradient h-[93vh]'>
				{!activeUser?.data ? (
					<LoginBanner
						title='Access Your Account Settings'
						message='Please login to access your personal account settings'
						icon={<SettingsIcon />}
					/>
				) : (
					<div
						className='flex items-start justify-center w-full min-h-ful
					l gap-6 p-4'>
						{activeUser?.data.image ? (
							<Image
								src={process.env.GENRES_URL + activeUser?.image}
								alt={activeUser.data.name}
								height={32}
								width={32}
								className='rounded-full p-1 w-8 h-8'
							/>
						) : (
							<AccountIcon dimensions='h-20 w-20' />
						)}
						<div className='rounded-lg w-fit m-2 bg-gray-900'>
							<p className='text-lg md:text-xl text-center font-semibold px-6 py-4'>
								Settings
							</p>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default SettingsPage
