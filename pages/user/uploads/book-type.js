import { useState, useEffect, useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import LoginBanner from '../../../components/login/LoginBanner'
import PageHeader from '../../../components/layouts/PageHeader'
import BookReadIcon from '../../../assets/icons/BookReadIcon'

function UploadBookType() {
	const { user } = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		setActiveUser(user?.data)
	}, [user])

	return (
		<Fragment>
			<Head>
				<title>Upload Book Type</title>
				<meta name='description' content='Upload Book Type page for creators' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Your Upload Book Type'
					message='Login as a creator or author to upload books, short stories or poems'
					icon={<PlusCircleIcon />}
				/>
			) : (
				<div className='page-gradient'>
					<PageHeader pageTitle='Settings' backBtn={true} />
					<div className='p-2 xl:p-4'>
						<p className='text-xl font-bold py-2 xl:py-4'>What do you want to upload?</p>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-60 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-base'>Create Your Own Book</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-60 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-base'>Book Summary</p>
						</button>
					</div>

					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-60 p-4 gap-6 bg-[#192136]'
							onClick={logOutHandler}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-base'>Short Story</p>
						</button>
					</div>
					<hr className='border-t-[0.1px] w-screen xs:w-64 border-gray-700' />
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-60 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-base'>Poem</p>
						</button>
					</div>
					<div className='flex justify-start m-4'>
						<button
							className='flex items-center rounded-lg w-full sm:w-60 p-4 gap-6 bg-[#192136]'
							onClick={() => router.push('')}>
							<BookReadIcon dimensions='h-7 w-7' />
							<p className='text-base'>Blog</p>
						</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default UploadBookType
