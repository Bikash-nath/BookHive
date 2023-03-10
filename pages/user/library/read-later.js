import { useContext, Fragment } from 'react'
import Head from 'next/head'

import UserContext from '../../../../store/userContext'
import LoginBanner from '../../../../components/login/LoginBanner'
import PageHeader from '../../../../components/layouts/PageHeader'
import TopNavModal from '../../../../components/modals/TopNavModal'
import HistoryIcon from '../../../../assets/icons/HistoryIcon'

function ReadLaterPage() {
	const userCtx = useContext(UserContext)
	const [activeUser, setActiveUser] = useState(null)

	return (
		<Fragment>
			<Head>
				<title>Read later</title>
				<meta name='description' content='Read later section' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Save books to read later❗'
					message='Login to save books to read them later'
					icon={<HistoryIcon />}
				/>
			) : (
				<div className='page-gradient h-full'>
					<PageHeader pageTitle='Collections' />
					<TopNavModal />
					<PageHeader pageTitle='Read Later' />
					<div className='flex flex-col items-center justify-center h-[93vh]'>
						<HistoryIcon dimensions='h-20 w-20' />
						<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
							<h3>No read later books found</h3>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ReadLaterPage
