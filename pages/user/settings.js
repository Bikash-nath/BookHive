import { Fragment } from 'react'

import LoginBanner from '../../layouts/LoginBanner'
import AccountIcon from '../../assets/icons/SearchIconAccountIcon'
import SettingsIcon from '../../assets/icons/SearchIconSettingsIcon'

function SettingPage(props) {
	const user = undefined

	return (
		<Fragment>
			<head>
				<title>Setting</title>
				<meta name='description' content='Setting section' />
			</head>
			<div className='screen-gradient text-white'>
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

export default SettingPage
