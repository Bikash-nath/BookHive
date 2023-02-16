import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import LoginBanner from '../../components/login/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'

function SettingsPage(props) {
	const user = undefined

	return (
		<Fragment>
			<Head>
				<title>Settings</title>
				<meta name='description' content='Settings section' />
			</Head>
			<div className='bg-gradient h-[93vh]'>
				{!user ? (
					<LoginBanner
						title='Access Your Account Settings'
						message='Please login to access your personal account settings'
						icon={<SettingsIcon />}
					/>
				) : (
					<>
						{user?.name ? (
							<Image
								src={'http://127.0.0.1:5000' + activeUser?.image}
								alt={activeUser.name}
								height={32}
								width={32}
								className='rounded-full p-1 w-8 h-8'
							/>
						) : (
							<AccountIcon dimensions='h-20 w-20' />
						)}
						<h3 className='p-4'>{user.name}</h3>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default SettingsPage
