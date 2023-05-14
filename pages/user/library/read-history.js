import { useState, useEffect, useRef, useContext, Fragment } from 'react'
import Head from 'next/head'

import { getReadHistory } from '../../../API/userLibrary'
import UserContext from '../../../store/userContext'
import SpinnerContext from '../../../store/spinnerContext'
import useWindowWidth from '../../../hooks/useWindowWidth'
import ListGridModal from '../../../components/modals/ListGridModal'
import PageHeader from '../../../components/layouts/PageHeader'
import TopNavModal from '../../../components/modals/TopNavModal'
import LoginBanner from '../../../components/login/LoginBanner'
import HistoryIcon from '../../../assets/icons/HistoryIcon'

function ReadHistoryPage() {
	const userCtx = useContext(UserContext)
	const { toggleSpinner } = useContext(SpinnerContext)
	const [activeUser, setActiveUser] = useState(null)
	const [readHistory, setReadHistory] = useState([])

	const coverRef = useRef(null)
	const pageRef = useRef(null)
	const windowWidth = useWindowWidth()

	useEffect(() => {
		if (!activeUser) setActiveUser(userCtx.user)
		else {
			;(async () => {
				toggleSpinner(true)
				const data = await getReadHistory()
				if (data.readHistory?.length) {
					setReadHistory(data.readHistory)
				}
				toggleSpinner(false)
			})()
		}
	}, [activeUser])

	return (
		<Fragment>
			<Head>
				<title>History</title>
				<meta name='description' content='History section' />
			</Head>

			{!activeUser ? (
				<LoginBanner
					title='Keep track of what you watch'
					message="Read history isn't viewable when logged out"
					icon={<HistoryIcon />}
				/>
			) : (
				<div className='page-gradient h-full'>
					<div className='pb-16 xl:pb-8' ref={pageRef}>
						{windowWidth < 1280 ? (
							<TopNavModal pageTitle='Read History' pageRef={pageRef} coverRef={coverRef} />
						) : (
							<PageHeader pageTitle='Read history' />
						)}
						{readHistory.length ? (
							<ListGridModal listTitle='Read History' historyBooks={readHistory} coverRef={coverRef} />
						) : (
							<div className='flex flex-col items-center justify-center h-[93vh]'>
								<HistoryIcon dimensions='h-20 w-20' />
								<div className='flex text-center py-2 md:py-4 text-lg md:text-xl'>
									<h3>No read history found</h3>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</Fragment>
	)
}

export default ReadHistoryPage
