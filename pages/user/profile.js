import Head from 'next/head'
import { Fragment } from 'react'

function ProfilePage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>Profile</title>
				<meta name='description' content='Profile section' />
			</Head>
		</Fragment>
	)
}

export default ProfilePage
