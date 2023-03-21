import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import UserContext from '../../../../store/userContext'
import { getUserProfile, updateUserProfile } from '../../../../api/userProfile'
import SnackbarContext from '../../../../store/snackbarContext'
import SpinnerContext from '../../../../store/spinnerContext'
import LoginBanner from '../../../../components/login/LoginBanner'
import PageHeader from '../../../../components/layouts/PageHeader'
import AccountIcon from '../../../../assets/icons/AccountIcon'

function EditProfilePage(props) {
	const snackbarCtx = useContext(SnackbarContext)
	const { toggleSpinner } = useContext(SpinnerContext)

	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const [name, setName] = useState('')
	const [gender, setGender] = useState('')
	const [dob, setDob] = useState('')
	const [address, setAddress] = useState('')

	useEffect(() => {
		if (user?.data) {
			setName(user.data.name)
			setGender(user.data.gender)
			setDob(user.data.dob)
			setAddress(user.data.address?.country)
			setActiveUser(user.data)
		} else getUserProfile()
	}, [user])

	const router = useRouter()

	const submitHandler = async (e) => {
		e.preventDefault()
		toggleSpinner(true)
		const updatedUser = await updateUserProfile(activeUser, name, gender, dob, address)
		if (updatedUser.data) {
			userCtx.addUser(updatedUser)
			snackbarCtx.addMessage({ title: 'Profile update successfull', status: 'success' })
		} else {
			snackbarCtx.addMessage({ title: updatedUser })
		}
		toggleSpinner(false)
		router.push('/user/account/profile')
	}

	return (
		<Fragment>
			<Head>
				<title>Edit profile</title>
				<meta name='description' content='User edit profile page' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Access Your Account'
					message='Please login to access your personal account'
					icon={<AccountIcon />}
				/>
			) : (
				<div className='page-gradient pb-12 xl:p-0'>
					<PageHeader pageTitle='Your profile' />
					<div className='flex items-center justify-center'>
						<div className='flex flex-col w-[90vw] md:w-[50vw] xl:w-[30vw] py-4 xl:py-10 gap-2 xl:gap-4'>
							<div className='flex items-center justify-center w-full p-4 xl:p-6'>
								{activeUser.image ? (
									<Image
										src={process.env.BOOKS_URL + activeUser?.image}
										alt={activeUser.name}
										height={32}
										width={32}
										className='rounded-full w-8 h-8'
									/>
								) : (
									<AccountIcon dimensions='h-20 w-20' />
								)}
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full px-2'>
									<p className='text-xl font-medium text-white text-left'>Name</p>
								</div>
								<div className='rounded-lg w-full'>
									<input
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder='Your name'
										type='text'
										className='edit-field box-border'
									/>
								</div>
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full px-2'>
									<p className='text-xl font-medium text-white text-left'>
										Gender
									</p>
								</div>
								<div className='rounded-lg w-full'>
									<input
										value={gender}
										onChange={(e) => setGender(e.target.value)}
										placeholder='Your gender'
										type='text'
										className='edit-field box-border'
									/>
								</div>
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full px-2'>
									<p className='text-xl font-medium text-white text-left'>
										Birthday
									</p>
								</div>
								<div className='rounded-lg w-full'>
									<input
										value={dob}
										onChange={(e) => setDob(e.target.value)}
										placeholder='Your birthday'
										type='text'
										className='edit-field box-border'
									/>
								</div>
							</div>
							<div className='w-full'>
								<div className='flex items-start justify-start w-full px-2'>
									<p className='text-xl font-medium text-white text-left'>
										Address
									</p>
								</div>
								<div className='rounded-lg w-full'>
									<input
										value={address}
										onChange={(e) => setAddress(e.target.value)}
										placeholder='Your address'
										type='text'
										className='edit-field box-border'
									/>
								</div>
							</div>
							<div className='flex justify-center w-full py-6'>
								<button className='login-btn' onClick={submitHandler}>
									<span>Save</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default EditProfilePage
