import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { useContext } from 'react'
import UserContext from '../../store/userContext'
import LoginBanner from '../../components/login/LoginBanner'
import AccountIcon from '../../assets/icons/AccountIcon'

function ProfilePage(props) {
	const userCtx = useContext(UserContext)
	const activeUser = userCtx.userInfo

	useEffect(() => {
		if (!activeUser) {
			getUserProfile()
		}
	}, [activeUser])

	//<button className='flex items-center space-x-2 p-2 font-bold rounded-full justify-center lg:p-4 font-sans shadow-sm px-9 hover:bg-opacity-90 border-[0.5px] border-purple-500 border-1 hover:border-2 shadow-purple-100 transition hover:-translate-y-0.5 duration-150'>
	return (
		<Fragment>
			<Head>
				<title>Profile</title>
				<meta name='description' content='Profile section' />
			</Head>
			<div className='bg-gradient h-[93vh]'>
				{!user ? (
					<LoginBanner
						title='Access Your Profile'
						message='Please login to access your personal account'
						icon={<AccountIcon />}
					/>
				) : (
					<>
						{activeUser?.name ? (
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
						<h3 className='p-4'>{activeUser.name}</h3>
					</>
				)}
			</div>
		</Fragment>
	)
}

export default ProfilePage
