import { Fragment } from 'react'

import LoginBanner from '../../layouts/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'

function ProfilePage(props) {
	const user = undefined

	return (
		<>
			<head>
				<title>Profile</title>
				<meta name='description' content='Profile section' />
			</head>
			<div className='screen-gradient text-white'>
				{!user ? (
					<LoginBanner
						title='Access Your Account'
						message='Please login to access your personal account'
						icon={<AccountIcon />}
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
		</>
	)
}

export default ProfilePage
