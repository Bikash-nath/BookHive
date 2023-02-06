import { Fragment } from 'react'
import Head from 'next/head'

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
			<div className='bg-gradient'>
				{!user ? (
					<LoginBanner
						title='Access Your Account Settings'
						message='Please login to access your personal account settings'
						icon={<SettingsIcon />}
					/>
				) : (
					<>
						{user?.name ? (
							<img
								className='rounded-full p-1 w-8 h-8'
								src={user?.image}
								alt='user image'
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
