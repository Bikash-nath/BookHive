import { useEffect, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useContext } from 'react'
import UserContext from '../../store/userContext'
import { getUserProfile } from '../../api/userProfile'
import LoginBanner from '../../components/login/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'

function AccountPage(props) {
	const userCtx = useContext(UserContext)
	const activeUser = userCtx.userInfo

	useEffect(() => {
		if (!activeUser) {
			getUserProfile()
		}
	}, [activeUser])

	return (
		<Fragment>
			<Head>
				<title>Account</title>
				<meta name='description' content='Account section' />
			</Head>
			<div className='bg-gradient h-[93vh]'>
				{!activeUser ? (
					<LoginBanner
						title='Access Your Account'
						message='Please login to access your personal account'
						icon={<AccountIcon />}
					/>
				) : (
					<>
						{activeUser?.name ? (
							<Image
								src={'http://127.0.0.1:5000' + activeUser?.image}
								alt={activeUser}
								height={32}
								width={32}
								className='rounded-full p-1 w-8 h-8'
							/>
						) : (
							<AccountIcon dimensions='h-20 w-20' />
						)}
						<h3 className='p-4'>{activeUser.name}</h3>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default AccountPage
