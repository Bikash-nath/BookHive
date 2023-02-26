import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import UserContext from '../../store/userContext'
import LoginBanner from '../../components/login/LoginBanner'

import AccountIcon from '../../assets/icons/AccountIcon'
import SettingsIcon from '../../assets/icons/SettingsIcon'

function ProfilePage(props) {
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
					title='Access Your Profile'
					message='Please login to access your personal account'
					icon={<AccountIcon />}
				/>
			) : (
				<div className='flex flex-col items-center justify-center w-full h-[93vh] gap-8'>
					{activeUser?.data.image ? (
						<Image
							src={process.env.BOOKS_URL + activeUser?.image}
							alt={activeUser.data.name}
							height={32}
							width={32}
							className='rounded-full p-1 w-8 h-8'
						/>
					) : (
						<AccountIcon dimensions='h-20 w-20' />
					)}
					<div className='rounded-lg w-[90vw] md:w-[50vw] lg:w-[30vw] p-2 bg-stone-800 border border-black'>
						<div className='flex justify-between rounded-md py-2 gap-2'>
							<p className='text-lg md:text-xl font-semibold px-4'>Name</p>
							<p className='text-lg md:text-xl font-semibold px-4'>
								{activeUser.data.name}
							</p>
						</div>
					</div>
					<div className='rounded-lg w-[90vw] md:w-[50vw] lg:w-[30vw] p-2 bg-stone-800 border border-black'>
						<div className='flex justify-between rounded-md py-2 gap-2'>
							<p className='text-lg md:text-xl font-semibold px-4'>Email</p>
							<p className='text-lg md:text-xl text-right font-semibold px-4'>
								{activeUser.data.email}
							</p>
						</div>
					</div>
					<div className='rounded-lg w-[90vw] md:w-[50vw] lg:w-[30vw] p-2 bg-stone-800 border border-black'>
						<div className='flex justify-between rounded-md py-2 gap-2'>
							<p className='text-lg md:text-xl font-semibold px-4'>Location</p>
							<p className='text-lg md:text-xl text-right font-semibold px-4'>
								{activeUser.data.address.country}
							</p>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ProfilePage
