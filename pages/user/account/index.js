import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import UserContext from '../../../store/userContext'
import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import AccountIcon from '../../../assets/icons/AccountIcon'
import SettingsIcon from '../../../assets/icons/SettingsIcon'

function AccountPage(props) {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	useEffect(() => {
		setActiveUser(user?.data)
		// if (!activeUser) getUserAccount()
	}, [user])

	return (
		<Fragment>
			<Head>
				<title>Settings</title>
				<meta name='description' content='Settings section' />
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
					<div className='flex flex-col items-center justify-center py-6 xl:py-12 w-full gap-6 xl:gap-8'>
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
						<div>
							<div className='flex items-start justify-start w-full p-2'>
								<p className='text-xl md:text-2xl font-medium text-white text-left px-4'>
									Name
								</p>
							</div>
							<div className='rounded-lg w-[90vw] md:w-[50vw] xl:w-[30vw] px-2 bg-[#192132]'>
								<p className='text-lg md:text-xl rounded-md py-2 font-medium px-4'>
									{activeUser.name}
								</p>
							</div>
						</div>
						<div>
							<div className='flex items-start justify-start w-full p-2'>
								<p className='text-xl md:text-2xl font-medium text-white text-left px-4'>
									Email
								</p>
							</div>
							<div className='rounded-lg w-[90vw] md:w-[50vw] xl:w-[30vw] px-2 bg-[#192132]'>
								<p className='text-lg md:text-xl rounded-md py-2 font-medium px-4'>
									{activeUser.email}
								</p>
							</div>
						</div>
						<div>
							<div className='flex items-start justify-start w-full p-2'>
								<p className='text-xl md:text-2xl font-medium text-white text-left px-4'>
									Location
								</p>
							</div>
							<div className='rounded-lg w-[90vw] md:w-[50vw] xl:w-[30vw] px-2 bg-[#192132]'>
								<p className='text-lg md:text-xl rounded-md py-2 font-medium px-4'>
									{activeUser.address?.country}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default AccountPage
