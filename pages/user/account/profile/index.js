import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import UserContext from '../../../../store/userContext'
import LoginBanner from '../../../../components/login/LoginBanner'
import PageHeader from '../../../../components/layouts/PageHeader'
import AccountIcon from '../../../../assets/icons/AccountIcon'
import SettingsIcon from '../../../../assets/icons/SettingsIcon'

function AccountPage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
		// if (!activeUser) getUserAccount()
	}, [user])

	return (
		<Fragment>
			<Head>
				<title>User Profile</title>
				<meta name='description' content='User profile page' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Access Your Account'
					message='Please login to access your personal account'
					icon={<AccountIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader
						pageTitle='Your profile'
						rightContainer={
							<Link href='/user/account/settings'>
								<div className='absolute top-4 right-4'>
									<SettingsIcon dimensions='h-7 w-7' color='white' />
								</div>
							</Link>
						}
					/>
					<div className='flex items-center justify-center py-6'>
						<div className='flex flex-col w-[90vw] md:w-[50vw] xl:w-[30vw] xl:py-12 gap-3 xl:gap-5'>
							<div className='flex items-center justify-center w-full p-4 xl:p-6'>
								{activeUser?.image ? (
									<Image
										src={process.env.BOOKS_URL + activeUser?.image}
										alt={activeUser.name}
										height={32}
										width={32}
										className='rounded-full p-1 w-8 h-8'
									/>
								) : (
									<AccountIcon dimensions='h-20 w-20' />
								)}
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full p-2'>
									<p className='text-xl font-medium text-white text-left'>Name</p>
								</div>
								<div className='rounded-xl px-4 py-1 bg-[#192132]'>
									<p className='text-lg rounded-md py-2 font-medium'>{activeUser.name}</p>
								</div>
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full p-2'>
									<p className='text-xl font-medium text-white text-left'>Email</p>
								</div>
								<div className='rounded-xl px-4 py-1 bg-[#192132]'>
									<p className='text-lg rounded-md py-2 font-medium'>{activeUser.email}</p>
								</div>
							</div>
							{activeUser.dob && (
								<div className='w-full'>
									<div className='flex items-start justify-start w-full p-2'>
										<p className='text-xl font-medium text-white text-left'>Birthday</p>
									</div>
									<div className='rounded-xl px-4 py-1 bg-[#192132]'>
										<p className='text-lg rounded-md py-2 font-medium'>
											{activeUser.dob.split('T')[0]}
										</p>
									</div>
								</div>
							)}
							<div className='w-full'>
								<div className='flex items-start justify-start w-full p-2'>
									<p className='text-xl font-medium text-white text-left'>Address</p>
								</div>
								<div className='rounded-xl px-4 py-1 bg-[#192132]'>
									<p className='text-lg rounded-md py-2 font-medium'>{activeUser.address}</p>
								</div>
							</div>
							<div className='flex justify-center my-6'>
								<button
									className='login-btn w-[90vw] md:w-[50vw] xl:w-[30vw]'
									onClick={() => router.push('/user/account/profile/edit')}>
									<span>Edit profile</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default AccountPage
